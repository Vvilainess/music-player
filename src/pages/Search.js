import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import { actions, useStore } from "../components/Store";

const Search = () => {
    const [{ categories, searchResult, input }, dispatch] = useStore();
    console.log(searchResult);
    useEffect(() => {
        if (searchResult?.total === 0) {
            dispatch(actions.setSearchResult(null));
        }
    }, [searchResult, dispatch]);
    return (
        <div className="relative bg-[#121212]">
            <Header searchInput={true} />
            {!searchResult?.[0] && input && (
                <div className="w-full h-screen flex flex-col items-center justify-center">
                    <h1 className="text-white font-bold font-3xl block">
                        {"No results found for " + `"${input}"`}
                    </h1>
                    <p className="text-white font-xl block">
                        Please make sure your words are spelled correctly or use
                        less or different keywords.
                    </p>
                </div>
            )}
            <div className="px-9 py-7">
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
                                            `bg-[#${randomColor}] ` +
                                            "relative truncate rounded-md cursor-pointer after:content-[''] after:pb-[100%] after:block"
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
                {searchResult && (
                    <>
                        <div>
                            <div className="flex flex-wrap items-center">
                                <div className="sm:w-80 text-white md:w-80">
                                    <div className="w-full pb-3">
                                        <h1 className="capitalize font-bold text-2xl text-white">
                                            Top result
                                        </h1>
                                    </div>
                                    <div className="rounded-md hover:bg-[#282828] px-3 py-5">
                                        <div className="pb-5">
                                            <img
                                                src={
                                                    searchResult?.[0]
                                                        ?.images?.[1].url
                                                }
                                                alt={searchResult?.[0]?.name}
                                                className="w-24 h-24 rounded-md"
                                            />
                                        </div>
                                        <div className="pb-1">
                                            <h1 className="text-2xl text-white font-bold">
                                                {searchResult?.[0]?.name}
                                            </h1>
                                        </div>
                                        <div>
                                            <p className="inline-block text-[#b3b3b3] hover:underline cursor-pointer pr-5">
                                                {searchResult?.[0]?.artists.map(
                                                    (artist) => {
                                                        return (
                                                            artist.name + ", "
                                                        );
                                                    }
                                                )}
                                            </p>
                                            <span className="text-white text-md font-bold rounded-full uppercase leading-[1rem] bg-[rgba(0,0,0,.2)] px-3">
                                                {searchResult?.[0]?.album_type}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 sm:w-full md:w-full lg:w-96 text-white">
                                    <div className="w-full pb-3">
                                        <h1 className="capitalize font-bold text-2xl text-white">
                                            songs
                                        </h1>
                                    </div>
                                    Block 2
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
