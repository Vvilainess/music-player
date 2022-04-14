import React from "react";
import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";

const Logo = () => {
    return (
        <>
            <Link to="/" className="flex items-center justify-start px-5">
                <BsIcons.BsSpotify className="text-4xl text-white inline-block mr-1" />
                <p className="text-white text-2xl font-bold inline-block">
                    Spotify
                </p>
            </Link>
        </>
    );
};

export default Logo;
