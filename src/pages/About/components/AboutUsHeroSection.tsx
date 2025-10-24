import React from "react";

const AboutUsHeroSection: React.FC = () => {
  return (
    <section className="relative h-[70vh] min-h-[300px] w-full bg-hero-pattern bg-cover bg-center flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative text-white px-4">
        <p className="text-lg tracking-[0.3em] mb-2">
          RENT<span className="text-brand-gold">ZY</span>
        </p>
        <h2 className="text-5xl font-semibold text-brand-gold tracking-tighter">
          About <span className="text-white">Us</span>
        </h2>
      </div>
    </section>
  );
};

export default AboutUsHeroSection;
