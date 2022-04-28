import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";

const PlayingTrack = () => {
    const [heart, setHeart] = useState(false);
    const handleHeart = () => {
        setHeart((prev) => !prev);
    };
    return (
        <div className="flex flex-row flex-1 justify-start px-4 py-0 h-[90px]">
            <div className="flex flex-col items-center justify-center">
                <div className="relative">
                    <Link to="/">
                        <img
                            src="https://i.scdn.co/image/ab67616d000048510785b44c5a814bb1318ebc8e"
                            alt=""
                            className="bg-black bg-center bg-no-repeat bg-contain h-full left-0 top-0 w-full"
                        />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="mx-3 items-center text-white font-md hover:underline transition-all duration-150">
                    Track Title
                </div>
                <div className="flex flex-row">
                    <span>
                        <Link
                            to=""
                            className="text-[#b3b3b3] hover:text-white font-xs hover:underline transition-all duration-150"
                        >
                            Artist1
                        </Link>
                    </span>
                    <span>
                        <Link
                            to=""
                            className="text-[#b3b3b3] hover:text-white font-xs hover:underline transition-all duration-150"
                        >
                            Artist2
                        </Link>
                    </span>
                </div>
            </div>
            <button className="" onClick={handleHeart}>
                {heart ? (
                    <AiIcons.AiFillHeart className="text-emerald-700 font-lg font-bold " />
                ) : (
                    <AiIcons.AiOutlineHeart className="text-white font-lg font-bold" />
                )}
            </button>
        </div>
    );
};

export default PlayingTrack;
