import logos from "../src/logos";

const Home = () => {
	return (
		<section className="flex flex-col gap-8">
			<div className="flex flex-col gap-4 dark:text-zinc-200 font-space-mono mt-8">
				<p>
					&gt; Hey there! I'm Agoth, a Software Engineer and Computer
					Science undergrad at the University of Alberta
				</p>
				<div>
					<p>
						&gt; Currently, I'm building backend projects with
						Node.js and Express&nbsp;
						<span className="inline-block w-2 h-4 bg-current animate-blink -mb-px" />
					</p>
				</div>
			</div>
            <div className="flex items-center justify-between">
                {logos.map((logo) => (
                    <img className="h-10 w-auto" src={logo.src} alt={logo.name} />
                ))}
            </div>

		</section>
	);
};
export default Home;
