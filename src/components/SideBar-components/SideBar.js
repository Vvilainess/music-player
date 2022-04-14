import React from "react";
import Playlist from "./Playlist";
import FeatureMenu from "./FeatureMenu";
import Spacer from "../Header-components/Spacer";
import InstallButton from "./InstallButton";
import Logo from "./Logo";

const Sidebar = () => {
    return (
        <div className="relative flex flex-col w-[241px] mb-[90px] bg-black pt-6">
            <Logo />
            <FeatureMenu />
            <Spacer />
            <Playlist />
            <InstallButton />
        </div>
    );
};

export default Sidebar;
