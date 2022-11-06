import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Store from "./routes/store";
import Product from "./routes/product";
import RoutesWrapper from "./components/routesWrapper";
import Download from "./routes/download";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RoutesWrapper />,
		children: [
			{
				path: "/",
				element: <Root />,
			},
			{
				path: "/store",
				element: <Store />,
			},
			{
				path: "/product",
				element: <Product />,
			},
			{
				path: "/download",
				element: <Download />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
