import React from "react";

const ContentSpacing = ({ children, className }) => {
    return (
        <div
            className={
                `lg:px-8 xl:px-8 xxl:px-8xl m-0 max-w-[1955px] ` + className
            }
        >
            {children}
        </div>
    );
};

export default ContentSpacing;
