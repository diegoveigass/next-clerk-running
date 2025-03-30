import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function Home() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-8 pt-6 h-full">
			<h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
			<div className="flex-1 flex flex-col">
				<div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
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
					<Card>
						<CardHeader>
							<CardTitle>Total de corridas</CardTitle>
							<CardDescription>
								Quantas corridas foram realizadas?
							</CardDescription>
							<CardContent className="p-0 space-y-1">
								<div className="text-3xl font-bold text-muted-foreground">
									4
								</div>
								<div className="text-sm text-muted-foreground">
									+ 10% em relação ao mês passado
								</div>
							</CardContent>
						</CardHeader>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Total de corridas</CardTitle>
							<CardDescription>
								Quantas corridas foram realizadas?
							</CardDescription>
							<CardContent className="p-0 space-y-1">
								<div className="text-3xl font-bold text-muted-foreground">
									4
								</div>
								<div className="text-sm text-muted-foreground">
									+ 10% em relação ao mês passado
								</div>
							</CardContent>
						</CardHeader>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Total de corridas</CardTitle>
							<CardDescription>
								Quantas corridas foram realizadas?
							</CardDescription>
							<CardContent className="p-0 space-y-1">
								<div className="text-3xl font-bold text-muted-foreground">
									4
								</div>
								<div className="text-sm text-muted-foreground">
									+ 10% em relação ao mês passado
								</div>
							</CardContent>
						</CardHeader>
					</Card>
				</div>
				<div className="bg-blue-600 flex-1 flex">table</div>
			</div>
		</div>
	);
}
