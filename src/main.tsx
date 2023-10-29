import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.tsx";
import CustomerComponent from "./components/CustomerComponent.tsx";
import ItemComponent from "./components/ItemComponent.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "",
                element: <Home />,
            },
            {
                path: "/customers",
                element: <CustomerComponent />,
            },
            {
                path: "/items",
                element: <ItemComponent />,
            },
            {
                path: "/placeOrder",
                element: <h1>Place Order</h1>,
            },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
);
