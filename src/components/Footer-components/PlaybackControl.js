import React from "react";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as ImIcons from "react-icons/im";
import * as AiIcons from "react-icons/ai";

const PlaybackControl = () => {
    return (
        <div className="flex flex-col flex-1">
            <div className="flex flex-row justify-between">
                <div className="flex-1 gap-[8px]">
                    <button>
                        <FaIcons.FaRandom />
                    </button>
                    <button>
                        <BiIcons.BiSkipPrevious />
                    </button>
                </div>
                <button>
                    <AiIcons.AiFillPlayCircle />
                </button>
                <div className="flex-1 gap-[8px]">
                    <button>
                        <ImIcons.ImLoop />
                    </button>
                    <button>
                        <BiIcons.BiSkipNext />
                    </button>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default PlaybackControl;
