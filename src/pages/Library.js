import React, { useEffect } from "react";
import Header from "../components/Header-components/Header";
import { useStore } from "../components/Store";
import PlaylistItem from "../components/Utils/Playlist/PlaylistItem";
import LikedList from "../components/Utils/Playlist/LikedList";
import Container from "../components/Body-components/Container";
import Tittle from "../components/Body-components/Tittle";

const Library = () => {
    const [{ playlist }] = useStore();
    useEffect(() => {}, [playlist]);
    return (
        <Container>
            <Header background={"bg-transparient"} />
            <div className="px-8">
                <Tittle className="text-white text-2xl font-bold capitalize">
                    Playlists
                </Tittle>
                <div className="relative grid mt-3 gap-5 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6 grid-flow-row z-0">
                    <LikedList />
                    {playlist?.map((playlistItem) => {
                        return (
                            <PlaylistItem
                                key={playlistItem.id}
                                playlist={playlistItem}
                            />
                        );
                    })}
                    <div></div>
                </div>
            </div>
        </Container>
    );
};

export default Library;
