import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";
import { useStore } from "../Store";
import Playlist from "./Playlist";
import FeatureMenu from "./FeatureMenu";

const Sidebar = () => {
    const [{ playlist }] = useStore();

    useEffect(() => {}, [playlist]);
    return (
        <div className="fixed flex flex-col w-[241px] h-screen bg-black pt-6 mr-3">
            <Link to="/" className="flex items-center justify-start px-5">
                <BsIcons.BsSpotify className="text-4xl text-white inline-block mr-1" />
                <p className="text-white text-2xl font-bold inline-block">
                    Spotify
                </p>
            </Link>
            <FeatureMenu />
            <div className="relative w-[80%] h-[1px] bg-[#7c7c7c] mx-5 shadow-lg shadow-black">
                <div className="absolute h-[16px] bottom-[-16px] left-0 right-0 bg-gradient-to-t from-[rgba(0,0,0,.7)] to-[transparient] z-10"></div>
            </div>
            <Playlist />
            <div className="relative left-0 bottom-0 bg-black z-10">
                <div className="px-0 py-[8px]">
                    <Link
                        to="/"
                        className="flex flex-row justify-center items-center"
                    >
                        <IoIcons.IoMdDownload className="text-white font-bold mr-2" />
                        <span className="text-white font-bold capitalize">
                            Install App
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
