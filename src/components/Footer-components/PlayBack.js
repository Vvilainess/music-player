import React from "react";
import PlaybackControl from "./PlaybackControl";
import PlayingTrack from "./PlayingTrack";
import VolumnControl from "./VolumnControl";
const PlayBack = () => {
    return (
        <footer className="absolute flex flex-1 items-center bg-[#181818] border-[#282828] border-t bottom-0 h-[90px] left-0 w-full z-10">
            <div className="flex flex-1 flex-row h-auto bg-[#181818] px-4">
                <PlayingTrack />
                <PlaybackControl />
                <VolumnControl />
            </div>
        </footer>
    );
};

export default PlayBack;
