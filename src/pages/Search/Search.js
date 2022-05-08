import React, { useEffect } from "react";
import Container from "../../components/Body-components/Container";
import Content from "../../components/Body-components/Content";
import Header from "../../components/Header-components/Header";
import { actions, useStore } from "../../components/Store";
import AlbumsResult from "./components/AlbumsResult";
import ArtistsResult from "./components/ArtistsResult";
import CategoriesResult from "./components/CategoriesResult";
import EmptyResult from "./components/EmptyResult";
import SongsList from "./components/SongsList";
import TopResult from "./components/TopResult";

const Search = () => {
    const [{ categories, searchResult, input, artists }, dispatch] = useStore();
    useEffect(() => {
        if (!input) {
            dispatch(actions.setSearchResult(null));
        }
        console.log("rendered...");
    }, [searchResult, input, artists, categories, dispatch]);
    return (
        <Container>
            <Header searchInput={true} background="bg-[#101010]" />
            <Content>
                {!searchResult && !input && (
                    <CategoriesResult categories={categories} />
                )}
                {!searchResult?.album?.[0] && input && (
                    <EmptyResult input={input} />
                )}
                {searchResult && searchResult.album && (
                    <>
                        <div className="gap-x-6 grid grid-rows-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xxl:grid-cols-6">
                            <TopResult searchResult={searchResult} />
                            <SongsList searchResult={searchResult} />
                        </div>
                        <div className="">
                            <ArtistsResult artists={artists} />
                        </div>
                        <div className="">
                            <AlbumsResult searchResult={searchResult} />
                        </div>
                    </>
                )}
            </Content>
        </Container>
    );
};

export default Search;
