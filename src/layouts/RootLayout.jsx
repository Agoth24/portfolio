import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
const RootLayout = () => {
	return (
		<div className="min-h-screen bg-zinc-50 dark:bg-zinc-800">
			<div className="flex flex-col md:max-w-3xl mx-auto">
				<Header />
				<main className="grow">
					<Outlet />
				</main>
                <Footer />
			</div>
		</div>
	);
};

export default RootLayout;
