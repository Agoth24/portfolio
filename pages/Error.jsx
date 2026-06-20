const Error = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center text-zinc-800 dark:text-zinc-50 bg-white dark:bg-zinc-950">
			<h1 className="font-nimbus-bold text-2xl">Something went wrong</h1>
			<p className="font-noto-serif text-zinc-600 dark:text-zinc-400">
				Sorry about that — try heading back home.
			</p>
			<a
				href="/"
				className="text-teal-700 dark:text-teal-400 hover:underline"
			>
				Back to home
			</a>
		</div>
	);
};
export default Error;
