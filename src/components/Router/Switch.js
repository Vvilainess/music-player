import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Search from "../../pages/Search/Search";
import Library from "../../pages/Library";
import LikedSongs from "../../pages/LikedSongs/LikedSongs";
import CreatePlaylist from "../../pages/CreatePlaylist";
import PlaylistItemDetail from "../Utils/Playlist/PlaylistItemDetail";
const Switch = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/collection/playlists" element={<Library />} />
            <Route path="/playlist" element={<CreatePlaylist />} />
            <Route path="/collection/tracks" element={<LikedSongs />} />
            <Route path="/playlist/:id" element={<PlaylistItemDetail />} />
            <Route path="/download" element={<Home />} />
        </Routes>
    );
};

export default Switch;
