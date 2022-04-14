import React from "react";

const Spacer = () => {
    return (
        <>
            <div className="relative w-[80%] h-[1px] bg-[#7c7c7c] mx-5 shadow-lg shadow-black">
                <div className="absolute h-[16px] bottom-[-16px] left-0 right-0 bg-gradient-to-t from-[rgba(0,0,0,.7)] to-[transparient] z-10"></div>
            </div>
        </>
    );
};

export default Spacer;
