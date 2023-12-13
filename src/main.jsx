import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RequireAuth from "./lib/require-auth.jsx";
import { AuthProvider } from "./lib/context/auth-context.jsx";
import Home from "./pages/Home.jsx";
import { LoginInputs } from "./components/LoginInputs.jsx";
import React from "react";
import { Movies } from "./pages/Movies.jsx";
import { TVShows } from "./pages/TVShows.jsx";
import MovieDetails from "./components/MovieDetails.jsx";
import { SignUp } from "./pages/SignupPage.jsx";
import UserProfile from "./pages/UserPage.jsx";


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
        element: withAuthProvider(App),
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
                path: "/details/:id",
                element: <MovieDetails/>,
            },

        ],
        
    },
    {
        path: "/UserProfile",
        element: withAuthProvider(UserProfile, true),
    },
    {
        path: "/login",
        element: withAuthProvider(LoginInputs),
    },
    {
        path: "/signup",
        element: withAuthProvider(SignUp),
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
