import PostList from "../src/components/PostList";
import posts from "../src/data/posts";

const Blog = () => {
	return (
		<section className="flex flex-col gap-4">
			<h1 className="text-xl font-heading">
				Some Throwaway Thoughts
			</h1>
			{posts.length > 0 ? (
				<PostList posts={posts} />
			) : (
				<p className="text-muted">
					Writing soon &mdash; in the meantime, find me on{" "}
					<a
						href="https://www.linkedin.com/in/agoth-arop-9b19203a3/"
						target="_blank"
						rel="noopener noreferrer"
						className="link"
					>
						LinkedIn
					</a>{" "}
					or{" "}
					<a
						href="https://github.com/agoth24"
						target="_blank"
						rel="noopener noreferrer"
						className="link"
					>
						GitHub
					</a>
					.
				</p>
			)}
		</section>
	);
};
export default Blog;
