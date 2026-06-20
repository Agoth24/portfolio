import { Link } from "react-router";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/cn";

const navLinks = [
	{ id: 0, linkName: "Projects", path: "/projects", selected: false },
	{ id: 1, linkName: "Writing", path: "/blog", selected: false },
];

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const bodyOverflow = document.body.style.overflow;
		const htmlOverflow = document.documentElement.style.overflow;

		if (menuOpen) {
			document.body.style.overflow = "hidden";
			document.documentElement.style.overflow = "hidden";
		}

		return () => {
			document.body.style.overflow = bodyOverflow;
			document.documentElement.style.overflow = htmlOverflow;
		};
	}, [menuOpen]);

	return (
		<header
			className={cn(
				"z-50",
				menuOpen
					? "fixed inset-x-0 top-0 h-20 bg-bg pt-12"
					: "mt-12",
			)}
		>
			<nav
				className={cn(
					"flex justify-between items-start",
					menuOpen && "mx-auto w-full md:max-w-3xl px-6",
				)}
			>
				{/* TITLE */}
				<Link to="/" className="flex items-center">
					<h1 className="link font-heading text-xl sm:text-2xl">
						AGOTH AROP
					</h1>
				</Link>

				<button
					type="button"
					className="link sm:hidden cursor-pointer"
					aria-label="Toggle menu"
					aria-expanded={menuOpen}
					aria-controls="mobile-menu"
					onClick={() => setMenuOpen((prev) => !prev)}
				>
					{menuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>

				<div className="hidden sm:flex items-center gap-4">
					{/* NAV LINKS */}
					<div className="flex gap-2 sm:gap-8">
						<ul className="flex gap-6">
							{navLinks.map((link) => (
								<li key={link.id}>
									<Link
										className="link flex flex-col items-center"
										to={link.path}
									>
										<p className="text-lg">
											{link.linkName}
										</p>
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* SOCIAL ICONS */}
					<div className="flex sm:ml-6 gap-4">
						<a
							href="https://www.linkedin.com/in/agoth-arop-9b19203a3/"
							target="_blank"
							rel="noopener noreferrer"
							className="link"
						>
							<FaLinkedin size={20} />
						</a>
						<a
							href="https://github.com/agoth24"
							target="_blank"
							rel="noopener noreferrer"
							className="link"
						>
							<FaGithub size={20} />
						</a>
					</div>
				</div>
			</nav>

			{menuOpen && (
				<div
					id="mobile-menu"
					className="sm:hidden fixed inset-x-0 top-20 bottom-0 overflow-y-auto bg-bg px-6"
				>
					<div className="flex h-full flex-col gap-8 py-8">
						<ul className="flex flex-col gap-6">
							{navLinks.map((link) => (
								<li key={link.id}>
									<Link
										className="link flex flex-col"
										to={link.path}
										onClick={() => setMenuOpen(false)}
									>
										<p className="text-base">
											{link.linkName}
										</p>
									</Link>
								</li>
							))}
						</ul>

						<div className="flex gap-4">
							<a
								href="https://www.linkedin.com/in/agoth-arop-9b19203a3/"
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => setMenuOpen(false)}
								className="link"
							>
								<FaLinkedin size={20} />
							</a>
							<a
								href="https://github.com/agoth24"
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => setMenuOpen(false)}
								className="link"
							>
								<FaGithub size={20} />
							</a>
						</div>
					</div>
				</div>
			)}
		</header>
	);
};
export default Header;
