import React from "react";
import * as IoIcons from "react-icons/io";

const HeaderButton = () => {
    return (
        <div className="absolute flex items-center justify-between w-16 ml-3">
            <div
                className="rounded-full bg-black p-1 cursor-pointer mr-3"
                onClick={() => {}}
            >
                <IoIcons.IoIosArrowBack className="text-white font-bold text-2xl" />
            </div>
            <div className="rounded-full bg-black p-1 cursor-pointer">
                <IoIcons.IoIosArrowForward className="text-white font-bold text-2xl" />
            </div>
        </div>
    );
};

export default HeaderButton;
