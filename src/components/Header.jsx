import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Dot } from "lucide-react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const navLinks = [
	{ id: 0, linkName: "Projects", path: "/projects", selected: false },
	{ id: 1, linkName: "Writing", path: "/blog", selected: false },
];

const Title = ({ text }) => {
	<h1 className="font-nimbus-bold text-2xl dark:text-zinc-100 hover:text-teal-500 transition-all duration-150 ease-in-out">
		{text}
	</h1>;
};
const DarkModeToggle = () => {
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
            if (mq.removeEventListener) mq.removeEventListener("change", handler);
            else mq.removeListener(handler);
        };
    }, [])

	const handleToggle = () => {
        setDark((prev) => {
            const next = !prev;
            try {
                localStorage.getItem("theme", next ? "dark" : "light");
            } catch {
                //
            }
            return next;
        })
	};

	return (
		<button
			onClick={handleToggle}
			className="cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-600 p-2 rounded-lg"
		>
			{!dark ? (
				<IoMoonOutline size={20} className="text-teal-500" />
			) : (
				<IoSunnyOutline size={20} className="text-violet-400" />
			)}
		</button>
	);
};

const Header = () => {
	return (
		<header className="px-6 mt-16">
			<nav className="flex max-[350px]:flex-col max-[350px]:gap-4 justify-between items-start">
				<Link to="/">
					<h1 className="font-nimbus-bold text-2xl dark:text-zinc-100 hover:text-teal-500 transition-all duration-150 ease-in-out">
						AGOTH AROP
					</h1>
				</Link>

				<div className="flex gap-4">
					{/* DARK MODE SWITCH */}
					<DarkModeToggle />
					{/* NAV LINKS */}
					<ul className="flex max-[350px]:gap-4 gap-8">
						{navLinks.map((link) => (
							<li key={link.id}>
								<Link
									className="dark:text-teal-500 hover:text-teal-700 flex flex-col items-center transition-all duration-150 ease-in-out"
									to={link.path}
								>
									<p className="text-sm">{link.linkName}</p>
									<Dot className="-mt-1.5" />
								</Link>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</header>
	);
};
export default Header;
