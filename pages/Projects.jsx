import ProjectCard from "../src/components/ProjectCard";

// placeholder content - duplicates Home's project list until real entries are written
const projects = [
	{
		id: 0,
		title: "project 1",
		repoUrl: "/",
		liveUrl: "/",
		imageSrc: "../assets/images/default_image.png",
	},
	{
		id: 1,
		title: "project 1",
		repoUrl: "/",
		liveUrl: "/",
		imageSrc: "../assets/images/default_image.png",
	},
	{
		id: 2,
		title: "project 1",
		repoUrl: "/",
		liveUrl: "/",
		imageSrc: "../assets/images/default_image.png",
	},
];

const Projects = () => {
	return (
		<section className="flex flex-col gap-4">
			<h1 className="text-xl font-noto-serif font-medium">
				Some of My Projects
			</h1>
			<div className="grid grid-cols-1 gap-4">
				{projects.map((project) => (
					<ProjectCard project={project} key={project.id} />
				))}
			</div>
		</section>
	);
};
export default Projects;
