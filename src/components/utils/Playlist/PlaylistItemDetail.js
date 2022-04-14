import React, { useEffect } from "react";
import Header from "../../Header-components/Header";
import { useStore } from "../../Store";
import { Link, useLocation } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";

const PlaylistItemDetail = () => {
    const [{ playlistDetail }] = useStore();
    console.log(playlistDetail);
    const playlistOwner = useLocation().state.owner;
    const playlistImage = useLocation().state.images;
    const playlistName = useLocation().state.name;
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
    useEffect(() => {}, [playlistDetail]);

    return (
        <>
            <div className="relative top-0 left-0 h-full w-full bg-gradient-to-b from-[#555] to-[#2b2b2b] z-1">
                <Header />
                <div className="flex flex-row flex-1 justify-between h-[30vh] max-h-[500px] min-h-[350px]">
                    <div className="flex">
                        <div className="relative flex items-end justify-items-center">
                            <div className="relative mx-5 mb-7 w-48 h-48 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-52 lg:h-52 bg-[#282828] shadow-lg shadow-black">
                                {playlistImage[0] ? (
                                    <img src={playlistImage?.[0]?.url} alt="" />
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
                            <h1 className="text-white text-3xl leading-[30px] md:text-5xl md:leading-[48px] lg:text-8xl lg:leading-[96px] font-bold py-[0.08em]">
                                {playlistName}
                            </h1>
                            <div className="flex items-center flex-wrap mt-[8px]">
                                <div className="grid gap-[4px] grid-flow-col items-center text-[rgba(255,255,255,.7)] whitespace-nowrap">
                                    <span>
                                        <Link
                                            to={
                                                playlistOwner.external_urls
                                                    .spotify
                                            }
                                            target={"_blank"}
                                            key={playlistOwner.id}
                                            className="text-white text-sm font-bold hover:underline"
                                        >
                                            {playlistOwner.display_name}
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative bg-[#121212] isolate">
                    <div
                        style={{ backgroundColor: "rgb(224,224,224)" }}
                        className="absolute h-[232px] w-full bg-gradient-to-b from-[rgba(0,0,0,.6)] to-[#121212] -z-10 "
                    ></div>
                    <div className="relative flex flex-row items-center px-4 py-6">
                        <div className="flex flex-row items-center mr-8 cursor-pointer group">
                            <div className="relative rounded-full bg-[#1ed760] inline-block p-4 group-hover:scale-110 transition duration-150">
                                <span>
                                    <FaIcons.FaPlay />
                                </span>
                            </div>
                        </div>
                        <div className="cursor-pointer">
                            <div>
                                <span>
                                    <BsIcons.BsThreeDots className="text-[#b3b3b3] text-2xl hover:text-white" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="px-5">
                        <table className="w-full">
                            <thead>
                                <tr className="p-7">
                                    <th
                                        data-priority="1"
                                        className="tableHeading"
                                    >
                                        #
                                    </th>
                                    <th
                                        data-priority="2"
                                        className="tableHeading"
                                    >
                                        TITLE
                                    </th>
                                    <th
                                        data-priority="3"
                                        className="tableHeading"
                                    >
                                        ALBUM
                                    </th>
                                    <th
                                        data-priority="4"
                                        className="tableHeading"
                                    >
                                        DATE ADDED
                                    </th>
                                    <th
                                        data-priority="5"
                                        className="tableHeading"
                                    >
                                        <div className="flex flex-row justify-start items-center">
                                            <span className="mr-5">
                                                <BsIcons.BsClock className="font-bold text-lg" />
                                            </span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {playlistDetail?.map((item, idx) => {
                                    return (
                                        <>
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
                                                                    item.track
                                                                        .album
                                                                        ?.images?.[2]
                                                                        ?.url
                                                                }
                                                                alt=""
                                                                className="w-12 h-12"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col justify-between h-full ml-5">
                                                            <div>
                                                                <span>
                                                                    {
                                                                        item
                                                                            .track
                                                                            .name
                                                                    }
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span className="table-artist">
                                                                    {item.track.artists.map(
                                                                        (
                                                                            artist,
                                                                            idx
                                                                        ) => (
                                                                            <Link
                                                                                to="/"
                                                                                key={
                                                                                    idx
                                                                                }
                                                                            >
                                                                                {artist.name +
                                                                                    ", "}
                                                                            </Link>
                                                                        )
                                                                    )}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="col-item">
                                                    <Link
                                                        to="/"
                                                        className="table-album"
                                                    >
                                                        {item.track.album.name}
                                                    </Link>
                                                </td>
                                                <td className="col-item text-[#b3b3b3]">
                                                    {new Date(
                                                        item.added_at
                                                    ).toLocaleDateString(
                                                        "en-US",
                                                        options
                                                    )}
                                                </td>
                                                <td className="col-item text-[#b3b3b3] rounded-tr-lg rounded-br-lg">
                                                    <div className="flex flex-row tabular-nums">
                                                        {millisToMinutesAndSeconds(
                                                            item.track
                                                                .duration_ms
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        </>
                                    );
                                })}
                            </tbody>
                        </table>
                        <button className="block ml-auto mt-8 mr-4 mb-0">
                            <div className="inline-block uppercase text-xs tracking-widest leading-4 text-white font-bold">
                                Find More
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlaylistItemDetail;
