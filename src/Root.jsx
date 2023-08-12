import Navbar from "./Navbar"
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
        <div id="root">
                <Navbar></Navbar>
                <Outlet></Outlet>
        </div>
        </>
    )
}