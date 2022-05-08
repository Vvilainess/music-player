import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";

const PlayingTrack = () => {
    const [heart, setHeart] = useState(false);
    const handleHeart = () => {
        setHeart((prev) => !prev);
    };
    return (
        <div className="flex flex-1 flex-row justify-start items-center">
            <div className="flex flex-row justify-center items-center">
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
                <div className="flex flex-1 flex-col items-center justify-center mx-3">
                    <div className="mx-3 items-center text-white font-md hover:underline transition-all duration-150">
                        Track Title
                    </div>
                    <div className="flex flex-1 flex-row">
                        <span>
                            <Link
                                to=""
                                className="text-[#b3b3b3] hover:text-white text-xs hover:underline transition-all duration-150"
                            >
                                Artist1,
                            </Link>
                        </span>
                        <span>
                            <Link
                                to=""
                                className="text-[#b3b3b3] hover:text-white text-xs hover:underline transition-all duration-150"
                            >
                                Artist2
                            </Link>
                        </span>
                    </div>
                </div>
                <button className="px-3 text-xl" onClick={handleHeart}>
                    {heart ? (
                        <AiIcons.AiFillHeart className="text-emerald-700 text-xl font-bold " />
                    ) : (
                        <AiIcons.AiOutlineHeart className="text-white text-xl font-bold" />
                    )}
                </button>
                <button className="px-3 text-xl">
                    <MdIcons.MdOutlineSmartScreen className="text-white font-lg font-bold" />
                </button>
            </div>
        </div>
    );
};

export default PlayingTrack;
