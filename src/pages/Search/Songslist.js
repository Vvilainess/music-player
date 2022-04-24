import React from "react";
import Tittle from "../../components/Body-components/Tittle";
import Track from "../../components/Utils/Track/Track";

const SongsList = ({ searchResult }) => {
    return (
        <div className="text-white xs:col-span-1 sm:col-span-1 md:col-span-3 lg:col-span-2 xl:col-span-4 xxl:col-span-4">
            <div className="w-full pb-1">
                <Tittle>songs</Tittle>
            </div>
            <div className="p-2">
                {searchResult?.single?.slice(0, 4).map((single) => {
                    console.log(single);
                    return <Track key={single.id} single={single} />;
                })}
            </div>
        </div>
    );
};

export default SongsList;
