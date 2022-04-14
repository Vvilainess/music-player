import React from "react";
import { useStore } from "../Store";
import LoginBtn from "../Feature-components/LoginBtn";
import SearchInput from "./SearchInput";
import HeaderButton from "./HeaderButton";

const Header = ({ searchInput, background }) => {
    const [{ user }] = useStore();
    return (
        <div
            className={
                background +
                " " +
                "sticky h-[64px] flex justify-between items-center z-10"
            }
        >
            <HeaderButton />
            <SearchInput searchInput={searchInput} />
            <div className="">{user && <LoginBtn user={user} />}</div>
        </div>
    );
};

export default Header;
