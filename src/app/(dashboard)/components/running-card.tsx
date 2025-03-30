import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";

export default function RunningCard() {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="font-semibold sm:text-2xl md:text-3xl">
					Total de corridas
				</CardTitle>
				<CardDescription className="text-sm sm:text-base">
					Quantas corridas foram realizadas?
				</CardDescription>
				<CardContent className="p-0 space-y-1">
					<div className="sm:text-2xl md:text-3xl font-bold">4</div>
					<div className="text-sm">+ 10% em relação ao mês passado</div>
				</CardContent>
			</CardHeader>
		</Card>
	);
}
