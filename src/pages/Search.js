import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header-components/Header";
import { actions, useStore } from "../components/Store";

const Search = () => {
    const [{ categories, searchResult, input, artists }, dispatch] = useStore();
    useEffect(() => {
        console.log(searchResult);
        console.log(artists);
        if (!input) {
            dispatch(actions.setSearchResult(null));
        }
    }, [searchResult, dispatch]);
    return (
        <div className="relative bg-[#121212]">
            <Header searchInput={true} />
            <div className="px-9 py-7">
                {!searchResult?.album?.[0] && input && (
                    <div className="w-full h-screen top-0 right-0 bottom-0">
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-white font-bold font-3xl block">
                                {"No results found for " + `"${input}"`}
                            </h1>
                            <p className="text-white font-xl block">
                                Please make sure your words are spelled
                                correctly or use less or different keywords.
                            </p>
                        </div>
                    </div>
                )}
                {!searchResult && !input && (
                    <>
                        <div className="w-full pb-3">
                            <h1 className="capitalize font-bold text-2xl text-white">
                                browser all
                            </h1>
                        </div>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 sm:gap-5 md:gap-4 lg:gap-5">
                            {categories.map((category, idx) => {
                                var randomColor = Math.floor(
                                    Math.random() * 16777215
                                ).toString(16);
                                return (
                                    <div
                                        key={idx}
                                        className={
                                            `after:bg-[#${randomColor}] ` +
                                            "relative truncate rounded-md cursor-pointer after:bg-black after:content-[''] after:pb-[100%] after:block"
                                        }
                                    >
                                        <div>
                                            <p className="block absolute box-border text-white text-xl font-bold break-words max-w-full top-0 left-0 p-2">
                                                {category.name}
                                            </p>
                                            <img
                                                src={category.icons?.[0].url}
                                                alt=""
                                                className="absolute origin-center rotate-[25deg] translate-x-[18%] translate-y-[-2%] w-24 h-24 right-0 bottom-0 m-0"
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}
                {searchResult && searchResult.album && (
                    <>
                        <div className="flex sm:flex-wrap md:flex-wrap">
                            <div className="">
                                <div className="sm:grow-1 sm:w-96 text-white md:grow-1">
                                    <div className="w-full pb-3 flex flex-col justify-between">
                                        <h1 className="capitalize font-bold text-2xl text-white">
                                            Top result
                                        </h1>
                                    </div>
                                    <div className="rounded-md bg-[#181818] hover:bg-[#282828] px-3 py-5">
                                        <div className="pb-5">
                                            <img
                                                src={
                                                    searchResult?.album?.[0]
                                                        .images[1].url
                                                }
                                                alt={
                                                    searchResult?.album?.[0]
                                                        ?.name
                                                }
                                                className="w-24 h-24 rounded-md"
                                            />
                                        </div>
                                        <div className="pb-1">
                                            <h1 className="text-2xl text-white font-bold">
                                                {searchResult?.album?.[0]?.name}
                                            </h1>
                                        </div>
                                        <div>
                                            <p className="inline-block text-[#b3b3b3] hover:underline cursor-pointer pr-5">
                                                {searchResult?.album?.[0]?.artists.map(
                                                    (artist) => {
                                                        return (
                                                            artist.name + ", "
                                                        );
                                                    }
                                                )}
                                            </p>
                                            <span className="text-white text-md font-bold rounded-full uppercase leading-[1rem] bg-[rgba(0,0,0,.2)] px-3">
                                                {
                                                    searchResult?.album?.[0]
                                                        ?.album_type
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:flex-1 md:flex-1 lg:w-96 text-white">
                                <div className="w-full pb-1">
                                    <h1 className="capitalize font-bold text-2xl text-white">
                                        songs
                                    </h1>
                                </div>
                                <div className="p-2">
                                    {searchResult?.single
                                        ?.slice(0, 4)
                                        .map((single) => {
                                            return (
                                                <Link
                                                    to="#"
                                                    key={single.id}
                                                    className="p-1 flex items-center flex-start rounded-md hover:bg-[#282828]"
                                                >
                                                    <img
                                                        src={
                                                            single.images[2].url
                                                        }
                                                        alt={single.name}
                                                        className="inline-block w-11 h-11"
                                                    />
                                                    <div className="pl-4">
                                                        <p>{single.name}</p>
                                                        <p>
                                                            {single.artists.map(
                                                                (artist) => {
                                                                    return (
                                                                        <Link
                                                                            key={
                                                                                artist.id
                                                                            }
                                                                            to="#"
                                                                            className="text-[#b3b3b3] text-base hover:underline"
                                                                        >
                                                                            {artist.name +
                                                                                ", "}
                                                                        </Link>
                                                                    );
                                                                }
                                                            )}
                                                        </p>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div>
                                <h1 className="capitalize font-bold text-2xl text-white">
                                    Artists
                                </h1>
                                <div className="flex flex-row flex-wrap contents-start px-3 py-4">
                                    {artists?.map((items, idx) => {
                                        console.log(items);
                                        return (
                                            <>
                                                <div
                                                    key={items.id}
                                                    className="rounded-md inline-block mr-5 mb-5 bg-[#181818] hover:bg-[#282828] transition ease-in duration-150 cursor-pointer"
                                                >
                                                    <div className="px-5 py-7 w-44">
                                                        <div className="relative pb-1">
                                                            <div className="rounded-full relative pb-[100%] w-full">
                                                                <div>
                                                                    <img
                                                                        src={
                                                                            items
                                                                                ?.images?.[0]
                                                                                ?.url
                                                                        }
                                                                        alt={
                                                                            items.name
                                                                        }
                                                                        className="absolute rounded-full left-0 top-0 w-full h-full shadow-lg shadow-black"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pt-5">
                                                            <p className="text-white font-md font-bold">
                                                                {items.name}
                                                            </p>
                                                            <p className="text-[#b3b3b3] font-xs capitalize">
                                                                {items.type}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div>
                                <h1 className="capitalize font-bold text-2xl text-white">
                                    Albums
                                </h1>
                                <div className="flex flex-row flex-wrap content-start px-3 py-4">
                                    {searchResult?.album
                                        ?.slice(1, 7)
                                        .map((items) => {
                                            console.log(items);
                                            return (
                                                <>
                                                    <div
                                                        key={items.id}
                                                        className="rounded-md inline-block mr-5 mb-5 max-h-[250px] text-ellipsis truncate bg-[#181818] hover:bg-[#282828] transition ease-in duration-150 cursor-pointer"
                                                    >
                                                        <div className="px-5 py-7 w-44">
                                                            <div className="relative pb-1">
                                                                <div className="rounded-full relative pb-[100%] w-full">
                                                                    <div>
                                                                        <img
                                                                            src={
                                                                                items
                                                                                    .images[0]
                                                                                    .url
                                                                            }
                                                                            alt={
                                                                                items.name
                                                                            }
                                                                            className="absolute rounded-full left-0 top-0 w-full h-full shadow-lg shadow-black"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="pt-5">
                                                                <div className="text-white font-md font-bold truncate">
                                                                    {items.name}
                                                                </div>
                                                                <p className="text-[#b3b3b3] font-xs capitalize">
                                                                    {items.type}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            );
                                        })}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Search;
