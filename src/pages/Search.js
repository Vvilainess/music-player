import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import { useStore } from "../components/Store";

const Search = () => {
    const [{ categories, searchResult }, dispatch] = useStore();
    console.log(searchResult);
    useEffect(() => {}, [searchResult]);
    return (
        <div className="relative bg-[#121212]">
            <Header searchInput={true} />
            <div className="px-9 py-7">
                {searchResult ? (
                    <>
                        <div className="w-full pb-3">
                            <h1 className="capitalize font-bold text-2xl text-white">
                                Top result
                            </h1>
                        </div>
                        <div></div>
                    </>
                ) : (
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
            </div>
        </div>
    );
};

export default Search;
