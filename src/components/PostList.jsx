const formatDate = (iso) =>
	new Date(iso).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});

const PostRow = ({ post }) => {
	return (
		<a
			href={post.url}
			target="_blank"
			rel="noopener noreferrer"
			className="link flex items-baseline justify-between gap-4"
		>
			<span>
				<span className="font-heading">{post.title}</span>
				{post.summary && (
					<span className="block text-sm text-muted">{post.summary}</span>
				)}
			</span>
			<span className="shrink-0 text-sm text-muted">
				{formatDate(post.date)}
			</span>
		</a>
	);
};

const PostList = ({ posts }) => {
	return (
		<ul className="flex flex-col gap-4">
			{posts.map((post) => (
				<li key={post.id}>
					<PostRow post={post} />
				</li>
			))}
		</ul>
	);
};
export default PostList;