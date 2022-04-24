import React from "react";
import Tittle from "../../components/Body-components/Tittle";
import SearchResultItem from "../../components/Utils/SearchResultItem";

const ArtistsResult = ({ artists }) => {
    return (
        <div>
            <Tittle className="capitalize font-bold text-2xl text-white">
                Artists
            </Tittle>
            <div className="grid gap-x-6 xs:grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xxl:grid-cols-6 py-5">
                {artists?.map((item, idx) => {
                    return <SearchResultItem key={idx} item={item} />;
                })}
            </div>
        </div>
    );
};

export default ArtistsResult;
