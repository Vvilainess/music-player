import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useStore } from "../Store";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import createPlaylist from "../Auth/getTokenFromUrl";

const FeatureMenu = () => {
    const handleTab = (idx) => {
        setIsActiveTab(idx);
    };
    const [isActiveTab, setIsActiveTab] = useState(1);
    const [{ token }] = useStore();
    return (
        <>
            <div className="pt-5 pb-3">
                <ul>
                    <li className="flex items-center pb-3 px-5">
                        <Link
                            to="/"
                            onClick={() => {
                                handleTab(1);
                            }}
                            className={
                                isActiveTab === 1
                                    ? "flex items-center justify-start text-white hover:text-white transition-all ease duration-200"
                                    : "flex items-center justify-start text-[#b3b3b3] hover:text-white transition-all ease duration-200"
                            }
                        >
                            <AiIcons.AiOutlineHome className="text-xl font-bold" />
                            <p className="capitalize pl-4 font-bold" to="/">
                                Home
                            </p>
                        </Link>
                    </li>
                    <li className="flex items-center pb-3 px-5">
                        <Link
                            to="/search"
                            className={
                                isActiveTab === 2
                                    ? "flex items-center justify-start text-white hover:text-white transition-all ease duration-200"
                                    : "flex items-center justify-start text-[#b3b3b3] hover:text-white transition-all ease duration-200"
                            }
                            onClick={() => {
                                handleTab(2);
                            }}
                        >
                            <AiIcons.AiOutlineSearch className="text-xl font-bold" />
                            <p className="capitalize pl-4 font-bold">Search</p>
                        </Link>
                    </li>
                    <li className="flex items-center pb-3 px-5">
                        <Link
                            to="/collection/playlists"
                            className={
                                isActiveTab === 3
                                    ? "flex items-center justify-start text-white hover:text-white transition-all ease duration-200"
                                    : "flex items-center justify-start text-[#b3b3b3] hover:text-white transition-all ease duration-200"
                            }
                            onClick={() => {
                                handleTab(3);
                            }}
                        >
                            <BiIcons.BiLibrary className="text-xl font-bold" />
                            <p className="capitalize pl-4 font-bold">Library</p>
                        </Link>
                    </li>
                </ul>
                <ul className="mt-5">
                    <li className="px-5 py-3 shadow-lg shadow-black z-10">
                        <Link
                            to="/playlist"
                            onClick={() => {
                                handleTab(4);
                                createPlaylist(
                                    "https://api.spotify.com/v1/users/31hqgkyccfx6rsbwx5r5nght5ngy/playlists",
                                    token
                                );
                            }}
                            className="flex items-center justify-start"
                        >
                            <div className="flex items-center justify-center bg-[#b3b3b3] w-[24px] h-[24px]">
                                <AiIcons.AiOutlinePlus />
                            </div>
                            <p
                                className={
                                    isActiveTab === 4
                                        ? "pl-3 text-white hover:text-white transition-all ease duration-200 flex items-center capitalize pb-0 font-bold"
                                        : "pl-3 text-[#b3b3b3] hover:text-white transition-all ease duration-200 flex items-center capitalize pb-0 font-bold"
                                }
                            >
                                create playlist
                            </p>
                        </Link>
                    </li>
                    <li className="px-5 py-1">
                        <Link
                            to="/collection/tracks"
                            onClick={() => {
                                handleTab(5);
                            }}
                            className="flex items-center justify-start"
                        >
                            <div className="flex items-center justify-center bg-[#3494E6] w-[24px] h-[24px]">
                                <AiIcons.AiFillHeart className="text-white" />
                            </div>
                            <p
                                className={
                                    isActiveTab === 5
                                        ? "pl-3 text-white hover:text-white transition-all ease duration-200 flex items-center capitalize pb-0 font-bold"
                                        : "pl-3 text-[#b3b3b3] hover:text-white transition-all ease duration-200 flex items-center capitalize pb-0 font-bold"
                                }
                            >
                                Liked songs
                            </p>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default FeatureMenu;
