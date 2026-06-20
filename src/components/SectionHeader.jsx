import { Link } from "react-router";

const SectionHeader = ({ title, to, linkLabel = "View all" }) => {
	return (
		<div className="flex items-baseline justify-between">
			<h2 className="text-xl">{title}</h2>
			<Link to={to} className="link text-sm">
				{linkLabel} &rarr;
			</Link>
		</div>
	);
};
export default SectionHeader;