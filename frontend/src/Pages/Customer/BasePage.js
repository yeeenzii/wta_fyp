import React, { useState } from "react";
import DashNav from "../Components/Dashboard Nav";
import Sidebar from "../Components/Sidebar(C)";
import { Outlet } from "react-router-dom";

function BasePage(){
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const handleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return(
        <>
            <DashNav onClick={handleSidebar}/>
            <Sidebar isOpen={sidebarOpen} isClose={handleSidebar}/> 
            <Outlet/>
        </>
    )
}

export default BasePage;