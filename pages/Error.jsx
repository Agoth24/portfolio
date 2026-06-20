const Error = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center bg-bg">
			<h1 className="font-heading text-2xl">Something went wrong</h1>
			<p className="text-muted">
				Sorry about that — try heading back home.
			</p>
			<a href="/" className="link hover:underline">
				Back to home
			</a>
		</div>
	);
};
export default Error;
