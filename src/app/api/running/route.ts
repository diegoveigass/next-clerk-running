import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
	if (request.method !== "POST") {
		throw new Error("Method not allowed!");
	}

	const body = await request.json();

	const { date, time, distance, pace } = body;

	if (!date || !time || !distance || !pace) {
		return Response.json({ error: "Dados faltantes" }, { status: 400 });
	}

	await prisma.running.create({
		data: {
			date,
			distance,
			pace,
			time,
			user_id: "365a5ead-d38a-4404-9656-df74ba8d5b38",
		},
	});

	return Response.json({}, { status: 201 });
}
