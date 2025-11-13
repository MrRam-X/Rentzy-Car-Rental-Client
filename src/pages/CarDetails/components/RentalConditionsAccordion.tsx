import React from "react";
import useAccordion from "../../../hooks/useAccordion";

type RentalConditionAccordionProps = {
  rentalConditions: {
    title: string;
    description: string;
  }[];
};

const RentalConditionsAccordion: React.FC<RentalConditionAccordionProps> = ({
  rentalConditions,
}) => {
  const { isOpen, toggle, contentRefs, heights } = useAccordion();

  return (
    <section id="rental-conditions" className="py-10 mb-10">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-8">
          Rental Conditions
        </h2>
        <div id="accordion-container" className="space-y-4">
          {rentalConditions.map((item, idx) => {
            const open = isOpen(idx);

            return (
              <div key={`${idx}-${item.title}`} className="accordion-item">
                {/* Header */}
                <button
                  onClick={() => toggle(idx)}
                  className={`accordion-header flex justify-between items-center w-full p-6 rounded-t-2xl text-left transition-colors duration-300
                ${open ? "bg-brand-gold text-black" : "bg-gray-100"}`}
                >
                  <span className="font-bold text-lg">
                    <span
                      className={`mr-2 ${
                        open ? "text-black/50" : "text-brand-gold"
                      }`}
                    >
                      {idx + 1}.
                    </span>
                    {item.title}
                  </span>

                  <svg
                    className={`accordion-icon w-6 h-6 transform transition-transform duration-300 ${
                      open
                        ? "rotate-0 text-black"
                        : "-rotate-90 text-brand-gold"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Content */}
                <div
                  ref={(el) => {
                    contentRefs.current[idx] = el;
                  }}
                  style={{ maxHeight: heights[idx] }}
                  className="accordion-content overflow-hidden max-h-0 transition-[max-height] duration-500 ease-in-out"
                >
                  <div className="bg-gray-100 rounded-b-2xl p-6 -mt-2 text-gray-600 leading-relaxed">
                    {item.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RentalConditionsAccordion;
