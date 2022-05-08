import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const LikedList = () => {
    return (
        <Link
            to="/collection/tracks"
            className="relative group rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-1 xs:col-span-1 cursor-pointer"
        >
            <div className="absolute xs:relative sm:pt-3 xs:pt-3 left-0 bottom-0 px-5 pb-5">
                <h1 className="text-white font-bold text-2xl">Liked songs</h1>
                <p className="text-white font-md text-xl">0 liked songs</p>
            </div>
            <div
                className="absolute xs:relative xs:mt-3 xs:ml-5 xs:inline-block xs:right-0 bottom-3 right-3 bg-green-600 px-4 py-4 rounded-full opacity-0 transition duration-400 ease-in-out shadow-slate-900 shadow-lg group-hover:transform group-hover:-translate-y-1 group-hover:opacity-100"
                onClick={() => {
                    console.log("Play music...");
                }}
            >
                <div className="relative z-1 p-0 m-0">
                    <FaIcons.FaPlay />
                </div>
            </div>
        </Link>
    );
};

export default LikedList;
