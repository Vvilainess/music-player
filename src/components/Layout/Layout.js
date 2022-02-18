import React from "react";
import Switch from "../Router/Switch";
import SideBar from "../Sidebar/SideBar";

const Layout = () => {
    return (
        <>
            <SideBar />
            <div className="relative ml-[241px]">
                <Switch />
            </div>
        </>
    );
};

export default Layout;
