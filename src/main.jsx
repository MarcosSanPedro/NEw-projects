import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { EventsPage } from "./pages/EventsPage.jsx";
// const url = import.meta.env.VITE_WAPI_URL;
// const city = "miami";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <EventsPage />,
			},
		],
	},
]);
// {path: "/Header", element: <Header/>, loader: getWeather(city, url)},
// {path: "/NavBar", element: <Navbar/>},
// {path: "/Hero", element: <Hero/>},
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
