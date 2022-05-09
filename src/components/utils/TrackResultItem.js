import React, { useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { spotify } from "../../App";
import { useStore } from "../Store";
import { setDevicesId, setIsPlaying } from "../Store/actions";

const TrackResultItem = ({ item }) => {
    const [{ devicesId, isPlaying }, dispatch] = useStore();

    useEffect(() => {
        console.log(isPlaying);
    }, []);
    return (
        <div className="group relative rounded-md inline-block mb-5 cursor-pointer">
            <div className="px-5 py-7 shadow-lg shadow-black">
                <div className="relative pb-1">
                    <div className="rounded-full relative pb-[100%] w-full">
                        <div>
                            {item?.images?.[0]?.url ? (
                                <img
                                    src={item?.images?.[0]?.url}
                                    alt={item.name}
                                    className="absolute rounded-lg left-0 top-0 w-full h-full shadow-lg shadow-black"
                                />
                            ) : (
                                <div className="absolute rounded-lg left-0 top-0 w-full h-full shadow-lg shadow-black">
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
                                            fillRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                            )}
                        </div>
                    </div>
                    <div
                        className="absolute xs:relative xs:mt-3 xs:ml-5 xs:inline-block xs:right-0 bottom-3 right-3 bg-green-600 px-4 py-4 rounded-full opacity-0 transition duration-400 ease-in-out shadow-slate-900 shadow-lg group-hover:transform group-hover:-translate-y-1 group-hover:opacity-100"
                        onClick={() => {
                            console.log(item);
                            spotify.play(
                                {
                                    device_id: devicesId.id,
                                    context_uri: item.uri,
                                },
                                (err, succ) => {
                                    if (err) console.log(err);
                                    if (succ) dispatch(setIsPlaying(true));
                                }
                            );
                        }}
                    >
                        <div className="relative z-1 p-0 m-0">
                            <FaPlay />
                        </div>
                    </div>
                </div>
                <div className="pt-5">
                    <div className="text-white font-md font-bold truncate">
                        {item.name}
                    </div>
                    <p className="text-[#b3b3b3] font-xs capitalize">
                        {item.type}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TrackResultItem;
