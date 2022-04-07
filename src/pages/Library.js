import React, { useEffect } from "react";
import Header from "../components/Header-components/Header";
import { actions, useStore } from "../components/Store";
import PlaylistItem from "../components/Utils/Playlist/PlaylistItem";
import LikedList from "../components/Utils/Playlist/LikedList";

const Library = () => {
    const [{ playlist }] = useStore();
    console.log(playlist);

    useEffect(() => {}, [playlist]);

    return (
        <div className="relative bg-[#101010]">
            <Header background={"bg-transparient"} />
            <div className="px-8">
                <div className="">
                    <h1 className="text-white text-2xl font-bold capitalize">
                        Playlists
                    </h1>
                </div>
                <div className="relative grid mt-3 gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 grid-cols-auto z-0">
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
        </div>
    );
};

export default Library;
