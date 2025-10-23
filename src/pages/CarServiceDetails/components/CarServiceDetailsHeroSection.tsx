import React from "react";
import type { CarService } from "../../../types/CarService";

type CarServiceDetailsHeroSectionProps = {
  carServiceDetailsData: CarService;
  onModalOpen: () => void;
};

const CarServiceDetailsHeroSection: React.FC<
  CarServiceDetailsHeroSectionProps
> = ({ carServiceDetailsData, onModalOpen }) => {
  return (
    <section className="relative h-[70vh] min-h-[300px] w-full bg-hero-pattern bg-cover bg-center flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative text-center mb-12">
        <p className="text-brand-gold tracking-[0.3em] uppercase text-sm mb-5">
          Services
        </p>
        <h2 className="text-4xl font-bold text-white">
          {/* Airport <span className="text-brand-gold">Drive</span> */}
          {carServiceDetailsData?.serviceTitle}
        </h2>
        {/* Button Group */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* WhatsApp Button */}
          <button className="w-full sm:w-auto flex items-center justify-center gap-3 border-2 border-brand-gold bg-brand-gold text-black py-4 px-8 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300 ease-in-out hover:-translate-y-1">
            {/* WhatsApp SVG Icon */}
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentColor"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.2-97.2-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
            <span>Chat Now</span>
          </button>

          {/* Rent Now Button */}
          <button
            onClick={onModalOpen}
            id="open-booking-modal"
            className="w-full sm:w-auto flex items-center justify-center gap-3 border-2 border-white text-white py-4 px-8 rounded-full transition-all duration-300 ease-in-out hover:bg-brand-gold hover:text-black hover:border-brand-gold hover:-translate-y-1"
          >
            <span>Book Now</span>
            {/* Right Arrow SVG Icon */}
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
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarServiceDetailsHeroSection;
