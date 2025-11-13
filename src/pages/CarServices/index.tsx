import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import useCarServices from "./hooks/useCarServices";

const Services: React.FC = () => {
  const { showSpinner, hideSpinner, updateCarServiceList, carServicesList } =
    useGlobalContext();
  const { carServiceData } = useCarServices(
    showSpinner,
    hideSpinner,
    updateCarServiceList,
    carServicesList
  );

  return (
    <main className="font-outfit" aria-labelledby="service-page">
      {/* Services Hero Section */}
      <section className="relative h-[70vh] min-h-[300px] w-full bg-hero-pattern bg-cover bg-center flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center mb-12">
          <p className="text-brand-gold tracking-[0.3em] uppercase text-sm mb-5">
            What we do
          </p>
          <h2 className="text-4xl font-bold text-white">
            Our <span className="text-brand-gold">Services</span>
          </h2>
        </div>
      </section>

      {/* All Services */}
      <section id="rental-process" className="py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Process Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-8">
            {/* Mapping of the services */}
            {carServiceData.length > 0 &&
              carServiceData.map((service) => {
                return (
                  <Link
                    key={service._id}
                    to={`/services/${service._id}`}
                    className="relative pt-10 cursor-pointer"
                  >
                    <div className="relative bg-gray-100 rounded-3xl p-12 h-full transform hover:-translate-y-2 transition-transform duration-300">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-md">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-brand-dark group-hover:text-brand-gold transition-colors duration-300">
                          <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7 17L17 7M17 12L17 7L12 7"
                            />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-brand-dark mb-4">
                        {service.serviceTitle}
                      </h3>
                      <p className="text-gray-600">
                        {service.serviceDescription}
                      </p>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
