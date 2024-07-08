import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Login from "../pages/Login/Login";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/shop",
                element: <Shop />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

export default routes;
