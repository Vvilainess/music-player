import React from "react";
import Track from "../../components/Utils/Track/Track";

const Songslist = ({ searchResult }) => {
    return (
        <div className="sm:flex-1 md:flex-1 lg:w-96 text-white">
            <div className="w-full pb-1">
                <h1 className="capitalize font-bold text-2xl text-white">
                    songs
                </h1>
            </div>
            <div className="p-2">
                {searchResult?.single?.slice(0, 4).map((single) => {
                    return <Track key={single.id} single={single} />;
                })}
            </div>
        </div>
    );
};

export default Songslist;
