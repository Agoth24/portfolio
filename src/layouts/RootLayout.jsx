import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
const RootLayout = () => {
	return (
			<div className="px-6 flex flex-col md:max-w-3xl mx-auto ">
				<Header />
				<main className="grow mt-12 flex flex-col gap-8">
					<Outlet />
				</main>
                <Footer />
			</div>
	);
};

export default RootLayout;
