import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Contact from "../../pages/Contact";

export default function Root() {
    return (
        <>
        
            <Nav />
            <Contact/>
            <Outlet />
        </>
    );
}