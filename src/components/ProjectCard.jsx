const ProjectCard = ({ project }) => {
	const url = project.liveUrl || project.repoUrl;

	return (
		<div className="border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 shadow-md dark:shadow-lg p-4 rounded-lg">
			<a href={url} target="_blank" rel="noopener noreferrer">
				<img
					src={project.imageSrc}
					alt={project.title}
					className="w-full aspect-video object-cover rounded-lg"
				/>
				<h3 className="mt-4 font-semibold text-lg">{project.title}</h3>
			</a>
		</div>
	);
};
export default ProjectCard;
