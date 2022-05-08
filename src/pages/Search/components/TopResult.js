import React from "react";

const TopResult = ({ searchResult }) => {
    return (
        <div className="text-white xs:col-span-1 sm:col-span-1 md:col-span-3 lg:col-span-2 xl:col-span-2 xxl:col-span-2">
            <div className="w-full pb-3 flex flex-col justify-between">
                <h1 className="capitalize font-bold text-2xl text-white">
                    Top result
                </h1>
            </div>
            <div className="rounded-md bg-[#181818] hover:bg-[#282828] px-5 py-5">
                <div className="pb-5">
                    <img
                        src={searchResult?.album?.[0].images[1].url}
                        alt={searchResult?.album?.[0]?.name}
                        className="w-24 h-24 rounded-full"
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
                            (artist, idx) => {
                                return (idx ? ", " : "") + artist.name;
                            }
                        )}
                    </p>
                    <span className="text-white text-md font-bold rounded-full uppercase leading-[1rem] bg-[rgba(0,0,0,.2)] px-3">
                        {searchResult?.album?.[0]?.album_type}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TopResult;
