import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { EventsPage } from "./pages/EventsPage.jsx";
import { fetchDestinations } from "./utils/api-utils.js";
import PrivateApp from "./PrivateApp.jsx";
import RequireAuth from "./lib/require-auth.jsx";
import { AuthProvider } from "./lib/context/auth-context.jsx";
import Home from "./pages/Home.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { LoginInputs } from "./components/LoginInputs.jsx";
// const url = import.meta.env.VITE_WAPI_URL;
// const city = "miami";

const withAuthProvider = (Component, requireAuth = false,)=>{
	return(

		
		<AuthProvider>
			{requireAuth 
		? (
			<RequireAuth>
			<Component/>
			</RequireAuth>
		)
		: (
			<Component/>
		)
	}
	)
		</AuthProvider>
	
)}

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home/>,
				loader: fetchDestinations
			},
			
		],
	},
	{
		path: "/Private",
		element: withAuthProvider(PrivateApp, true)
		
	},
	{
		path: "/login",
		element: <LoginInputs/>
		
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
