import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/authentication/Register";
import Login from "../pages/authentication/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: '/register', element: <Register /> },
            { path: '/login', element: <Login /> }
        ]
    }
])