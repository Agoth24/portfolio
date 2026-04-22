import logos from "../logos";

const Logo = ({ logo }) => {
	return (
		<div className="flex items-center justify-center px-4 shrink-0">
			<img className="h-12 w-auto" src={logo.src} alt={logo.name} />
		</div>
	);
};

const LogoBar = () => {
	return (
		<div
			className="mt-8 overflow-hidden w-full"
			style={{
				maskImage:
					"linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
				WebkitMaskImage:
					"linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
			}}
		>
			<div className="flex items-center animate-scroll hover:[animation-play-state:paused] w-max">
				{[...logos, ...logos, ...logos].map((logo, i) => (
					<Logo key={i} logo={logo} />
				))}
			</div>
		</div>
	);
};
export default LogoBar;
