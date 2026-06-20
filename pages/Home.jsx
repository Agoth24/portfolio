import ProjectCard from "../src/components/ProjectCard";

const projects = [
	{
		id: 0,
		title: "Inventory Management API",
		imageSrc: "../assets/images/bloom-inventory-ss.png",
		repoUrl: "https://github.com/Agoth24/bloom-inventory-api",
		liveUrl: "",
	},
	{
		id: 1,
		title: "BLOOM Bookstore",
		imageSrc: "../assets/images/bloom-bookstore-ss.png",
		repoUrl: "",
		liveUrl: "https://bloom-bookstore.vercel.app/",
	},
];

const Home = () => {
	return (
		<>
			<section className="flex flex-col font-noto-serif font-light text-md gap-4">
				<p>
					I'm a{" "}
					<strong className="text-teal-700 dark:text-teal-400">
						software engineer
					</strong>{" "}
					and CS undergrad at the University of Alberta.
				</p>
				<p>
					My technical background is mainly full-stack web development
					but recently I've been self-studying deep learning and{" "}
					<strong className="text-teal-700 dark:text-teal-400">
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
					<strong className="text-teal-700 dark:text-teal-400">
						check out what I'm working on
					</strong>{" "}
					👇
				</p>
			</section>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{projects.map((project) => (
					<ProjectCard project={project} key={project.id} />
				))}
			</div>
		</>
	);
};
export default Home;
