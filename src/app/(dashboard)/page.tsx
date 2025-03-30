import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import RunningCard from "./components/running-card";
import { Chart } from "./components/chart";

export default function Home() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-8 pt-6 h-full">
			<h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
			<div className="flex-1 flex flex-col gap-4">
				<div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
					<RunningCard />
					<RunningCard />
					<RunningCard />
					<RunningCard />
				</div>
				<div className="flex-1 flex h-full">
					<Chart />
				</div>
			</div>
		</div>
	);
}
