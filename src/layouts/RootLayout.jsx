import { Outlet } from "react-router";
import Home from "../../pages/Home";
import Header from "../components/Header";
const RootLayout = () => {
	return (
		<div className="min-h-screen dark:bg-zinc-800">
			<main className="md:max-w-4xl mx-auto">
				<Header />
				<Outlet />
			</main>
		</div>
	);
};

export default RootLayout;
