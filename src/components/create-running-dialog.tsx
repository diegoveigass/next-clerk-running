"use client";

import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const timeRegex = /^((\d+h)?(\d+m)?(\d+s)?)$/;

const createNewRunningSchema = z.object({
	time: z
		.string()
		.regex(timeRegex, "Formato inválido. Use algo como '1h33m21s'")
		.transform((value) => {
			const match = value.match(/(\d+h)?(\d+m)?(\d+s)?/);
			if (!match) return 0;

			const hours = match[1]
				? Number.parseInt(match[1].replace("h", "")) * 3600
				: 0;
			const minutes = match[2]
				? Number.parseInt(match[2].replace("m", "")) * 60
				: 0;
			const seconds = match[3] ? Number.parseInt(match[3].replace("s", "")) : 0;

			return hours + minutes + seconds;
		}),
});

type FormValues = z.infer<typeof createNewRunningSchema>;

export default function CreateRunningDialog() {
	const [isOpen, setIsOpen] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(createNewRunningSchema),
	});

	function handleCreateNewRunning(data: FormValues) {
		console.log(data);
	}

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button variant="outline">Criar nova corrida</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Adicionar corrida</DialogTitle>
					<DialogDescription>
						Aqui é onde você irá adicionar a sua melhor corrida :)
					</DialogDescription>
				</DialogHeader>
				<form
					className="grid gap-4 py-4"
					onSubmit={handleSubmit(handleCreateNewRunning)}
				>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="time" className="text-right">
							Tempo
						</Label>
						<Input
							id="time"
							defaultValue="33m25s"
							data-error={!!errors.time}
							className="col-span-3 data-[error=true]:border data-[error=true]:border-red-500"
							{...register("time")}
						/>
					</div>
					{errors.time && (
						<p className="text-sm text-red-500">{errors.time.message}</p>
					)}
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="distance">Distância percorrida</Label>
						<Input id="distance" defaultValue="4.25" className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="pace">Pace (min/km)</Label>
						<Input
							id="pace"
							readOnly
							disabled
							value="7:53"
							prefix="/km"
							className="col-span-1"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="date">Data da corrida</Label>
						<Input id="date" type="datetime-local" className="col-span-3" />
					</div>
					<Button type="submit">Criar</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
}
