import React from "react";
import { Link } from "react-router-dom";
import { BsClock } from "react-icons/bs";

const TracksTable = ({ playlistDetail }) => {
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
    };
    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }
    return (
        <table className="w-full">
            <thead>
                <tr className="p-7">
                    <th data-priority="1" className="tableHeading">
                        #
                    </th>
                    <th data-priority="2" className="tableHeading">
                        TITLE
                    </th>
                    <th data-priority="3" className="tableHeading">
                        ALBUM
                    </th>
                    <th data-priority="4" className="tableHeading">
                        DATE ADDED
                    </th>
                    <th data-priority="5" className="tableHeading">
                        <div className="flex flex-row justify-start items-center">
                            <span className="mr-5">
                                <BsClock className="font-bold text-lg" />
                            </span>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {playlistDetail?.map((item, idx) => {
                    return (
                        <tr
                            key={idx}
                            className="hover:bg-[#ffffff1a] cursor-pointer"
                        >
                            <td className="col-item rounded-tl-lg rounded-bl-lg">
                                {idx + 1}
                            </td>
                            <td className="col-item">
                                <div className="flex flex-row items-center">
                                    <div>
                                        <img
                                            src={
                                                item.track.album?.images?.[2]
                                                    ?.url
                                            }
                                            alt=""
                                            className="w-12 h-12"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between h-full ml-5">
                                        <div>
                                            <span>{item.track.name}</span>
                                        </div>
                                        <div>
                                            <span className="table-artist">
                                                {item.track.artists.map(
                                                    (artist, idx) => (
                                                        <Link to="/" key={idx}>
                                                            {(idx ? ", " : "") +
                                                                artist.name}
                                                        </Link>
                                                    )
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="col-item">
                                <Link to="/" className="table-album">
                                    {item.track.album.name}
                                </Link>
                            </td>
                            <td className="col-item text-[#b3b3b3]">
                                {new Date(item.added_at).toLocaleDateString(
                                    "en-US",
                                    options
                                )}
                            </td>
                            <td className="col-item text-[#b3b3b3] rounded-tr-lg rounded-br-lg">
                                <div className="flex flex-row tabular-nums">
                                    {millisToMinutesAndSeconds(
                                        item.track.duration_ms
                                    )}
                                </div>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default TracksTable;
