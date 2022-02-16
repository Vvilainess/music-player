import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "../Header/MenuItems";
import * as IoIcons from "react-icons/io";

const LoginBtn = ({ user }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleBtn = () => {
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
    });
    return (
        <div to="" className="relative flex items-center cursor-pointer">
            <div
                onClick={handleBtn}
                className={
                    isMenuOpen
                        ? "bg-[#282828] bg-black hover:bg-[#282828] rounded-full flex justify-center items-center md:pl-1 md:pr-3 md:py-1 mr-3"
                        : "hover:bg-[#282828] bg-black rounded-full flex justify-center items-center md:pl-1 md:pr-3 md:py-1 mr-3"
                }
            >
                <img
                    className="w-7 h-7 rounded-full md:mr-2"
                    alt={user?.display_name}
                    src={user?.images?.[0].url}
                />
                <p to="" className="text-white hidden md:block">
                    {user?.display_name}
                </p>
                <span to="">
                    {isMenuOpen ? (
                        <IoIcons.IoMdArrowDropup className="text-white font-md hidden md:block" />
                    ) : (
                        <IoIcons.IoMdArrowDropdown className="text-white font-md hidden md:block" />
                    )}
                </span>
            </div>
            {isMenuOpen ? (
                <div className="absolute top-14 right-7 bg-[#282828] rounded-md w-[196px] transition-all ease-in duration-300">
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

export default LoginBtn;
