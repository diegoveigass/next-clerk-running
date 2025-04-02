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

export default function CreateRunningDialog() {
	const [isOpen, setIsOpen] = useState(false);

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
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="time" className="text-right">
							Tempo
						</Label>
						<Input id="time" defaultValue="33m25s" className="col-span-3" />
					</div>
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
				</div>
				<Button>Criar</Button>
			</DialogContent>
		</Dialog>
	);
}
