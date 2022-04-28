import React from "react";
import { useStore } from "../Store";
import LoginBtn from "../Feature-components/LoginBtn";
import SearchInput from "./SearchInput";
import HeaderButton from "./HeaderButton";
import ContentHeader from "../Body-components/ContentHeader";

const Header = ({ searchInput, background }) => {
    const [{ user }] = useStore();
    return (
        <div className={`absolute ${background} w-full z-10`}>
            <ContentHeader>
                <HeaderButton />
                <SearchInput searchInput={searchInput} />
                {user && <LoginBtn user={user} />}
            </ContentHeader>
        </div>
    );
};

export default Header;
