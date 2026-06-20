import { ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
	const url = project.liveUrl || project.repoUrl;
	const linkLabel = project.liveUrl ? "View it Live" : "View Repo";

	return (
		<div className="border border-border bg-surface shadow-md dark:shadow-lg p-4 rounded-md font-geist">
			<div className="flex justify-between">
				<a href={url} target="_blank" rel="noopener noreferrer">
					<h3 className="text-lg">{project.title}</h3>
				</a>
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 text-sm shrink-0"
				>
					{linkLabel}
					<ExternalLink size={14} />
				</a>
			</div>
			<p className="mt-1 text-sm text-muted">{project.description}</p>
		</div>
	);
};
export default ProjectCard;
