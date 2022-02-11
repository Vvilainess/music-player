import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import * as FiIcons from "react-icons/fi";
import * as IoIcons from "react-icons/io";
import { Credentials } from "../auth/Credentials";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const spotifyAuth = Credentials();
    const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
    const SPACER = "%20";
    const SCOPES = ["user-read-email", "user-read-private"];
    const SCOPES_URL_PARAMS = SCOPES.join(SPACER);
    const handleLogin = () => {
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${spotifyAuth.ClientId}&redirect_uri=${spotifyAuth.RedirectUri}&scope=${SCOPES_URL_PARAMS}&response_type=token&show_dialog=true`;
    };
    const handleMenuBtn = () => {
        setIsMenuOpen((prev) => {
            return !prev;
        });
    };
    const getReturnedParamsFromSpotifyAuth = (hash) => {
        const stringAfterHashtag = hash.substring(1);
        const paramsInUrl = stringAfterHashtag.split("&");
        const paramsSplitUp = paramsInUrl.reduce(
            (accumulater, currentValue) => {
                const [key, value] = currentValue.split("=");
                accumulater[key] = value;
                return accumulater;
            },
            {}
        );
        return paramsSplitUp;
    };
    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 1024) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("resize", hideMenu);
        if (window.location.hash) {
            const { access_token, token_type, expires_in } =
                getReturnedParamsFromSpotifyAuth(window.location.hash);
            setIsLoggedIn(true);
            localStorage.clear();
            localStorage.setItem("access_token", access_token);
            localStorage.setItem("token_type", token_type);
            localStorage.setItem("expires_in", expires_in);
        }
        return () => {
            window.removeEventListener("resize", hideMenu);
        };
    }, []);

    return (
        <div className="sticky bg-[#101010] h-[64px] flex justify-end">
            <ul className="items-center justify-center sm:hidden md:hidden lg:flex">
                {MenuItems.map((items, idx) => {
                    return (
                        <li
                            key={idx}
                            className="leading-[64px] inline-block mr-7"
                        >
                            <Link
                                className="text-[#f3f3f3] uppercase font-semibold p-2 tracking-[1.76px] hover:scale-105"
                                to={items.url}
                            >
                                {items.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            {isLoggedIn ? (
                <ul className="relative flex items-center justify-center">
                    <li className="mr-7">
                        <Link
                            to="/signup"
                            className="text-[#f3f3f3] before:content-[''] before:absolute before:min-width-[2px] before:min-height-100 before:bg-white before:top-[3px] before:left-[-19px] relative uppercase font-semibold"
                        >
                            sign up
                        </Link>
                    </li>
                    <li className="mr-7">
                        <Link
                            onClick={handleLogin}
                            to="/login"
                            className="px-7 py-1 rounded-full bg-white text-black font-semibold uppercase"
                        >
                            login
                        </Link>
                    </li>
                </ul>
            ) : (
                <h1>Logged In</h1>
            )}
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
