import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

function MainLayout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

export default MainLayout;
