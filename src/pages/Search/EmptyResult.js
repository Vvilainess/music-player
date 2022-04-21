import React from "react";

const EmptyResult = ({ input }) => {
    return (
        <div className="w-full h-screen top-0 right-0 bottom-0">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-white font-bold font-3xl block">
                    {`No results found for "${input}"`}
                </h1>
                <p className="text-white font-xl block">
                    Please make sure your words are spelled correctly or use
                    less or different keywords.
                </p>
            </div>
        </div>
    );
};

export default EmptyResult;
