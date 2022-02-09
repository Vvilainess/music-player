import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Search from "../../pages/Search";
import Library from "../../pages/Library";
import LikedSongs from "../../pages/LikedSongs";
import CreatePlaylist from "../../pages/CreatePlaylist";
const Switch = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/collection/playlist" element={<Library />} />
            <Route path="/playlist" element={<CreatePlaylist />} />
            <Route path="/collection/tracks" element={<LikedSongs />} />
        </Routes>
    );
};

export default Switch;
