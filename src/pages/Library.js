import React from "react";
import Header from "../components/Header-components/Header";
import { actions, useStore } from "../components/Store";

const Library = () => {
    const [{ playlist }, dispatch] = useStore();
    console.log(playlist);

    return (
        <div className="relative bg-[#101010]">
            <Header background={"bg-transparient"} />
            <div className="px-8">
                <div className="">
                    <h1 className="text-white text-2xl font-bold capitalize">
                        Playlists
                    </h1>
                </div>
                <div className="relative sm:grid-cols-2 md:grid-cols-7 lg:grid-cols-9">
                    <div className="relative rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500">
                        <div className="px-5">
                            <h1 className="text-white font-bold text-2xl">
                                Liked songs
                            </h1>
                            <p className="text-white font-md text-xl">
                                0 liked songs
                            </p>
                        </div>
                    </div>
                    <div>
                        {playlist?.map((playlist) => {
                            return (
                                <div
                                    key={playlist.id}
                                    className="rounded-md inline-block mr-5 mb-5 bg-[#181818] hover:bg-[#282828] transition ease-in duration-150 cursor-pointer"
                                >
                                    <div className="px-5 py-7 shadow-lg shadow-black">
                                        <div className="relative pb-1">
                                            <div className="rounded-full relative pb-[100%] w-full">
                                                <div>
                                                    {playlist?.images?.url ? (
                                                        <img
                                                            src={
                                                                playlist
                                                                    ?.images[0]
                                                                    ?.url
                                                            }
                                                            alt="image"
                                                            className="absolute rounded-md left-0 top-0 w-full h-full shadow-lg shadow-black"
                                                        />
                                                    ) : (
                                                        <div className="absolute rounded-md left-0 top-0 w-full h-full shadow-lg shadow-black">
                                                            <svg
                                                                height="64"
                                                                role="img"
                                                                width="64"
                                                                viewBox="-20 -25 100 100"
                                                                className="UB3cP9wsqoAMAHaeBGDt cTYewTys80cdIcEk9dI2 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white"
                                                                aria-hidden="true"
                                                                data-testid="card-image-fallback"
                                                            >
                                                                <path
                                                                    d="M16 7.494v28.362A8.986 8.986 0 0 0 9 32.5c-4.962 0-9 4.038-9 9s4.038 9 9 9 9-4.038 9-9V9.113l30-6.378v27.031a8.983 8.983 0 0 0-7-3.356c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9s9-4.037 9-9V.266L16 7.494zM9 48.5c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7c0 3.859-3.141 7-7 7zm32-6.09c-3.86 0-7-3.14-7-7 0-3.859 3.14-7 7-7s7 3.141 7 7c0 3.861-3.141 7-7 7z"
                                                                    fill="currentColor"
                                                                    fill-rule="evenodd"
                                                                ></path>
                                                            </svg>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-5">
                                            <div className="text-white font-md font-bold truncate hover:underline hover:underline-offset-1">
                                                {playlist.name}
                                            </div>
                                            <p className="text-[#b3b3b3] font-xs text-sm capitalize">
                                                {"By " +
                                                    playlist.owner.display_name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Library;
