import React from "react";
import { Link } from "react-router-dom";

const Filter = () => {
    return (
        <div className="flex flex-row justify-between items-center">
            <div>
                <Link to="/collection/playlists">Playlists</Link>
            </div>
            <div>
                <Link to="/collection/podcasts">Podcasts</Link>
            </div>
            <div>
                <Link to="/collection/artists">Artists</Link>
            </div>
            <div>
                <Link to="/collection/albums">Albums</Link>
            </div>
        </div>
    );
};

export default Filter;
