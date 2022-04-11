import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";
import { useStore } from "../Store";
import createPlaylist from "../Auth/getTokenFromUrl";

const Sidebar = () => {
    const [{ playlist, token }] = useStore();
    const [isActiveTab, setIsActiveTab] = useState(1);
    const handleTab = (idx) => {
        setIsActiveTab(idx);
    };
    useEffect(() => {}, [playlist]);
    return (
        <div className="fixed flex flex-col w-[241px] h-screen bg-black pt-6 mr-3">
            <Link to="/" className="flex items-center justify-start px-5">
                <BsIcons.BsSpotify className="text-4xl text-white inline-block mr-1" />
                <p className="text-white text-2xl font-bold inline-block">
                    Spotify
                </p>
            </Link>
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
                            to="/collection/playlist"
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
                            to="/collection/playlist"
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
            <div className="relative w-[80%] h-[1px] bg-[#7c7c7c] mx-5 shadow-lg shadow-black">
                <div className="absolute h-[16px] bottom-[-16px] left-0 right-0 bg-gradient-to-t from-[rgba(0,0,0,.7)] to-[transparient] z-10"></div>
            </div>
            <div className="pt-2 pb-2 flex-1 overflow-y-scroll mr-1">
                {playlist.map((playlist, idx) => {
                    return (
                        <div key={idx} className="pt-1 pb-1 px-5">
                            <Link
                                to={`/playlist/${playlist.id}`}
                                state={{
                                    images: playlist.images,
                                    owner: playlist.owner,
                                    name: playlist.name,
                                }}
                                className="text-[#b3b3b3] hover:text-white break-words text-sm"
                            >
                                {playlist?.name}
                            </Link>
                        </div>
                    );
                })}
            </div>
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
