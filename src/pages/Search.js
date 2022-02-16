import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import { useStore } from "../components/Store";

const Search = () => {
    const [{ categories }, dispatch] = useStore();
    useEffect(() => {
        console.log(categories);
    });
    return (
        <div className="relative bg-[#121212]">
            <Header searchInput={true} />
            <div className="px-9">
                <div className="w-full">
                    <h1 className="capitalize font-bold text-2xl text-white">
                        browser all
                    </h1>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg: grid-cols-6">
                    {/* {categories.map((category, idx) => {
                        return <></>

                    })} */}
                    <div className="relative w-48 h-48 truncate rounded-md mx-3">
                        <p className="text-white text-xl font-bold capitalize top-0 left-0 p-2">
                            Test
                        </p>
                        <img
                            src="https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg"
                            alt=""
                            className="absolute origin-center rotate-[35deg] w-24 h-24 right-0 bottom-0 m-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
