import React from "react";
import Tittle from "../../components/Body-components/Tittle";

const EmptyResult = ({ input }) => {
    return (
        <div className="w-full h-screen top-0 right-0 bottom-0">
            <div className="flex flex-col items-center justify-center">
                <Tittle className="text-white font-bold font-3xl block">
                    {`No results found for "${input}"`}
                </Tittle>
                <p className="text-white font-xl block">
                    Please make sure your words are spelled correctly or use
                    less or different keywords.
                </p>
            </div>
        </div>
    );
};

export default EmptyResult;
