import { Outlet } from "react-router";
import Navigation1 from "../components/Navigation1.jsx";
import Navigation2 from "../components/Navigation2.jsx";

const ServiceLayout = () => {
    return (
        <>
            <Navigation1 />
            <Outlet />
        </>
    )
}

export default ServiceLayout