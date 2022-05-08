import React from "react";
import Title from "../../../components/Body-components/Title";
import SearchResultItem from "../../../components/Utils/SearchResultItem";

const AlbumsResult = ({ searchResult }) => {
    return (
        <div>
            <Title className="capitalize font-bold text-2xl text-white">
                Albums
            </Title>
            <div className="grid gap-x-6 xs:grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xxl:grid-cols-6 py-5">
                {searchResult?.album?.slice(1, 7).map((item) => {
                    return <SearchResultItem key={item.id} item={item} />;
                })}
            </div>
        </div>
    );
};

export default AlbumsResult;
