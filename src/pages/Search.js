import React, { useEffect } from "react";
import Header from "../components/Header-components/Header";
import { actions, useStore } from "../components/Store";
import CategoryItem from "../components/Utils/Category/CategoryItem";
import SearchResultItem from "../components/Utils/SearchResultItem";
import Track from "../components/Utils/Track/Track";

const Search = () => {
    const [{ categories, searchResult, input, artists }, dispatch] = useStore();
    useEffect(() => {
        if (!input) {
            dispatch(actions.setSearchResult(null));
        }
    }, [searchResult, input, artists, categories, dispatch]);
    return (
        <div className="relative bg-[#121212]">
            <Header searchInput={true} background="bg-[#101010]" />
            <div className="px-9 py-7">
                {!searchResult?.album?.[0] && input && (
                    <div className="w-full h-screen top-0 right-0 bottom-0">
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-white font-bold font-3xl block">
                                {`No results found for "${input}"`}
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
                                return (
                                    <CategoryItem
                                        category={category}
                                        key={idx}
                                    />
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
                                                <Track
                                                    key={single.id}
                                                    single={single}
                                                />
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
                                    {artists?.map((item, idx) => {
                                        return (
                                            <SearchResultItem
                                                key={idx}
                                                item={item}
                                            />
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
                                        .map((item) => {
                                            return (
                                                <SearchResultItem
                                                    key={item.id}
                                                    item={item}
                                                />
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
