import React from "react";
import { Link } from "react-router-dom";

const Track = ({ single }) => {
    return (
        <Link
            to="#"
            key={single.id}
            className="p-1 flex items-center flex-start rounded-md hover:bg-[#282828]"
        >
            <img
                src={single.images[2].url}
                alt={single.name}
                className="inline-block w-11 h-11"
            />
            <div className="pl-4">
                <p>{single.name}</p>
                <p>
                    {single.artists.map((artist) => {
                        return (
                            <Link
                                key={artist.id}
                                to="#"
                                className="text-[#b3b3b3] text-base hover:underline"
                            >
                                {artist.name + ", "}
                            </Link>
                        );
                    })}
                </p>
            </div>
        </Link>
    );
};

export default Track;
