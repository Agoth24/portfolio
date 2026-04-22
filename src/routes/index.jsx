import Home from "../../pages/Home";
import RootLayout from "../layouts/RootLayout";
import { createBrowserRouter } from "react-router";

const routes = [
	{
		path: "/",
		element: <RootLayout />,
		children: [{ index: true, element: <Home /> }],
	},
];

const router = createBrowserRouter(routes);

export default router;
