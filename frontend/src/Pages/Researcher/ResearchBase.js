import { useState } from "react";
import Sidebar from "../Components/Sidebar(R)";
import DashNav from "../Components/Dashboard Nav";
import { Outlet } from "react-router-dom";

function PublicBase(){

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const handleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }    

    return(
        <>
            <DashNav onClick={handleSidebar}/>
            <Sidebar isOpen={sidebarOpen} isClose={handleSidebar}/> 
            <Outlet/>
        </>
    )    
}

export default PublicBase;