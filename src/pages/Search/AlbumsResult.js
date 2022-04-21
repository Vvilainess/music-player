import React from "react";
import SearchResultItem from "../../components/Utils/SearchResultItem";

const AlbumsResult = ({ searchResult }) => {
    return (
        <div>
            <h1 className="capitalize font-bold text-2xl text-white">Albums</h1>
            <div
                className="grid gap-x-6 grid-cols-6 py-5" /* "flex flex-row flex-wrap content-start px-3 py-4" */
            >
                {searchResult?.album?.slice(1, 7).map((item) => {
                    return <SearchResultItem key={item.id} item={item} />;
                })}
            </div>
        </div>
    );
};

export default AlbumsResult;
