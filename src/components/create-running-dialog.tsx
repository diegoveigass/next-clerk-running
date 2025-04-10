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

import dayjs from "dayjs";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { parseTimeToSeconds, timeRegex } from "@/app/utils/formatter";

const createNewRunningSchema = z.object({
	time: z
		.string()
		.regex(timeRegex, "Formato inválido. Use algo como '1h33m21s'")
		.transform((value) => {
			return parseTimeToSeconds(value);
		}),
	distance: z.string().transform((value) => Number(value)),
	pace: z.string(),
	date: z.coerce.date().transform((value) => dayjs(value).toISOString()),
});

type FormValues = z.infer<typeof createNewRunningSchema>;

export default function CreateRunningDialog() {
	const [isOpen, setIsOpen] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		setValue,
	} = useForm({
		resolver: zodResolver(createNewRunningSchema),
	});

	async function handleCreateNewRunning(data: FormValues) {
		console.log("form", data);

		const response = await fetch("/api/running", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (response.status === 201) {
			setIsOpen(false);
		}
	}

	const distance = watch("distance");
	const time = watch("time");

	function calculatePace(distanceKm: number, timeSeconds: number) {
		if (distanceKm <= 0 || timeSeconds <= 0) return undefined;

		const paceSecondsPerKm = timeSeconds / distanceKm;
		const minutes = Math.floor(paceSecondsPerKm / 60);
		const seconds = Math.round(paceSecondsPerKm % 60);

		return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
	}

	const pace = calculatePace(Number(distance), parseTimeToSeconds(time));

	if (pace) {
		setValue("pace", pace);
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
							placeholder="33m25s"
							data-error={!!errors.time}
							className="col-span-3 data-[error=true]:border data-[error=true]:border-red-500"
							{...register("time")}
						/>
					</div>
					{errors.time && (
						<p className="text-sm text-red-500">{errors.time.message}</p>
					)}
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="distance">Distância percorrida (km)</Label>
						<Input
							id="distance"
							placeholder="5.22"
							type="number"
							step={0.01}
							className="col-span-3"
							{...register("distance")}
						/>
					</div>
					{errors.distance && (
						<p className="text-sm text-red-500">{errors.distance.message}</p>
					)}
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="pace">Pace (min/km)</Label>
						<Input
							className="col-span-1"
							readOnly
							placeholder="8.33"
							disabled
							prefix="/km"
							{...register("pace")}
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="date">Data da corrida</Label>
						<Input
							id="date"
							type="datetime-local"
							className="col-span-3"
							{...register("date")}
						/>
					</div>
					{errors.date && (
						<p className="text-sm text-red-500">{errors.date.message}</p>
					)}
					<Button type="submit">Criar</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
}
