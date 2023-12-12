import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PrivateApp from "./PrivateApp.jsx";
import RequireAuth from "./lib/require-auth.jsx";
import { AuthProvider } from "./lib/context/auth-context.jsx";
import Home from "./pages/Home.jsx";
import { LoginInputs } from "./components/LoginInputs.jsx";
import React from "react";
import { Movies } from "./pages/Movies.jsx";
import { TVShows } from "./pages/TVShows.jsx";
import Search from "./pages/Search.jsx";


const withAuthProvider = (Component, requireAuth = false) => {
    return (
        <AuthProvider>
            {requireAuth ? (
                <RequireAuth>
                    <Component />
                </RequireAuth>
            ) : (
                <Component />
            )}
            )
        </AuthProvider>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: withAuthProvider(App, true),
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/Movies",
                element: <Movies/>,
            },
            {
                path: "/TVShows",
                element: <TVShows/>,
            },
            {
                path: "/Search",
                element: <Search/>,
            },
        ],
    },
    {
        path: "/Private",
        element: withAuthProvider(PrivateApp, true),
    },
    {
        path: "/login",
        element: withAuthProvider(LoginInputs),
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
