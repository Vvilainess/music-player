import React from "react";

const CategoryItem = ({ category }) => {
    console.log(category);
    return (
        <div
            className={
                "relative truncate rounded-md shadow-lg shadow-black cursor-pointer after:bg-[#181818] after:hover:bg-[#282828] after:content-[''] after:pb-[100%] after:block"
            }
        >
            <div>
                <div className="block absolute truncate box-border text-white text-xl font-bold break-words max-w-full top-0 left-0 p-2">
                    {category.name}
                </div>
                <img
                    src={category.icons?.[0].url}
                    alt=""
                    className="absolute origin-center rotate-[25deg] translate-x-[18%] translate-y-[-2%] w-24 h-24 right-0 bottom-0 m-0"
                />
            </div>
        </div>
    );
};

export default CategoryItem;
