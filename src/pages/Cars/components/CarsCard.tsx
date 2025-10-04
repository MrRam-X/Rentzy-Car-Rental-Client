import React from "react";
import { Link } from "react-router-dom";
import type { Car } from "../../../types/Cars";
import { generateImageUrl } from "../../../utils/commonUtils";

type CarsCardProps = Car

const CarsCard: React.FC<CarsCardProps> = ({
  _id,
  primaryImageUri,
  carType,
  brand,
  model,
  doors,
  transmission,
  passengers,
  luggage,
  priceCurrency,
  pricePerDay,
}) => {
  return (
    <div className="group bg-brand-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* <!-- Image Container with Hover Effects --> */}
      <div className="relative overflow-hidden">
        <img
          src={generateImageUrl(primaryImageUri, carType)}
          alt={`${brand} ${model}`}
          className="w-full h-56 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        {/* <!-- Darkening Overlay on Hover --> */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 ease-in-out"></div>
      </div>

      {/* <!-- Content Area --> */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-brand-dark">{`${brand} ${model}`}</h3>

        {/* <!-- Specs List --> */}
        <ul className="mt-4 pt-4 mb-8 border-t border-gray-200 space-y-6 text-md flex-grow">
          <li className="flex justify-between items-center">
            <span className="flex items-center gap-3 text-gray-600">
              {/* <!-- NEW Door SVG --> */}
              <svg
                className="w-5 h-5 text-brand-gold"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.5,2H8.35C7,2,6.13,2.83,5.77,4.03L3.12,12.45C3.04,12.71,3,13,3,13.29V21c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v-1h12v1c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v-7.71c0-0.29-0.04-0.58-0.12-0.84l-2.65-8.42C20.87,2.83,20,2,18.65,2z M8,13c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S8.55,13,8,13z M16,13c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S16.55,13,16,13z M8.17,4l2.25,7.21L11,13h2l0.58-1.79L15.83,4H8.17z" />
              </svg>
              Doors
            </span>
            <span className="text-brand-dark">{doors}</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="flex items-center gap-3 text-gray-600">
              {/* <!-- NEW Passengers SVG --> */}
              <svg
                className="w-5 h-5 text-brand-gold"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              Passengers
            </span>
            <span className="text-brand-dark">{passengers}</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="flex items-center gap-3 text-gray-600">
              <svg
                className="w-5 h-5 text-brand-gold"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
              </svg>
              Transmission
            </span>
            <span className="text-brand-dark">{transmission}</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="flex items-center gap-3 text-gray-600">
              <svg
                className="w-5 h-5 text-brand-gold"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M8 5a1 1 0 100 2h4a1 1 0 100-2H8z" />
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 011-1h12a1 1 0 011 1v1h-2V3a1 1 0 00-1-1H5a1 1 0 00-1 1v1H3V3zM3 7v10a2 2 0 002 2h10a2 2 0 002-2V7H3zm2-1h10v1H5V6z"
                  clipRule="evenodd"
                />
              </svg>
              Luggage
            </span>
            <span className="text-brand-dark">{luggage} Bags</span>
          </li>
        </ul>

        {/* <!-- Price and Button --> */}
        <div className="flex justify-between items-center mt-6">
          <p className="text-2xl font-bold text-brand-gold">
            {`${priceCurrency} ${pricePerDay}.00`}
            <span className="text-sm font-normal text-gray-500">/ day</span>
          </p>
          {/* <!-- Details Button with New Hover Effects --> */}
          <Link
            to={`/cars/${_id}`}
            className="bg-brand-gold text-black py-5 px-12 rounded-full transition-all duration-300 ease-in-out hover:bg-brand-dark hover:text-white hover:-translate-y-1"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarsCard;
