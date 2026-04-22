import { Link } from "react-router";
import LogoBar from "../src/components/LogoBar";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const CTAButton = ({ text }) => {
	return (
		<button className="px-12 py-2 border-2 border-teal-500 dark:border-teal-700 rounded-sm hover:bg-teal-500 dark:hover:bg-teal-700 cursor-pointer font-space-grotesk transition-all duration-150 ease-in-out">
			{text}
		</button>
	);
};

const ColouredText = ({ text }) => {
	return (
		<span className="text-teal-500 dark:text-teal-400 whitespace-normal">
			{" "}
			{text}{" "}
		</span>
	);
};

const Home = () => {
	return (
		<section className="max-sm:px-6 flex flex-col gap-4">
			<div className="flex sm:ml-6 gap-4 [&>a]:hover:text-indigo-500 [&>a]:transition-all [&>a]:duration-150 [&>a]:ease-in-out">
				<a
					href="https://www.linkedin.com/in/agoth-arop-9b19203a3/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin size={25} />
				</a>
				<a
					href="https://github.com/agoth24"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithub size={25} />
				</a>
			</div>

			<div className="flex flex-col gap-4 sm:items-center">
                <div className="p-6 mt-8 rounded-lg bg-zinc-200 dark:bg-zinc-950 flex flex-col gap-4 dark:text-zinc-200 font-space-mono">
                    <p>
                        &gt; Hey there! I'm Agoth, a{" "}
                        <ColouredText text="Software Engineer" /> and
                        <ColouredText text="Computer Science Undergraduate" /> at
                        the University of Alberta.
                    </p>
                    <div>
                        <p>
                            &gt; Currently, I'm focused on building robust backend
                            systems with Node.js and Express&nbsp;
                            <span className="inline-block w-2 h-4 bg-current animate-blink -mb-px" />
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 justify-items-center gap-4 text-lg ">
                    <Link to="/projects">
                        <CTAButton text="Projects" />
                    </Link>
                    <Link to="/blog">
                        <CTAButton text="Blog" />
                    </Link>
                </div>
            </div>
			<LogoBar />
		</section>
	);
};
export default Home;
