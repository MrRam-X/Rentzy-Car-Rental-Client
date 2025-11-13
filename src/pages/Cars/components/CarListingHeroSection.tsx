import React from "react";

const CarListingHeroSection: React.FC = () => {
  return (
    <section className="relative h-[70vh] min-h-[300px] w-full bg-hero-pattern bg-cover bg-center flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white">
        <p className="text-lg text-brand-gold tracking-[0.3em] uppercase mb-2">
          Rent Now
        </p>
        <h2 className="text-5xl font-semibold text-brand-gold tracking-tighter">
          Select <span className="text-white">Your Car</span>
        </h2>
      </div>
    </section>
  );
};

export default CarListingHeroSection;
