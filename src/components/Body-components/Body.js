import React from "react";

const Body = ({ children }) => {
    return (
        <div className="flex-1 max-h-screen overflow-y-scroll">{children}</div>
    );
};

export default Body;
