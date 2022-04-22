import React, { useEffect } from "react";
import Header from "../../components/Header-components/Header";
import { actions, useStore } from "../../components/Store";
import AlbumsResult from "./AlbumsResult";
import ArtistsResult from "./ArtistsResult";
import CategoriesResult from "./CategoriesResult";
import EmptyResult from "./EmptyResult";
import Songslist from "./Songslist";
import TopResult from "./TopResult";

const Search = () => {
    const [{ categories, searchResult, input, artists }, dispatch] = useStore();
    useEffect(() => {
        if (!input) {
            dispatch(actions.setSearchResult(null));
        }
    }, [searchResult, input, artists, categories, dispatch]);
    return (
        <div className="relative bg-[#121212] pb-[150px]">
            <Header searchInput={true} background="bg-[#101010]" />
            <div className="px-9 py-7">
                {!searchResult?.album?.[0] && input && (
                    <EmptyResult input={input} />
                )}
                {!searchResult && !input && (
                    <CategoriesResult categories={categories} />
                )}
                {searchResult && searchResult.album && (
                    <>
                        <div className="flex sm:flex-wrap md:flex-wrap">
                            <TopResult searchResult={searchResult} />
                            <Songslist searchResult={searchResult} />
                        </div>
                        <div className="">
                            <ArtistsResult artists={artists} />
                        </div>
                        <div className="">
                            <AlbumsResult searchResult={searchResult} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Search;
