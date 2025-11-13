import React from "react";
import { generateImageUrl } from "../../../utils/commonUtils";

type CarDetailsHeroSectionProps = {
  brand: string;
  model: string;
  carType: string;
  primaryImageUri: string;
};

const CarDetailsHeroSection: React.FC<CarDetailsHeroSectionProps> = ({
  carType,
  brand,
  model,
  primaryImageUri,
}) => {
  return (
    <section
      className="relative h-[70vh] min-h-[300px] w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${generateImageUrl(primaryImageUri, carType)})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white max-w-6xl space-y-4">
        <p className="text-lg text-brand-gold tracking-[0.3em] uppercase mb-2">
          {carType} Cars
        </p>
        <h2 className="text-5xl font-semibold tracking-tighter">
          {brand} {model}
        </h2>
      </div>
    </section>
  );
};

export default CarDetailsHeroSection;
