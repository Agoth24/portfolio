import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
const RootLayout = () => {
	return (
			<div className="px-6 flex flex-col md:max-w-3xl mx-auto sm:mt-20">
				<Header />
				<main className="grow">
					<Outlet />
				</main>
                <Footer />
			</div>
	);
};

export default RootLayout;
