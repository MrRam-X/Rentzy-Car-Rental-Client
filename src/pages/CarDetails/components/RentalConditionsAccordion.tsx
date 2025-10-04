import React from "react";

const RentalConditionsAccordion: React.FC = () => {
  return (
    <section id="rental-conditions" className="py-10 mb-10">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-8">
          Rental Conditions
        </h2>

        <div id="accordion-container" className="space-y-4">
          {/* Accordion Item 1 (Active by default) */}
          <div className="accordion-item">
            <button className="accordion-header flex justify-between items-center w-full p-6 rounded-t-2xl text-left bg-gray-100 transition-colors duration-300">
              <span className="font-bold text-lg">
                <span className="text-brand-gold mr-2">1.</span> Contract and
                Annexes
              </span>
              <svg
                className="accordion-icon w-6 h-6 transform -rotate-90 text-brand-gold transition-transform duration-300"
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
            <div className="accordion-content overflow-hidden max-h-0 transition-max-height duration-500 ease-in-out">
              <div className="bg-gray-100 rounded-b-2xl p-6 -mt-2 text-gray-600 leading-relaxed">
                In addition to the car rental contract to be signed at the time
                of delivery, a credit card is required from our individual
                customers. We request our commercial customers to submit their
                company documents (tax plate, signature slip, ID photocopy).
              </div>
            </div>
          </div>

          {/* Accordion Item 2 */}
          <div className="accordion-item">
            <button className="accordion-header flex justify-between items-center w-full p-6 rounded-t-2xl text-left bg-gray-100 transition-colors duration-300">
              <span className="font-bold text-lg text-brand-dark">
                <span className="text-brand-gold mr-2">2.</span> Driving License
                and Age
              </span>
              <svg
                className="accordion-icon w-6 h-6 transform -rotate-90 text-brand-gold transition-transform duration-300"
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
            <div className="accordion-content overflow-hidden max-h-0 transition-max-height duration-500 ease-in-out">
              <div className="bg-gray-100 rounded-b-2xl p-6 -mt-2 text-gray-600 leading-relaxed">
                Information about driving license and age requirements goes
                here. All drivers must have a valid license held for at least
                one year. Minimum age is typically 25.
              </div>
            </div>
          </div>

          {/* Accordion Item 3 */}
          <div className="accordion-item">
            <button className="accordion-header flex justify-between items-center w-full p-6 rounded-t-2xl text-left bg-gray-100 transition-colors duration-300">
              <span className="font-bold text-lg text-brand-dark">
                <span className="text-brand-gold mr-2">3.</span> Prices
              </span>
              <svg
                className="accordion-icon w-6 h-6 transform -rotate-90 text-brand-gold transition-transform duration-300"
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
            <div className="accordion-content overflow-hidden max-h-0 transition-max-height duration-500 ease-in-out">
              <div className="bg-gray-100 rounded-b-2xl p-6 -mt-2 text-gray-600 leading-relaxed">
                Details about pricing, what is included (e.g., insurance,
                mileage), and what is not included (e.g., fuel, tolls) will be
                listed here.
              </div>
            </div>
          </div>

          {/* Accordion Item 4 */}
          <div className="accordion-item">
            <button className="accordion-header flex justify-between items-center w-full p-6 rounded-t-2xl text-left bg-gray-100 transition-colors duration-300">
              <span className="font-bold text-lg text-brand-dark">
                <span className="text-brand-gold mr-2">4.</span> Payments
              </span>
              <svg
                className="accordion-icon w-6 h-6 transform -rotate-90 text-brand-gold transition-transform duration-300"
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
            <div className="accordion-content overflow-hidden max-h-0 transition-max-height duration-500 ease-in-out">
              <div className="bg-gray-100 rounded-b-2xl p-6 -mt-2 text-gray-600 leading-relaxed">
                Details about pricing, what is included (e.g., insurance,
                mileage), and what is not included (e.g., fuel, tolls) will be
                listed here.
              </div>
            </div>
          </div>

          {/* Accordion Item 5 */}
          <div className="accordion-item">
            <button className="accordion-header flex justify-between items-center w-full p-6 rounded-t-2xl text-left bg-gray-100 transition-colors duration-300">
              <span className="font-bold text-lg text-brand-dark">
                <span className="text-brand-gold mr-2">5.</span> Delivery
              </span>
              <svg
                className="accordion-icon w-6 h-6 transform -rotate-90 text-brand-gold transition-transform duration-300"
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
            <div className="accordion-content overflow-hidden max-h-0 transition-max-height duration-500 ease-in-out">
              <div className="bg-gray-100 rounded-b-2xl p-6 -mt-2 text-gray-600 leading-relaxed">
                Details about pricing, what is included (e.g., insurance,
                mileage), and what is not included (e.g., fuel, tolls) will be
                listed here.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentalConditionsAccordion;
