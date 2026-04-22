import { useState } from "react";
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
	const [dark, setDark] = useState(false);

	const handleToggle = () => {
		document.documentElement.classList.toggle("dark");
		setDark(!dark);
	};

	return (
		<button onClick={handleToggle} className="cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-600 p-2 rounded-lg">
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
