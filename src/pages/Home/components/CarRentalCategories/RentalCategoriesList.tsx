import React from "react";
import type { RentalCategoryType } from "../../types";
import RentalCategoriesCard from "./RentalCategoriesCard";

type RentalCategoriesListProps = {
  rentalCategoryList: RentalCategoryType[];
};

const RentalCategoriesList: React.FC<RentalCategoriesListProps> = ({
  rentalCategoryList,
}) => {
  return (
    <>
      {rentalCategoryList.map((category) => {
        return <RentalCategoriesCard key={category.title} {...category} />;
      })}
    </>
  );
};

export default RentalCategoriesList;
