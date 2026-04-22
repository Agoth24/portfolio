import { Link } from "react-router";
import { Dot, Menu } from "lucide-react";

const navLinks = [
	{ id: 0, linkName: "Projects", path: "/projects", selected: true },
	{ id: 1, linkName: "Writing", path: "/blog", selected: true },
	// { id: 2, linkName: "Connect", path: "/", selected: true },
];

// Componenet wrapper for condtional menu buttons
// const MenuButton = ({ isOpen, onClick }) => {
// 	return (
// 		<button className="cursor-pointer md:hidden" onClick={onClick}>
// 			{isOpen ? <X /> : <Menu />}
// 		</button>
// 	);
// };

const Header = () => {

	return (
		<header className="p-6 sm:py-8">
			<nav className="flex justify-between items-start">
				<Link to="/">
					<h1 className="font-nimbus-bold text-xl">AGOTH AROP</h1>
				</Link>

				{/* NAV LINKS */}
				<ul className="flex gap-8">
					{navLinks.map((link) => (
						<li key={link.id}>
							<Link
								className="text-zinc-300 hover:text-teal-500 flex flex-col items-center"
								to={link.path}
							>
								<p className="text-sm">{link.linkName}</p>
								<Dot className="-mt-1.5" />
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};
export default Header;
