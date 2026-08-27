import { projects, type Project } from 'app/data/projects'

function ProjectRow({ project }: { project: Project }) {
  let url = project.liveUrl || project.repoUrl
  let linkLabel = project.liveUrl ? 'View it Live' : 'View Repo'

  return (
    <div className="flex flex-col space-y-1 mb-4">
      <div className="w-full flex flex-col md:flex-row md:items-baseline md:justify-between space-x-0 md:space-x-2">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-900 dark:text-neutral-100 tracking-tight transition-all hover:text-neutral-600 dark:hover:text-neutral-400"
        >
          {project.title}
        </a>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-600 dark:text-neutral-400 text-sm shrink-0 transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
        >
          {linkLabel}
        </a>
      </div>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        {project.description}
      </p>
    </div>
  )
}

export function Projects() {
  return (
    <div>
      {projects.map((project) => (
        <ProjectRow key={project.id} project={project} />
      ))}
    </div>
  )
}
