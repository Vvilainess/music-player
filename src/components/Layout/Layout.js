import React from "react";
import PlayBack from "../Footer-components/PlayBack";
import Switch from "../Router/Switch";
import SideBar from "../SideBar-components/SideBar";
import Body from "../Body-components/Body";

const Layout = () => {
    return (
        <div className="flex flex-col max-h-screen">
            <div className="flex flex-row">
                <SideBar />
                <Body>
                    <div className="">
                        <Switch />
                    </div>
                </Body>
            </div>
            <PlayBack />
        </div>
    );
};

export default Layout;
