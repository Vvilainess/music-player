import React, { useState } from "react";
import { MdQueueMusic, MdSpeakerGroup } from "react-icons/md";
import { GiSpeaker } from "react-icons/gi";

const VolumnControl = () => {
    const [volumn, setVolumn] = useState(50);
    const handleVolumn = (e) => {
        setVolumn(e.target.value);
    };
    return (
        <div className="flex flex-1 justify-end items-center">
            <div className="text-white text-xl px-2">
                <MdQueueMusic />
            </div>
            <div className="text-white text-xl px-2">
                <MdSpeakerGroup />
            </div>
            <div className="flex justify-between items-center px-3">
                <div className="text-white text-xl">
                    <GiSpeaker />
                </div>
                <div className="flex flex-1 items-center">
                    <label className="hidden" htmlFor="progressPlayback">
                        Change Volumn
                    </label>
                    <input
                        className="max-w-[100px] bg-[#181818]"
                        type="range"
                        min="0"
                        max="100"
                        step="2"
                        onChange={handleVolumn}
                        value={volumn}
                    />
                </div>
            </div>
        </div>
    );
};

export default VolumnControl;
