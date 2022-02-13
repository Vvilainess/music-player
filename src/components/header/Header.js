import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import * as FiIcons from "react-icons/fi";
import * as IoIcons from "react-icons/io";
import { useStore } from "../Store";

const Header = () => {
    const [{ user }, dispatch] = useStore();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTabActive, setIsTabActive] = useState(0);
    const handleTab = (idx) => {
        setIsTabActive(idx);
    };
    const handleMenuBtn = () => {
        setIsMenuOpen((prev) => {
            return !prev;
        });
    };
    useEffect(() => {
        window.onresize = () => {
            if (window.innerWidth > 1024) {
                setIsMenuOpen(false);
            }
        };
        return () => {
            window.removeEventListener("resize", window.onresize);
        };
    }, [user, dispatch]);
    return (
        <div className="sticky bg-[#101010] h-[64px] flex justify-end items-center">
            <ul className="items-center justify-center sm:hidden md:hidden lg:flex">
                <li className="leading-[64px] inline-block mr-7">
                    <Link
                        to="/premium"
                        className="text-[#f3f3f3] uppercase font-semibold p-2 tracking-[1.76px] hover:scale-105"
                    >
                        premium
                    </Link>
                </li>
                <li className="leading-[64px] inline-block mr-7">
                    <Link
                        to="/premium"
                        className="text-[#f3f3f3] uppercase font-semibold p-2 tracking-[1.76px] hover:scale-105"
                    >
                        support
                    </Link>
                </li>
                <li className="leading-[64px] inline-block mr-7">
                    <Link
                        to="/premium"
                        className="text-[#f3f3f3] uppercase font-semibold p-2 tracking-[1.76px] hover:scale-105"
                    >
                        download
                    </Link>
                </li>
            </ul>
            <div className="">
                {user && (
                    <div className="bg-[#282828] rounded-full pl-1 pr-3 py-1 mr-3 flex justify-center items-center">
                        <img
                            className="w-7 h-7 rounded-full mr-2"
                            alt={user?.display_name}
                            src={user?.images?.[0].url}
                        />
                        <Link to="" className="text-white">
                            {user?.display_name}
                        </Link>
                    </div>
                )}
            </div>
            <div
                onClick={handleMenuBtn}
                className="flex items-center justify-center cursor-pointer mr-5 sm:flex md:flex lg:hidden"
            >
                <div className="rounded-full bg-black w-7 h-7 flex items-center justify-center">
                    <FiIcons.FiMenu className="text-white" />
                </div>
            </div>
            {isMenuOpen ? (
                <div className="absolute top-14 right-7 bg-[#282828] rounded-md w-[196px]">
                    <ul>
                        {MenuItems.map((items, idx) => {
                            return (
                                <li key={idx} className="flex flex-col">
                                    <Link
                                        className="flex items-center justify-between text-white capitalize font-semibold px-3 py-2 m-1 hover:bg-[#3e3e3e] rounded-md"
                                        to={items.url}
                                    >
                                        {items.title}
                                        <IoIcons.IoMdOpen />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ) : null}
        </div>
    );
};

export default Header;
