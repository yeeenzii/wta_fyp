import { useState } from "react";
import Navibar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

function PublicBase(){
    return(
        <>
            <Navibar/>
            <Outlet/>
        </>
    )    
}

export default PublicBase;