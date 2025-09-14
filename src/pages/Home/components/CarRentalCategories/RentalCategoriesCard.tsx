import React from "react";
import type { RentalCategoryType } from "../../types";

const RentalCategoriesCard: React.FC<RentalCategoryType> = ({imageSrc, title}) => {
  return (
    <div className="slide flex-shrink-0 w-full lg:w-1/3 px-4">
      <a
        href="#"
        className="group relative block rounded-3xl overflow-hidden shadow-lg h-96"
      >
        <img
          src={`${imageSrc}`}
          alt={`${title}`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative h-full flex flex-col justify-between p-6">
          <h3 className="text-center text-white text-2xl font-bold">
            {title}
          </h3>
          <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center group-hover:bg-brand-dark group-hover:text-brand-gold transition-colors duration-300">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M17 12L17 7L12 7"
              />
            </svg>
          </div>
        </div>{" "}
      </a>
    </div>
  );
};

export default RentalCategoriesCard;
