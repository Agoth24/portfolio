import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
const RootLayout = () => {
	return (
			<div className="px-6 flex flex-col min-h-dvh max-w-5xl mx-auto">
				<Header />
				<main className="flex grow mt-8 sm:mt-12 flex-col md:w-3xl gap-8 mx-auto">
					<Outlet />
				</main>
                <Footer />
			</div>
	);
};

export default RootLayout;
