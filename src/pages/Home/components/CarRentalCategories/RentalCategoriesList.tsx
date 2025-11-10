import React from "react";
import type { Car } from "../../../../types/Cars";
import RentalCategoriesCard from "./RentalCategoriesCard";

type RentalCategoriesListProps = {
  rentalCategoryList: Car[];
};

const RentalCategoriesList: React.FC<RentalCategoriesListProps> = ({
  rentalCategoryList,
}) => {
  return (
    <>
      {rentalCategoryList.map((category) => {
        return <RentalCategoriesCard key={category._id} {...category} />;
      })}
    </>
  );
};

export default RentalCategoriesList;
