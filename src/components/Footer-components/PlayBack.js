import React from "react";
import PlaybackControl from "./PlaybackControl";
import PlayingTrack from "./PlayingTrack";
import VolumnControl from "./VolumnControl";
const PlayBack = () => {
    return (
        <footer className="absolute block bg-[#181818] w-full left-0 bottom-0 z-10">
            <div className="flex flex-row h-auto bg-[#181818] border-t border-[#282828]">
                <PlayingTrack />
                <PlaybackControl />
                <VolumnControl />
            </div>
        </footer>
    );
};

export default PlayBack;
