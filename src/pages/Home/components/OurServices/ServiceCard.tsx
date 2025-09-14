import React from "react";
import type { ServiceCardType } from "../../types";

const ServiceCard: React.FC<ServiceCardType> = ({id, imgSrc, title}) => {
  return (
    <div className="w-full lg:w-1/3 flex-shrink-0 px-4">
      <a
        href="#"
        className="service-card group relative block rounded-3xl overflow-hidden shadow-lg"
      >
        <img
          src={imgSrc}
          alt="Corporate Car Rental"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="relative flex items-end h-96 p-6">
          <div className="flex items-center gap-4">
            <div className="number-circle flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-brand-gold text-brand-dark group-hover:bg-brand-dark group-hover:text-brand-gold transition-colors duration-300">
              <span className="font-semibold text-md">{id}</span>
            </div>
            <h3 className="text-white font-bold text-xl">{title}</h3>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ServiceCard;
