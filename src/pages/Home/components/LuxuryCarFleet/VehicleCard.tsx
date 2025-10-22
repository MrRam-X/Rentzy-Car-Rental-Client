import React from "react";
import type { Car } from "../../../../types/Cars";
import { generateImageUrl } from "../../../../utils/commonUtils";
import { Link } from "react-router-dom";

type VehicleCardProps = Car & {
  customClassName: string;
};

const VehicleCard: React.FC<VehicleCardProps> = ({
  _id,
  primaryImageUri,
  brand,
  model,
  priceCurrency,
  pricePerDay,
  carType,
  transmission,
  fuel,
  airBags,
  passengers,
  customClassName,
}) => {
  return (
    <div
      className={`car-card group bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${customClassName}`}
    >
      <div className="relative overflow-hidden">
        <img
          src={generateImageUrl(primaryImageUri, carType)}
          alt={`${brand} ${model}`}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            to={`/cars/${_id}`}
            className="bg-yellow-500 text-black text-xs py-3 px-8 rounded-full transform scale-75 group-hover:scale-100 transition-transform duration-300"
          >
            Details
          </Link>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg tracking-tight font-semibold text-brand-dark">
            {`${brand} ${model}`}
          </h3>
          <div className="text-right flex-shrink-0 ml-4">
            <p className="text-lg tracking-tight font-semibold text-brand-gold">
              {`${priceCurrency} ${pricePerDay}`}
            </p>
            <p className="text-sm text-gray-500 -mt-1">/day</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 border-t pt-4">
          <span title="Seats" className="flex items-center text-xs gap-1.5">
            <svg
              className="w-5 h-5 text-brand-gold"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 18.5v-6.5c0-1.103.897-2 2-2h5V5c0-1.103-.897-2-2-2H6C4.346 3 3 4.346 3 6v4.288c-1.724.453-3 2.01-3 3.923v4.289h1c0 .827.673 1.5 1.5 1.5S4 19.327 4 18.5zM15 10h5c1.103 0 2 .897 2 2v6.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5V18h-1v.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5V12c0-1.103.897-2 2-2zM6 5h3v5H6c-1.103 0-2-.897-2-2s.897-3 2-3z"></path>
            </svg>{" "}
            {passengers} seats
          </span>

          <span title="Transmission" className="flex items-center gap-1.5">
            <svg
              className="w-5 h-5 text-brand-gold"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
            </svg>{" "}
            {transmission}
          </span>

          <span title="Fuel Type" className="flex items-center gap-1.5">
            <svg
              className="w-5 h-5 text-brand-gold"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M16 5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5zM5 16.235V8a1 1 0 0 1 1-1h1V5H6a3 3 0 0 0-3 3v8.235a3.5 3.5 0 0 0 1.94 3.111l.245.138A1 1 0 0 0 6 21v-1.13a1 1 0 0 0-.447-.832L5 18.618V17a1 1 0 0 1 1-1h1v-.235a3.5 3.5 0 0 0-2-3.318zM18 7h-1v2h1a1 1 0 1 1 0 2h-1v2h1a1 1 0 1 1 0 2h-1v2h1a3 3 0 0 0 3-3V10a3 3 0 0 0-3-3z"></path>
            </svg>{" "}
            {fuel}
          </span>

          <span title="Airbags" className="flex items-center gap-1.5">
            <svg
              className="w-5 h-5 text-brand-gold"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.5 6h-3.87l-1.1-2.19A1.5 1.5 0 0 0 13.13 3H10.87a1.5 1.5 0 0 0-1.4  .81L8.37 6H4.5A1.5 1.5 0 0 0 3 7.5v12A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 19.5 6zM15 13.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
            </svg>{" "}
            {airBags}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
