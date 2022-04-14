import React from "react";
import { Link } from "react-router-dom";
import * as IoIcons from "react-icons/io";

const InstallButton = () => {
    return (
        <>
            <div className="relative left-0 bottom-0 bg-black z-10">
                <div className="px-0 py-[8px]">
                    <Link
                        to="/"
                        className="flex flex-row justify-center items-center"
                    >
                        <IoIcons.IoMdDownload className="text-white font-bold mr-2" />
                        <span className="text-white font-bold capitalize">
                            Install App
                        </span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default InstallButton;
