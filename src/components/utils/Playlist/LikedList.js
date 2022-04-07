import React from "react";
import * as FaIcons from "react-icons/fa";

const LikedList = () => {
    return (
        <div className="relative group rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 col-span-2 cursor-pointer">
            <div className="absolute left-0 bottom-0 px-5 pb-5">
                <h1 className="text-white font-bold text-2xl">Liked songs</h1>
                <p className="text-white font-md text-xl">0 liked songs</p>
            </div>
            <div
                className="absolute bottom-3 right-3 bg-green-600 px-4 py-4 rounded-full opacity-0 transition duration-400 ease-in-out shadow-slate-900 shadow-lg group-hover:transform group-hover:-translate-y-1 group-hover:opacity-100"
                onClick={() => {
                    console.log("Play music...");
                }}
            >
                <div className="relative z-1 p-0 m-0">
                    <FaIcons.FaPlay />
                </div>
            </div>
        </div>
    );
};

export default LikedList;
