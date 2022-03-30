import React from "react";
import PlayBack from "../Footer-components/PlayBack";
import Switch from "../Router/Switch";
import SideBar from "../SideBar/SideBar";
import Header from "../Header-components/Header";

const Layout = () => {
    return (
        <>
            <SideBar />
            <div className="relative ml-[241px] top-0">
                <Switch />
            </div>
            <PlayBack />
        </>
    );
};

export default Layout;
