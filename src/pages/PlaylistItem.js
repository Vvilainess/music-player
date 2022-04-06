import React from "react";
import Header from "../components/Header-components/Header";
import { Link, useLocation, useParams } from "react-router-dom";

const PlaylistItem = (props) => {
    const { type } = useParams();
    const playlistOwner = useLocation().state.owner;
    const playlistImage = useLocation().state.images;
    const playlistColor = useLocation().state.color;
    const playlistName = useLocation().state.name;
    console.log("Props Parameter Value: " + type);
    console.log(playlistOwner.external_urls.spotify);
    return (
        <>
            <Header />
            <div className="relative top-[-64px] left-0 h-full w-full bg-gradient-to-b from-[#555] to-[#2b2b2b] z-1">
                <div className="flex flex-row flex-1 justify-between h-[30vh] max-h-[500px] min-h-[350px]">
                    <div className="flex">
                        <div className="relative flex items-end justify-items-center">
                            <div className="relative mx-5 mb-7 w-48 h-48 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-52 lg:h-52 bg-[#282828] shadow-lg shadow-black">
                                {playlistImage[0] ? (
                                    <img
                                        src={playlistImage?.[0]?.url}
                                        alt="image"
                                    />
                                ) : (
                                    <svg
                                        height="96"
                                        role="img"
                                        width="96"
                                        viewBox="-20 -25 100 100"
                                        className="relative top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white font-bold"
                                        aria-hidden="true"
                                        data-testid="card-image-fallback"
                                    >
                                        <path
                                            d="M16 7.494v28.362A8.986 8.986 0 0 0 9 32.5c-4.962 0-9 4.038-9 9s4.038 9 9 9 9-4.038 9-9V9.113l30-6.378v27.031a8.983 8.983 0 0 0-7-3.356c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9s9-4.037 9-9V.266L16 7.494zM9 48.5c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7c0 3.859-3.141 7-7 7zm32-6.09c-3.86 0-7-3.14-7-7 0-3.859 3.14-7 7-7s7 3.141 7 7c0 3.861-3.141 7-7 7z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                        ></path>
                                    </svg>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row flex-1 align-bottom items-end mb-7">
                        <div className="w-full">
                            <p className="text-white text-xs md:text-sm lg:text-base font-bold uppercase">
                                Playlist
                            </p>
                            <h1 className="text-white text-3xl md:text-5xl lg:text-8xl font-bold leading-[48px]">
                                {playlistName}
                            </h1>
                            <Link
                                to={playlistOwner.external_urls.spotify}
                                target={"_blank"}
                                key={playlistOwner.id}
                                className="text-white text-sm font-bold hover:underline"
                            >
                                {playlistOwner.display_name}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlaylistItem;
