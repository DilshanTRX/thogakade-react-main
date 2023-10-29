import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
    const navItems = ["home", "customers", "items", "placeOrder"];
    return (
        <>
            <NavBar navItems={navItems} />
            <Outlet />
        </>
    );
}

export default App;
