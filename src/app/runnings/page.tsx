import CreateRunningDialog from "@/components/create-running-dialog";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export default function RunningPage() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-8 pt-6 h-full">
			<div className="flex justify-between items-center">
				<h1 className="text-3xl font-bold">Corridas</h1>
				<CreateRunningDialog />
			</div>
			<Table>
				<TableCaption>Uma lista das corridas realizadas</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">Id</TableHead>
						<TableHead>Data</TableHead>
						<TableHead>Tempo</TableHead>
						<TableHead>Distância (km)</TableHead>
						<TableHead>Pace (min/km)</TableHead>
						<TableHead>Sensação pós corrida</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className="font-medium">
							dosi40ad-flkajsdor-oifjadifj3-fdalkjdf
						</TableCell>
						<TableCell>30/03/2025</TableCell>
						<TableCell>59m24s</TableCell>
						<TableCell>9.12</TableCell>
						<TableCell>5.58</TableCell>
						<TableCell>Forte 😊</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">
							dosi40ad-flkajsdor-oifjadifj3-fdalkjdf
						</TableCell>
						<TableCell>30/03/2025</TableCell>
						<TableCell>30m24s</TableCell>
						<TableCell>5.07</TableCell>
						<TableCell>5.22</TableCell>
						<TableCell>Forte 😊</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">
							dosi40ad-flkajsdor-oifjadifj3-fdalkjdf
						</TableCell>
						<TableCell>31/03/2025</TableCell>
						<TableCell>33m11s</TableCell>
						<TableCell>4.11</TableCell>
						<TableCell>6.52</TableCell>
						<TableCell>Cansado 😐</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
}
