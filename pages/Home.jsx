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
		<div className="flex flex-col gap-8 font-light">
			<p className="text-4xl sm:text-4xl leading-tight mb-4 sm:mb-8p">
				I'm a <strong className="text-accent">software engineer</strong>{" "}
				and <span className="underline  underline-offset-3 decoration-3 decoration-accent"> CS & Economics </span>{" "}
				undergrad at the University of Alberta.
			</p>

			<section className="flex flex-col gap-4">
				<SectionHeader title="What I'm working on" to="/projects" />
				<div className="flex flex-col">
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
