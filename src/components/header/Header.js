import React from "react";
import { useStore } from "../Store";
import LoginBtn from "../Login/LoginBtn";
import * as AiIcons from "react-icons/ai";

const Header = ({ searchInput }) => {
    const [{ user }, dispatch] = useStore();
    return (
        <div className="sticky bg-[#101010] h-[64px] flex justify-between items-center">
            {searchInput ? (
                <>
                    <form className="ml-11 relative">
                        <input
                            type="text"
                            name="search"
                            placeholder="Artists, songs, or podcasts"
                            className="w-96 px-11 py-2 rounded-full text-black focus-visible:outline-none"
                        />
                        <AiIcons.AiOutlineSearch className="absolute top-0 left-0 h-full text-2xl ml-3" />
                        <div className=""></div>
                    </form>
                </>
            ) : (
                <div></div>
            )}
            <div className="">{user && <LoginBtn user={user} />}</div>
        </div>
    );
};

export default Header;
