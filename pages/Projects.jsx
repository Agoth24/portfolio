import ProjectCard from "../src/components/ProjectCard";

const projects = [
	{
		title: "project 1",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus unde exercitationem sequi perferendis provident commodi?",
		tags: ["React", "NodeJS", "MongoDB"],
		repoUrl: "/",
		liveUrl: "/",
		imageSrc: "../assets/images/default_image.png",
	},
	{
		title: "project 1",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus unde exercitationem sequi perferendis provident commodi?",
		tags: ["React", "NodeJS", "MongoDB"],
		repoUrl: "/",
		liveUrl: "/",
		imageSrc: "../assets/images/default_image.png",
	},
	{
		title: "project 1",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus unde exercitationem sequi perferendis provident commodi?",
		tags: ["React", "NodeJS", "MongoDB"],
		repoUrl: "/",
		liveUrl: "/",
		imageSrc: "../assets/images/default_image.png",
	},
	
];

const Projects = () => {
	return (
		<section className="max-sm:px-6 mt-12 flex flex-col gap-4">
			<h1 className="text-xl font-space-grotesk font-medium">
				Some of My Projects
			</h1>
			<div className="grid grid-cols-1 gap-8">
				{projects.map((project) => (
					<ProjectCard project={project} />
				))}
			</div>
		</section>
	);
};
export default Projects;
