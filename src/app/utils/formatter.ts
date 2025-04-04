export const timeRegex = /^(?:(\d+)h\s*)?(?:(\d+)m\s*)?(?:(\d+)s\s*)?$/i;

export function parseTimeToSeconds(time: string | undefined): number {
	if (!time) return 0;

	const match = time.match(timeRegex);

	if (!match) return 0;

	const hours = match[1] ? Number.parseInt(match[1], 10) * 3600 : 0;
	const minutes = match[2] ? Number.parseInt(match[2], 10) * 60 : 0;
	const seconds = match[3] ? Number.parseInt(match[3], 10) : 0;

	return hours + minutes + seconds;
}
