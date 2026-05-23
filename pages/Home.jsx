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

			<div className="flex flex-col gap-4 sm:items-center">

            </div>
			{/* <LogoBar /> */}
		</section>
	);
};
export default Home;
