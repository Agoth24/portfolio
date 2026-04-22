import { Outlet } from "react-router";
import Home from "../../pages/Home";
import Header from "../components/Header";
const RootLayout = () => {
	return (
		<div className="min-h-screen bg-zinc-50 dark:bg-zinc-800">
			<div className="flex flex-col md:max-w-3xl mx-auto">
				<Header />
				<main className="px-6 flex-1">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default RootLayout;
