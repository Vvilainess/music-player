import React from "react";
import { useStore } from "../Store";
import LoginBtn from "../Feature-components/LoginBtn";
import SearchInput from "./SearchInput";
import HeaderButton from "./HeaderButton";
import ContentHeader from "../Body-components/ContentHeader";

const Header = ({ searchInput, background = "transparient", filter }) => {
    const [{ user }] = useStore();
    return (
        <div className={`absolute ${background} w-full z-10`}>
            <ContentHeader>
                <HeaderButton />
                {searchInput ? <SearchInput /> : <div></div>}
                {user && <LoginBtn />}
            </ContentHeader>
        </div>
    );
};

export default Header;
