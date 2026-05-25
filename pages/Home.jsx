const projects = [
	{
		id: 0,
		title: "Inventory Management API",
		imageSrc: "../assets/images/bloom-inventory-ss.png",
		githubURL: "https://github.com/Agoth24/bloom-inventory-api",
		liveURL: "",
	},
	{
		id: 1,
		title: "BLOOM Bookstore",
		imageSrc: "../assets/images/bloom-bookstore-ss.png",
		githubURL: "",
		liveURL: "https://bloom-bookstore.vercel.app/",
	},
];

const Home = () => {
	return (
		<section className="flex flex-col gap-4 py-12 grow">
			<div className="flex flex-col font-noto-serif font-light text-md gap-4">
				<p>
					I'm a{" "}
					<strong className="text-teal-700 dark:text-teal-500">
						software engineer
					</strong>{" "}
					and CS undergrad at the University of Alberta.
				</p>
				<p>
					My technical background is mainly full-stack web development
					but recently I've been self-studying deep learning and{" "}
					<strong className="text-teal-700 dark:text-teal-500">
						training neural networks
					</strong>
					.
				</p>
				<p>
					I also study economics. I find the potential applications of
					algorithmics in decision making fascinating.
				</p>
				<p>
					When I'm away from the desk, I enjoy running and reading
					non-fiction (anything by Nassim Taleb or Cal Newport).
				</p>
				<p>
					But anyways... while you're here, you might as well{" "}
					<strong className="text-teal-700 dark:text-teal-500">check out what I'm working on</strong> 👇
				</p>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4 mt-6">
				{projects.map((project) => (
					<div
						className="border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900 shadow-md dark:shadow-lg p-4 rounded-md font-nimnus-bold"
						key={project.id}
					>
						<a
							href={project.liveURL || project.githubURL}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={project.imageSrc}
								alt={project.title}
								className="w-full aspect-video object-cover rounded-sm"
							/>
							<div className="flex flex-col gap-4 mt-4 font-semibold text-lg">
								<h3>{project.title}</h3>
							</div>
						</a>
					</div>
				))}
			</div>
		</section>
	);
};
export default Home;
