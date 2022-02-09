import React from "react";
import { Link } from "react-router-dom";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

const Sidebar = () => {
    return (
        <div className="fixed w-[241px] h-screen bg-black pl-5 py-5 mr-3">
            <Link to="/" className="flex items-center justify-start">
                <BsIcons.BsSpotify className="text-4xl text-white inline-block mr-1" />
                <p className="text-white text-2xl font-bold inline-block">
                    Spotify
                </p>
            </Link>
            <div className="pt-5 pb-12">
                <ul>
                    <li className="text-[#b3b3b3] hover:text-white transition-all ease duration-200 flex items-center pb-3">
                        <Link
                            to="/"
                            className="flex items-center justify-start"
                        >
                            <AiIcons.AiOutlineHome className="text-xl font-bold" />
                            <p className="capitalize pl-4 font-bold" to="/">
                                Home
                            </p>
                        </Link>
                    </li>
                    <li className="text-[#b3b3b3] hover:text-white transition-all ease duration-200 flex items-center pb-3">
                        <Link
                            to="/search"
                            className="flex items-center justify-start"
                        >
                            <AiIcons.AiOutlineSearch className="text-xl font-bold" />
                            <p className="capitalize pl-4 font-bold">Search</p>
                        </Link>
                    </li>
                    <li className="text-[#b3b3b3] hover:text-white transition-all ease duration-200 flex items-center pb-3">
                        <Link
                            to="/collection/playlist"
                            className="flex items-center justify-start"
                        >
                            <BiIcons.BiLibrary className="text-xl font-bold" />
                            <p className="capitalize pl-4 font-bold">Library</p>
                        </Link>
                    </li>
                </ul>
                <ul className="mt-5">
                    <li className="pr-2 py-3">
                        <Link
                            to="/playlist"
                            className="flex items-center justify-start"
                        >
                            <div className="flex items-center justify-center bg-[#b3b3b3] w-[24px] h-[24px]">
                                <AiIcons.AiOutlinePlus />
                            </div>
                            <p className="pl-3 text-[#b3b3b3] hover:text-white transition-all ease duration-200 flex items-center capitalize pb-0 font-bold">
                                create playlist
                            </p>
                        </Link>
                    </li>
                    <li className="pr-2 py-1">
                        <Link
                            to="/collection/playlist"
                            className="flex items-center justify-start"
                        >
                            <div className="flex items-center justify-center bg-[#3494E6] w-[24px] h-[24px]">
                                <AiIcons.AiFillHeart className="text-white" />
                            </div>
                            <p className="pl-3 text-[#b3b3b3] hover:text-white transition-all ease duration-200 flex items-center capitalize pb-0 font-bold">
                                Liked songs
                            </p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
