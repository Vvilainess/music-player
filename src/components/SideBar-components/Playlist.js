import React from "react";
import getData from "../GetAPI/Axios";
import { useStore, actions } from "../Store";
import { Link } from "react-router-dom";

const Playlist = () => {
    const [{ playlist, token }, dispatch] = useStore();
    return (
        <>
            <div className="pt-2 pb-2 flex-1 overflow-y-scroll mr-1">
                {playlist.map((playlist, idx) => {
                    return (
                        <div key={idx} className="pt-1 pb-1 px-5">
                            <Link
                                to={`/playlist/${playlist.id}`}
                                onClick={() => {
                                    getData(
                                        `https://api.spotify.com/v1/playlists/${playlist.id}/tracks`,
                                        token,
                                        "GET"
                                    ).then((res) => {
                                        if (res.data) {
                                            dispatch(
                                                actions.setPlaylistDetail(
                                                    res.data.items
                                                )
                                            );
                                        }
                                    });
                                    console.log(playlist.id);
                                }}
                                state={{
                                    images: playlist.images,
                                    owner: playlist.owner,
                                    name: playlist.name,
                                }}
                                className="text-[#b3b3b3] hover:text-white break-words text-sm"
                            >
                                {playlist?.name}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Playlist;
