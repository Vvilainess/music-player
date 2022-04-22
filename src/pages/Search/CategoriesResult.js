import React from "react";
import CategoryItem from "../../components/Utils/Category/CategoryItem";

const CategoriesResult = ({ categories }) => {
    return (
        <>
            <div className="w-full pb-3">
                <h1 className="capitalize font-bold text-2xl text-white">
                    browser all
                </h1>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 sm:gap-5 md:gap-4 lg:gap-5">
                {categories.map((category, idx) => {
                    return <CategoryItem category={category} key={idx} />;
                })}
            </div>
        </>
    );
};

export default CategoriesResult;
