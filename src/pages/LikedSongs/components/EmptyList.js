import React from "react";
import { MdMusicNote } from "react-icons/md";
import { Link } from "react-router-dom";

const EmptyList = () => {
    return (
        <section className="relative h-[40vh] mt-0 flex flex-col justify-center items-center gap-4 text-white">
            <MdMusicNote className="text-5xl" />
            <h1 className="text-4xl font-bold mt-5 mb-2">
                Songs you like will appear here
            </h1>
            <span className="text-tiny leading-6 mb-5">
                Save songs by tapping the heart icon
            </span>
            <Link
                to=""
                className="text-black text-base xs:text-tiny sm:text-tiny leading-6 font-bold rounded-full bg-white px-7 py-3 hover:scale-105"
            >
                Find songs
            </Link>
            <div className="absolute top-0 left-0 w-full h-full bg-black -z-20"></div>
        </section>
    );
};

export default EmptyList;
