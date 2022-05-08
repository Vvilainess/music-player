import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as ImIcons from "react-icons/im";
import * as AiIcons from "react-icons/ai";

const PlaybackControl = () => {
    const [progress, setProgress] = useState(0);
    const handleProgress = (e) => {
        setProgress(e.target.value);
    };
    useEffect(() => {}, []);
    return (
        <div className="flex flex-col flex-1 justify-center">
            <div className="flex flex-row justify-between">
                <div className="flex flex-1 gap-[8px] justify-end">
                    <button>
                        <FaIcons.FaRandom className="text-md text-white" />
                    </button>
                    <button>
                        <BiIcons.BiSkipPrevious className="text-4xl text-white" />
                    </button>
                </div>
                <button className="transition-all duration-150 hover:scale-110">
                    <AiIcons.AiFillPlayCircle className="text-4xl text-white" />
                </button>
                <div className="flex flex-1 justify-start gap-[8px]">
                    <button>
                        <BiIcons.BiSkipNext className="text-4xl text-white" />
                    </button>
                    <button>
                        <ImIcons.ImLoop className="text-md text-white" />
                    </button>
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex items-center mr-3 text-xs text-[#a7a7a7] font-sm">
                    00:06
                </div>
                <div className="flex flex-1 items-center">
                    <label className="hidden" htmlFor="progressPlayback">
                        Change Progress
                    </label>
                    <input
                        className="w-full bg-[#181818]"
                        type="range"
                        min="0"
                        max="100"
                        step="2"
                        onChange={handleProgress}
                        value={progress}
                    />
                </div>
                <div className="flex items-center ml-3 text-xs text-[#a7a7a7]">
                    03:57
                </div>
            </div>
        </div>
    );
};

export default PlaybackControl;
