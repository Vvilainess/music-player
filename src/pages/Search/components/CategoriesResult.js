import React from "react";
import Title from "../../../components/Body-components/Title";
import CategoryItem from "../../../components/Utils/Category/CategoryItem";
const CategoriesResult = ({ categories }) => {
    return (
        <>
            <div className="w-full pb-3">
                <Title className="capitalize font-bold text-2xl text-white">
                    browser all
                </Title>
            </div>
            <div className="grid grid-flow-row xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xxl:grid-cols-6 gap-5">
                {categories.map((category, idx) => {
                    return <CategoryItem category={category} key={idx} />;
                })}
            </div>
        </>
    );
};

export default CategoriesResult;
