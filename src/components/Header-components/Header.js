import React, { useEffect } from "react";
import { actions, useStore } from "../Store";
import LoginBtn from "../Feature-components/LoginBtn";
import * as AiIcons from "react-icons/ai";
import getData from "../GetAPI/Axios";

const Header = ({ searchInput }) => {
    const [{ user, token, input }, dispatch] = useStore();
    const handleInput = (e) => {
        dispatch(actions.setInput(e.target.value));
    };
    const getSearchResult = () => {
        getData(
            `https://api.spotify.com/v1/search?q=${input}&type=album&include_external=audio?`,
            token,
            "GET"
        ).then((response) => {
            if (input) {
                dispatch(actions.setSearchResult(response.data.albums.items));
            }
        });
    };
    useEffect(() => {
        if (input) {
            getSearchResult();
        } else {
            dispatch(actions.setSearchResult(null));
        }
    }, [input, dispatch]);
    return (
        <div className="sticky bg-[#101010] h-[64px] flex justify-between items-center">
            {searchInput ? (
                <>
                    <form autoComplete="off" className="ml-11 relative">
                        <input
                            value={input}
                            onChange={(e) => {
                                handleInput(e);
                            }}
                            type="text"
                            name="search"
                            placeholder="Artists, songs, or podcasts"
                            className="sm:w-64 md:w-96 px-11 py-2 rounded-full text-black text-ellipsis focus-visible:outline-none"
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
