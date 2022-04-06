import React, { useEffect } from "react";
import { actions, useStore } from "../Store";
import LoginBtn from "../Feature-components/LoginBtn";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import getData from "../GetAPI/Axios";
import { BrowserRouter, Router } from "react-router-dom";

const Header = ({ searchInput, background }) => {
    const [{ user, token, input }, dispatch] = useStore();
    const handleInput = (e) => {
        dispatch(actions.setInput(e.target.value));
    };
    useEffect(() => {
        const getSearchResult = () => {
            getData(
                `https://api.spotify.com/v1/search?q=${input}&type=album&include_external=audio?offset=0&limit=50`,
                token,
                "GET"
            ).then((response) => {
                const groupBy = (keys) => (array) =>
                    array.reduce((objectsByKeyValue, obj) => {
                        const value = keys.map((key) => obj[key]).join("-");
                        objectsByKeyValue[value] = (
                            objectsByKeyValue[value] || []
                        ).concat(obj);
                        return objectsByKeyValue;
                    }, {});
                const newSearchResult = groupBy(["album_type"]);
                const obj = newSearchResult(response.data.albums.items);
                if (input) {
                    dispatch(actions.setSearchResult(obj));
                }
            });
        };
        const getArtist = () => {
            getData(
                `https://api.spotify.com/v1/search?q=${input}&type=artist&include_external=audio?offset=0&limit=6`,
                token,
                "GET"
            ).then((response) => {
                dispatch(actions.setArtist(response.data.artists.items));
            });
        };
        if (input) {
            getSearchResult();
            getArtist();
        } else {
            dispatch(actions.setSearchResult(null));
        }
    }, [input, token, dispatch]);
    return (
        <div
            className={
                background +
                " " +
                "sticky h-[64px] flex justify-between items-center z-10"
            }
        >
            <div className="absolute flex items-center justify-between w-16 ml-3">
                <div
                    className="rounded-full bg-black p-1 cursor-pointer mr-3"
                    onClick={() => {
                        Router.History.back();
                    }}
                >
                    <IoIcons.IoIosArrowBack className="text-white font-bold text-2xl" />
                </div>
                <div className="rounded-full bg-black p-1 cursor-pointer">
                    <IoIcons.IoIosArrowForward className="text-white font-bold text-2xl" />
                </div>
            </div>
            {searchInput ? (
                <>
                    <form autoComplete="off" className="ml-24 relative">
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
                        {input && (
                            <IoIcons.IoMdClose
                                onClick={() => {
                                    dispatch(actions.setInput(""));
                                }}
                                className="absolute top-0 right-0 h-full text-2xl mr-3 cursor-pointer"
                            />
                        )}
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
