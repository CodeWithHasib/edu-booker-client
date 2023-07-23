import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/authentication/Register";
import Login from "../pages/authentication/Login";
import College from "../pages/college/College";
import Error404 from "../pages/error/Error404";
import SearchCollage from "../pages/search/SearchCollage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error404 />,
        children: [
            { path: "/", element: <Home /> },
            { path: '/register', element: <Register /> },
            { path: '/login', element: <Login /> },
            { path: '/college', element: <College /> },
            { path: '/college/search/:query', element: <SearchCollage /> },
        ]
    }
])