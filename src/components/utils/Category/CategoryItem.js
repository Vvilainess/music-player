import React from "react";

const CategoryItem = ({ category }) => {
    const randomColor =
        "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    return (
        <div
            style={{ backgroundColor: randomColor }}
            className={
                "relative truncate rounded-md shadow-lg shadow-black cursor-pointer after:content-[''] after:pb-[100%] after:block"
            }
        >
            <div>
                <div className="block absolute truncate box-border text-white text-2xl font-bold break-words leading-[1.3em] max-w-full top-0 left-0 p-4">
                    {category.name}
                </div>
                <img
                    src={category.icons?.[0].url}
                    alt={category.name}
                    className="absolute origin-center rotate-[25deg] translate-x-[18%] translate-y-[-2%] w-24 h-24 right-0 bottom-0 m-0"
                />
            </div>
        </div>
    );
};

export default CategoryItem;
