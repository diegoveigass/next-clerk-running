import Link from "next/link";
import { ModeToggle } from "./ui/toggle-theme-mode";

export default function Header() {
	return (
		<header className="flex items-center justify-between p-4 max-[320px]:flex-col">
			<h1 className="text-2xl font-bold">Run.ning center</h1>
			<div className="flex items-center space-x-4">
				<Link href="/">Dashboard</Link>
				<Link href="/runnings">Runnings</Link>
				<ModeToggle />
			</div>
		</header>
	);
}
