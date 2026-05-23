import { useState, useEffect } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export const DarkModeToggle = () => {
	const [dark, setDark] = useState(() => {
		if (typeof window === "undefined") return false;
		const stored = localStorage.getItem("theme");
		if (stored === "dark") return true;
		if (stored === "light") return false;
		return (
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		);
	});

	useEffect(() => {
		document.documentElement.classList.toggle("dark", dark);
		try {
			localStorage.setItem("theme", dark ? "dark" : "light");
		} catch {
			//
		}
	}, [dark]);

	useEffect(() => {
		if (typeof window === "undefined") return;
		if (localStorage.getItem("theme")) return;

		const mq = window.matchMedia("(prefers-color-scheme: dark)");
		const handler = (e) => setDark(e.matches);

		if (mq.addEventListener) mq.addEventListener("change", handler);
		else mq.addListener(handler);

		return () => {
			if (mq.removeEventListener)
				mq.removeEventListener("change", handler);
			else mq.removeListener(handler);
		};
	}, []);

	const handleToggle = () => {
		setDark((prev) => {
			const next = !prev;
			try {
				localStorage.getItem("theme", next ? "dark" : "light");
			} catch {
				//
			}
			return next;
		});
	};

	return (
		<button
			onClick={handleToggle}
			className="cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-600 rounded-lg flex items-start sm:items-center sm:p-2"
		>
			{!dark ? (
				<IoMoonOutline size={20} className="text-teal-500" />
			) : (
				<IoSunnyOutline size={20} className="text-violet-400" />
			)}
		</button>
	);
};
