import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const SectionHeader = ({ title, to, linkLabel = "View all" }) => {
	return (
		<div className="flex items-baseline justify-between border-b border-border pb-2">
			<h2 className="text-2xl font-medium">{title}</h2>
                <Link to={to} className="link text-sm">
			<div className="flex items-center gap-2">
                    {linkLabel}
                    <ArrowRight size={20}/>
            </div>
                </Link>
		</div>
	);
};
export default SectionHeader;