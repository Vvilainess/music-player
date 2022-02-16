import React from "react";
import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import { accessUrl } from "../auth/getTokenFromUrl";

const LoginForm = () => {
    const handleClick = () => {
        window.location = accessUrl;
    };
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-black">
            <Link to="" className="flex items-center justify-start mb-24">
                <BsIcons.BsSpotify className="text-7xl text-white inline-block mr-1" />
                <p className="text-white text-7xl font-bold inline-block">
                    Spotify
                </p>
            </Link>
            <Link
                to=""
                className="text-white font-bold rounded-full px-7 py-4 bg-green-600 uppercase"
                onClick={handleClick}
            >
                Login with spotify
            </Link>
        </div>
    );
};

export default LoginForm;
