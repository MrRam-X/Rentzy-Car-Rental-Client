import React from "react";
import { generateImageUrl } from "../../../utils/commonUtils";

type CarThumbnailProps = {
  carType: string;
  carImageName: string;
  brand: string;
  model: string;
  currentImageIdxHandler: (imageName: string) => void;
};

const CarThumbnail: React.FC<CarThumbnailProps> = ({
  carType,
  carImageName,
  brand,
  model,
  currentImageIdxHandler,
}) => {
  return (
    <button
      onClick={() => currentImageIdxHandler(carImageName)}
      className="group block rounded-3xl overflow-hidden cursor-pointer focus:outline-none focus:ring-4 focus:ring-brand-gold/50"
    >
      <img
        src={generateImageUrl(carImageName, carType)}
        alt={`${brand} ${model}`}
        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
      ></img>
    </button>
  );
};

export default CarThumbnail;
