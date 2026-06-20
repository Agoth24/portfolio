import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
const RootLayout = () => {
	return (
			<div className="px-6 flex flex-col min-h-dvh md:max-w-5xl mx-auto ">
				<Header />
				<main className="flex grow mt-8 sm:mt-12 flex-col gap-8 md:max-w-3xl mx-auto">
					<Outlet />
				</main>
                <Footer />
			</div>
	);
};

export default RootLayout;
