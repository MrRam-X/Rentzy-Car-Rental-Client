import React from "react";
import Carousel from '../../../../components/common/Carousel'
import RentalCategoriesList from "./RentalCategoriesList";

const rentalCategoriesList = [
  {
    title: "Luxury Cars",
    imageSrc:
      "https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Sport Cars",
    imageSrc:
      "https://images.pexels.com/photos/17096537/pexels-photo-17096537/free-photo-of-bugatti-mistral-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "SUV",
    imageSrc:
      "https://images.pexels.com/photos/15942431/pexels-photo-15942431/free-photo-of-a-silver-bentley-parked-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Sedans",
    imageSrc:
      "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Convertibles",
    imageSrc:
      "https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Electric",
    imageSrc:
      "https://images.pexels.com/photos/9735310/pexels-photo-9735310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const CarRentalCategories: React.FC = () => {
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
        <Carousel list={rentalCategoriesList}>
          <RentalCategoriesList rentalCategoryList={rentalCategoriesList}/>
        </Carousel>
      </div>
    </section>
  );
};

export default CarRentalCategories;
