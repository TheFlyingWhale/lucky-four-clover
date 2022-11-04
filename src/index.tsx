import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingOne from "./routes/ladingOne";
import LandingTwo from "./routes/landingTwo";
import Store from "./routes/store";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingOne />,
	},
	{
		path: "/test",
		element: <LandingTwo />,
	},
	{
		path: "/store",
		element: <Store />,
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
