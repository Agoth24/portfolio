import { FaDisplay } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Tag = ({ text }) => {
	return <p className="px-2 text-xs rounded-xl bg-violet-400 dark:bg-violet-600">{text}</p>;
};

const CardCTAButton = ({ text, URL, icon }) => {
	return (
		<a href={URL} target="_blank" rel="noopener noreferrer">
			<div className="flex items-center justify-between gap-2 border-2 border-teal-400 rounded-lg px-4 py-2 ">
				<button>{text}</button>
				{icon === "display" ? <FaDisplay /> : <FaGithub />}
			</div>
		</a>
	);
};

const ProjectCard = ({ project }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 p-4 rounded-lg gap-6 bg-zinc-100 dark:bg-zinc-900">
			<img
				src={project.imageSrc}
				alt={project.title}
				className="h-48 object-cover w-full rounded-md"
			/>
			<div className="flex flex-col gap-4">
				<div className="grid grid-cols-1 gap-2 w-full">
					<h1 className="text-lg font-bold">{project.title}</h1>
					<div className="flex items-center gap-2">
						{project.tags.map((tag, index) => (
							<Tag key={index} text={tag} />
						))}
					</div>
				</div>
				<p>{project.description}</p>
				<div className="grid grid-cols-2 gap-4">
					<CardCTAButton
						text="See it Live"
						URL={project.liveUrl}
						icon="display"
					/>
					<CardCTAButton
						text="Code"
						URL={project.repoUrl}
						icon="github"
					/>
				</div>
			</div>
		</div>
	);
};
export default ProjectCard;
