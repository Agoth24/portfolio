import { Link } from "react-router";
import { Dot, Menu } from "lucide-react";

const navLinks = [
	{ id: 0, linkName: "Projects", path: "/projects", selected: false },
	{ id: 1, linkName: "Writing", path: "/blog", selected: false },
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

const Title = ({ text }) => {
	<h1 className="font-nimbus-bold text-2xl dark:text-zinc-100 hover:text-teal-500 transition-all duration-150 ease-in-out">
		{text}
	</h1>;
};

const Header = () => {
	return (
		<header className="p-6 mt-12">
			<nav className="flex max-[350px]:flex-col max-[350px]:gap-4 justify-between items-start">
				<Link to="/">
					<h1 className="font-nimbus-bold text-2xl dark:text-zinc-100 hover:text-teal-500 transition-all duration-150 ease-in-out">
						AGOTH AROP
					</h1>
				</Link>

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
			</nav>
		</header>
	);
};
export default Header;
