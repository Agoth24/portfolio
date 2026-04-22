import Error from "../../pages/Error";
import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import Blog from "../../pages/Blog";
import RootLayout from "../layouts/RootLayout";
import { createBrowserRouter } from "react-router";

const routes = [
	{
		path: "/",
		element: <RootLayout />,
		errorElement: (
			<RootLayout>
				<Error />
			</RootLayout>
		),
		children: [
			{ index: true, element: <Home /> },
			{ path: "/projects", element: <Projects /> },
			{ path: "/blog", element: <Blog /> },
		],
	},
];

const router = createBrowserRouter(routes);

export default router;
