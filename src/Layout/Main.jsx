import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";


const Main = () => {
    return (
    <div className="w-[85%] mx-auto font-poppins">
        <Navbar/>
        <Outlet />
    </div>
    );
};

export default Main;