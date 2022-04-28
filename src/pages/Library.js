import React, { useEffect } from "react";
import Header from "../components/Header-components/Header";
import { useStore } from "../components/Store";
import PlaylistItem from "../components/Utils/Playlist/PlaylistItem";
import LikedList from "../components/Utils/Playlist/LikedList";
import Container from "../components/Body-components/Container";
import Title from "../components/Body-components/Title";
import Content from "../components/Body-components/Content";

const Library = () => {
    const [{ playlist }] = useStore();
    useEffect(() => {}, [playlist]);
    return (
        <Container>
            <Header background={"bg-transparient"} />
            <Content>
                <>
                    <Title className="text-white text-2xl font-bold capitalize">
                        Playlists
                    </Title>
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
                </>
            </Content>
        </Container>
    );
};

export default Library;
