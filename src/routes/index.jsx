import Error from "../../pages/Error";
import Home from "../../pages/Home";
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
		children: [{ index: true, element: <Home /> },],
	},
];

const router = createBrowserRouter(routes);

export default router;
