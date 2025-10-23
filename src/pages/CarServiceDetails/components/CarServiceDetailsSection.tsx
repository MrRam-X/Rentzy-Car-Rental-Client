import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import type { CarService } from "../../../types/CarService";
import { getActiveAccordionClass } from "../../../utils/commonUtils";

type CarServiceDetailsSectionProps = {
  carServiceDetailsData: CarService;
  carServicesList: CarService[];
};

const CarServiceDetailsSection: React.FC<CarServiceDetailsSectionProps> = ({
  carServiceDetailsData,
  carServicesList,
}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-12 lg:gap-x-12">
          {/* LEFT COLUMN: Service Details */}
          <div className="lg:col-span-3">
            <p className="mt-6 text-gray-500 text-lg leading-8 font-light">
              {carServiceDetailsData?.serviceDescription}
            </p>

            {carServiceDetailsData?.serviceDetails?.length > 0 &&
              carServiceDetailsData?.serviceDetails.map((serviceDetails) => {
                return (
                  <Fragment key={serviceDetails.title}>
                    <h2 className="mt-8 text-xl sm:text-2xl font-bold text-brand-dark">
                      {serviceDetails.title}
                    </h2>

                    <p className="mt-6 text-gray-500 text-lg leading-8 font-light">
                      {serviceDetails.description}
                    </p>
                  </Fragment>
                );
              })}

            <ul className="mt-8 space-y-4">
              {carServiceDetailsData?.benefitPoints?.length > 0 &&
                carServiceDetailsData?.benefitPoints.map(
                  (benefitPoint, idx) => {
                    return (
                      <li
                        className="flex items-center gap-4"
                        key={`${idx}-${benefitPoint}`}
                      >
                        <div className="w-10 h-10 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-brand-dark"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">{benefitPoint}</span>
                      </li>
                    );
                  }
                )}
            </ul>
          </div>

          {/* RIGHT COLUMN: All Services Sidebar */}
          <div className="lg:col-span-2">
            <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg">
              {/* TWEAK: Gold price header */}
              <div className="bg-brand-gold p-6 text-center">
                <p className="text-3xl font-bold text-brand-dark">
                  All Services
                </p>
              </div>

              {/* Specs list */}
              <div className="p-8">
                {/* Redesigned List of Links */}
                <ul className="space-y-3">
                  {carServicesList?.length > 0 &&
                    carServicesList.map((service) => {
                      return (
                        <li key={service._id}>
                          <Link
                            to={`/services/${service._id}`}
                            className={`group flex items-center gap-4 p-5 ${getActiveAccordionClass(
                              service._id === carServiceDetailsData._id
                            )} rounded-3xl hover:border-brand-gold transition-all duration-300 hover:bg-brand-gold hover:text-black`}
                          >
                            <svg
                              className="w-5 h-5 text-brand-gold transition-colors duration-300 group-hover:text-black"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7 17L17 7M17 12L17 7L12 7"
                              />
                            </svg>
                            <span className="font-light text-brand-dark transition-colors duration-300 group-hover:text-black">
                              {service.serviceTitle}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarServiceDetailsSection;
