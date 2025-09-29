import React from "react";

const CarDetails: React.FC = () => {
  return (
    <main className="font-outfit">
      <section className="relative h-[70vh] min-h-[300px] w-full bg-hero-pattern bg-cover bg-center flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-white px-4">
          <h2 className="text-4xl font-bold">
            RENT<span className="text-brand-gold">ZY</span>
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mt-2">Car Details</h1>
        </div>
      </section>
    </main>
  );
};

export default CarDetails;
