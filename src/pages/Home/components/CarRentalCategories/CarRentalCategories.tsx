import React from "react";
import Carousel from "../../../../components/common/Carousel";
import RentalCategoriesList from "./RentalCategoriesList";
import type { Car } from "../../../../types/Cars";

type CarRentalCategoriesProps = {
  categoriesList: Car[];
};

const CarRentalCategories: React.FC<CarRentalCategoriesProps> = ({
  categoriesList,
}) => {
  return (
    <section id="car-types-section" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-brand-gold font-semibold tracking-[0.2em] uppercase text-sm mb-2">
            CATEGORIES
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark">
            Rental <span className="text-brand-gold">Car Types</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <Carousel list={categoriesList}>
          <RentalCategoriesList rentalCategoryList={categoriesList} />
        </Carousel>
      </div>
    </section>
  );
};

export default CarRentalCategories;
