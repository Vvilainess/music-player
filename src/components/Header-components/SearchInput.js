import React, { useCallback, useEffect } from "react";
import { useStore, actions } from "../Store";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { spotify } from "../../App";

const SearchInput = () => {
    const [{ input, token }, dispatch] = useStore();
    const groupBy = (keys) => (array) =>
        array.reduce((objectsByKeyValue, obj) => {
            const value = keys.map((key) => obj[key]).join("-");
            objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(
                obj
            );
            return objectsByKeyValue;
        }, {});
    const debounce = (fn, delay) => {
        let timerId;
        return (...args) => {
            clearTimeout(timerId);
            timerId = setTimeout(() => fn(...args), delay);
        };
    };
    useEffect(() => {
        if (!input) {
            dispatch(actions.setSearchResult(null));
        }
    }, [input, token, dispatch]);

    const debouceSearch = useCallback(
        debounce(
            (inputValue) =>
                spotify.searchAlbums(
                    inputValue,
                    { limit: 6 },
                    (error, response) => {
                        if (error) {
                            console.log(error);
                        } else {
                            const newSearchResult = groupBy(["album_type"]);
                            const obj = newSearchResult(response.albums.items);
                            if (inputValue && obj) {
                                dispatch(actions.setSearchResult(obj));
                            }
                        }
                        spotify
                            .searchArtists(inputValue, { limit: 6, offset: 6 })
                            .then((response) =>
                                dispatch(
                                    actions.setArtist(response.artists.items)
                                )
                            );
                    }
                ),
            1000
        ),
        []
    );
    const handleSubmitSearch = (e) => {
        const { value } = e.target;
        dispatch(actions.setInput(value));
        if (value) {
            debouceSearch(value);
        }
    };
    // const getSearchResult = (inputValue) => {
    //     getData(
    //         `https://api.spotify.com/v1/search?q=${inputValue}&type=album&include_external=audio?offset=0&limit=50`,
    //         token,
    //         "GET"
    //     )
    //         .then((response) => {
    //             const groupBy = (keys) => (array) =>
    //                 array.reduce((objectsByKeyValue, obj) => {
    //                     const value = keys.map((key) => obj[key]).join("-");
    //                     objectsByKeyValue[value] = (
    //                         objectsByKeyValue[value] || []
    //                     ).concat(obj);
    //                     return objectsByKeyValue;
    //                 }, {});
    //             const newSearchResult = groupBy(["album_type"]);
    //             const obj = newSearchResult(response.data.albums.items);
    //             if (input) {
    //                 dispatch(actions.setSearchResult(obj));
    //             }
    //         })
    //         .then(
    //             getData(
    //                 `https://api.spotify.com/v1/search?q=${inputValue}&type=artist&include_external=audio?offset=0&limit=6`,
    //                 token,
    //                 "GET"
    //             ).then((response) => {
    //                 if (response.data) {
    //                     dispatch(
    //                         actions.setArtist(response.data.artists.items)
    //                     );
    //                 }
    //             })
    //         );
    // };
    return (
        <>
            <form autoComplete="off" className="ml-24 relative">
                <input
                    value={input}
                    onChange={(e) => {
                        handleSubmitSearch(e);
                    }}
                    type="text"
                    name="search"
                    placeholder="Artists, songs, or podcasts"
                    className="xs:w-54 sm:w-64 md:w-64 px-11 py-2 rounded-full text-black text-ellipsis focus-visible:outline-none"
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
    );
};

export default SearchInput;
