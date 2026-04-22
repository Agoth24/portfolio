import RootLayout from "../layouts/RootLayout"
import { createBrowserRouter } from "react-router";

const routes = [
	{
		path: "/",
		element: <RootLayout />,
		children: [],
	},
];

const router = createBrowserRouter(routes);

export default router;
