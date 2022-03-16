import React from "react";
import Header from "../components/Header-components/Header";
const Library = () => {
    return (
        <div className="relative bg-[#101010]">
            <Header background={"bg-transparient"} />
            <div className="relative px-8">
                <div className="">
                    <h1 className="text-white text-2xl font-bold capitalize">
                        Playlists
                    </h1>
                </div>
                <div>
                    <div className="relative rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500">
                        <div className="absolute bottom-0 px-5">
                            <h1 className="text-white font-bold text-2xl">
                                Liked songs
                            </h1>
                            <p className="text-white font-md text-xl">
                                0 liked songs
                            </p>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Library;
