import React from "react";
import CustomLinkButton from "../../../../components/common/Buttons/CustomLinkButton";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full bg-hero-pattern bg-cover bg-center flex items-center">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-white max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-brand-gold font-semibold tracking-widest uppercase mb-4">
            <span className="text-xl">▪</span> Premium
          </p>
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-4">
            Rental Car
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-4 mb-8">
            <p className="text-xl md:text-2xl font-medium">Bentley Bentayga</p>
            <p className="text-xl md:text-2xl font-bold text-brand-gold">
              ₹6500{" "}
              <span className="text-sm font-normal text-white">/ DAY</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* View Details Button */}
            <CustomLinkButton
              borderClassName="border-2 border-brand-gold rounded-full"
              colorClassName="bg-brand-gold text-black"
              paddingClassName="py-4 px-8"
              hoverClassName="hover:bg-white hover:text-black hover:border-white hover:-translate-y-1"
              transitionClassName="transition-all duration-300 ease-in-out"
              linkTitle="View Details"
              iconElementName="RIGHT_ARROW"
            />
            {/* Rent Now Button */}
            <CustomLinkButton
              borderClassName="border-2 border-white rounded-full"
              colorClassName="text-white"
              paddingClassName="py-4 px-8"
              hoverClassName="hover:bg-brand-gold hover:text-black hover:border-brand-gold hover:-translate-y-1"
              transitionClassName="transition-all duration-300 ease-in-out"
              linkTitle="Rent Now"
              iconElementName="TOP_RIGHT_ARROW"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
