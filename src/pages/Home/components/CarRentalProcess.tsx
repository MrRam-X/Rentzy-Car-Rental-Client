import React from "react";
import { CAR_RENTAL_PROCESS_LIST } from "../../../appConstant";

const CarRentalProcess: React.FC = () => {
  return (
    <section id="rental-process" className="pb-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand-gold tracking-[0.2em] uppercase text-sm mb-2">
            STEPS
          </p>
          <h2 className="text-4xl font-bold text-brand-dark">
            Car Rental <span className="text-brand-gold">Process</span>
          </h2>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-8">
          {CAR_RENTAL_PROCESS_LIST.map((rentalProcessItem) => {
            return (
              <div key={rentalProcessItem.id} className="relative pt-10">
                <div className="relative bg-gray-100 rounded-3xl p-12 h-full transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-xl font-bold text-brand-dark">
                      {`${Number(rentalProcessItem.id) % 10 === 0 ? "" : "0"}${
                        rentalProcessItem.id
                      }`}
                      .
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-4">
                    {rentalProcessItem.title}
                  </h3>
                  <p className="text-gray-600">
                    {rentalProcessItem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informational Note */}
        <div className="flex justify-center items-center gap-3 mt-16 text-gray-600">
          <div className="flex-shrink-0 w-6 h-6 bg-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center">
            <span className="font-bold text-sm">i</span>
          </div>
          <p>
            If you've never rented a car before, we'll guide you through the
            process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CarRentalProcess;
