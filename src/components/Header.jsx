import { Link } from "react-router";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";

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
			className={clsx(
				"z-50",
				menuOpen
					? "fixed inset-x-0 top-0 h-20 bg-white pt-12 dark:bg-zinc-900"
					: null,
			)}
		>
			<nav
				className={clsx(
					"flex justify-between items-start",
					menuOpen && "mx-auto w-full md:max-w-3xl px-6",
				)}
			>
				{/* TITLE */}
				<Link to="/" className="flex items-center">
					<h1 className="font-nimbus-bold text-xl sm:text-2xl dark:text-zinc-100 hover:text-teal-700 dark:hover:text-teal-400 transition-all duration-150 ease-in-out">
						AGOTH AROP
					</h1>
				</Link>

				<button
					type="button"
					className="sm:hidden cursor-pointer hover:text-teal-700 dark:hover:text-teal-400 transition-all duration-150 ease-in-out"
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
										className="dark:text-zinc-100 hover:text-teal-700 dark:hover:text-teal-400 flex flex-col items-center transition-all duration-150 ease-in-out"
										to={link.path}
									>
										<p className="text-md">
											{link.linkName}
										</p>
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* SOCIAL ICONS */}
					<div className="flex sm:ml-6 gap-4 [&>a]:hover:text-teal-700 [&>a]:dark:hover:text-teal-400 [&>a]:transition-all [&>a]:duration-150 [&>a]:ease-in-out">
						<a
							href="https://www.linkedin.com/in/agoth-arop-9b19203a3/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin size={20} />
						</a>
						<a
							href="https://github.com/agoth24"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub size={20} />
						</a>
					</div>
				</div>
			</nav>

			{menuOpen && (
				<div
					id="mobile-menu"
					className="sm:hidden fixed inset-x-0 top-20 bottom-0 overflow-y-auto bg-zinc-50 dark:bg-zinc-900 px-6"
				>
					<div className="flex h-full flex-col gap-8 py-8">
						<ul className="flex flex-col gap-6">
							{navLinks.map((link) => (
								<li key={link.id}>
									<Link
										className="dark:text-zinc-100 hover:text-teal-700 dark:hover:text-teal-400 flex flex-col transition-all duration-150 ease-in-out"
										to={link.path}
										onClick={() => setMenuOpen(false)}
									>
										<p className="text-md">
											{link.linkName}
										</p>
									</Link>
								</li>
							))}
						</ul>

						<div className="flex gap-4 [&>a]:hover:text-teal-700 [&>a]:dark:hover:text-teal-400 [&>a]:transition-all [&>a]:duration-150 [&>a]:ease-in-out">
							<a
								href="https://www.linkedin.com/in/agoth-arop-9b19203a3/"
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => setMenuOpen(false)}
							>
								<FaLinkedin size={20} />
							</a>
							<a
								href="https://github.com/agoth24"
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => setMenuOpen(false)}
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
