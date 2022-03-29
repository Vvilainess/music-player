import React from "react";
import PlayBack from "../Footer-components/PlayBack";
import Switch from "../Router/Switch";
import SideBar from "../Sidebar/SideBar";

const Layout = () => {
    return (
        <>
            <SideBar />
            <div className="relative ml-[241px]">
                <Switch />
            </div>
            <PlayBack />
        </>
    );
};

export default Layout;
