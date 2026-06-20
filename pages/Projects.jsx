import ProjectCard from "../src/components/ProjectCard";
import projects from "../src/data/projects";

const Projects = () => {
	return (
		<section className="flex flex-col gap-4">
			<h1 className="text-2xl border-border border-b pb-2">Some of My Projects</h1>
			<div className="grid grid-cols-1 gap-4">
				{projects.map((project) => (
					<ProjectCard project={project} key={project.id} />
				))}
			</div>
		</section>
	);
};
export default Projects;
