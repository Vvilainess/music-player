import React from "react";
import { Link } from "react-router-dom";
import { MenuItems, Register } from "./MenuItems";

const Header = () => {
    return (
        <div className="sticky bg-[#101010] h-[64px] flex justify-end">
            <ul className="flex items-center justify-center">
                {MenuItems.map((items, idx) => {
                    return (
                        <li
                            key={idx}
                            className="leading-[64px] inline-block mr-7"
                        >
                            <Link
                                className="text-[#f3f3f3] uppercase font-semibold p-2"
                                to={items.url}
                            >
                                {items.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <ul className="relative flex items-center justify-center">
                {Register.map((items, idx) => {
                    return (
                        <li
                            key={idx}
                            className="leading-[64px] inline-block mr-7"
                        >
                            <Link
                                className={
                                    items.cName +
                                    " " +
                                    "relative uppercase font-semibold"
                                }
                                to={items.url}
                            >
                                {items.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Header;
