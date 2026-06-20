import ProjectCard from "../src/components/ProjectCard";
import SectionHeader from "../src/components/SectionHeader";
import PostList from "../src/components/PostList";
import projects from "../src/data/projects";
import posts from "../src/data/posts";

const featuredProjects = projects.filter((project) => project.featured);
const latestPosts = [...posts]
	.sort((a, b) => new Date(b.date) - new Date(a.date))
	.slice(0, 3);

const Home = () => {
	return (
		<div className="flex flex-col gap-12 font-light">
			<p className="text-4xl sm:text-4xl leading-tight">
				I'm a <strong className="text-accent">software engineer</strong> and
				CS & Economics undergrad at the University of Alberta.
			</p>

			<section className="flex flex-col gap-4">
				<SectionHeader title="Projects" to="/projects" />
				<div className="grid grid-cols-1 gap-4">
					{featuredProjects.map((project) => (
						<ProjectCard project={project} key={project.id} />
					))}
				</div>
			</section>

			{latestPosts.length > 0 && (
				<section className="flex flex-col gap-4">
					<SectionHeader title="Writing" to="/blog" />
					<PostList posts={latestPosts} />
				</section>
			)}
		</div>
	);
};
export default Home;