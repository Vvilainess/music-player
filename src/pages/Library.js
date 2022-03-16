import React from "react";
import Header from "../components/Header-components/Header";
const Library = () => {
    return (
        <div className="relative bg-[#101010]">
            <Header background={"bg-transparient"} />
            <div>
                <div>
                    <h1 className="text-white text-2xl font-bold capitalize">
                        Playlists
                    </h1>
                </div>
                <div>
                    <div>
                        <h1>Liked songs</h1>
                        <p>0 liked songs</p>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Library;
