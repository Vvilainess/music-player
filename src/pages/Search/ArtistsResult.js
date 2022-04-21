import React from "react";
import SearchResultItem from "../../components/Utils/SearchResultItem";

const ArtistsResult = ({ artists }) => {
    return (
        <div>
            <h1 className="capitalize font-bold text-2xl text-white">
                Artists
            </h1>
            <div className="grid gap-x-6 grid-cols-6 py-5">
                {artists?.map((item, idx) => {
                    return <SearchResultItem key={idx} item={item} />;
                })}
            </div>
        </div>
    );
};

export default ArtistsResult;
