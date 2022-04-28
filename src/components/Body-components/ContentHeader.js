import React from "react";

const ContentHeader = ({ children }) => {
    return (
        <div className="flex justify-between items-center h-[64px] px-8">
            {children}
        </div>
    );
};

export default ContentHeader;
