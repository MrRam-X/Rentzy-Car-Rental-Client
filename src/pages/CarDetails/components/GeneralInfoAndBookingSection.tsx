import React from "react";

type GeneralInfoAndBookingSectionProps = {
  generalInformation: string;
  benefitPoints: string[];
  pricePerDay: number;
  priceCurrency: string;
  doors: number;
  passengers: number;
  transmission: string;
  luggage: number;
  airCondition: boolean;
  minAgeForDrive: number;
};

const GeneralInfoAndBookingSection: React.FC<
  GeneralInfoAndBookingSectionProps
> = ({
  generalInformation,
  benefitPoints,
  priceCurrency,
  pricePerDay,
  airCondition,
  doors,
  luggage,
  minAgeForDrive,
  passengers,
  transmission,
}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-12 lg:gap-x-12">
          {/* Left Column: General Information             */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark">
              General Information
            </h2>

            <p className="mt-6 text-gray-500 text-lg leading-8 font-light">
              {generalInformation}
            </p>

            <ul className="mt-8 space-y-4">
              {/* <li className="flex items-center gap-4">
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
                <span className="text-gray-700">24/7 Roadside Assistance</span>
              </li>
              <li className="flex items-center gap-4">
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
                <span className="text-gray-700">
                  Free Cancellation & Return
                </span>
              </li> */}
              {benefitPoints.map((item, idx) => {
                return (
                  <li
                    key={`${idx}-${item}`}
                    className="flex items-center gap-4"
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
                    <span className="text-gray-700">{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Column: Specifications & Booking Sidebar         */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-28">
              <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg">
                <div className="bg-brand-gold p-6 text-center">
                  <p className="text-3xl font-bold text-brand-dark">
                    {priceCurrency} {pricePerDay}.00{" "}
                    <span className="text-xl font-medium">/ Day</span>
                  </p>
                </div>

                {/* Specs list */}
                <div className="p-8">
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center text-gray-700 text-lg font-light">
                      <span className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-brand-gold"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M19.5,2H8.35C7,2,6.13,2.83,5.77,4.03L3.12,12.45C3.04,12.71,3,13,3,13.29V21c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v-1h12v1c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v-7.71c0-0.29-0.04-0.58-0.12-0.84l-2.65-8.42C20.87,2.83,20,2,18.65,2z M8,13c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S8.55,13,8,13z M16,13c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S16.55,13,16,13z M8.17,4l2.25,7.21L11,13h2l0.58-1.79L15.83,4H8.17z" />
                          </svg>
                        </div>
                        Doors
                      </span>
                      <span>{doors}</span>
                    </li>
                    <li className="flex justify-between items-center text-gray-700 text-lg font-light">
                      <span className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-brand-gold"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                          </svg>
                        </div>
                        Passengers
                      </span>
                      <span>{passengers}</span>
                    </li>
                    <li className="flex justify-between items-center text-gray-700 text-lg font-light">
                      <span className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-brand-gold"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2a1 1 0 0 1 1 1v5.586l1.707-1.707a1 1 0 1 1 1.414 1.414l-3.586 3.586a1.5 1.5 0 0 1-2.121 0L6.83 8.293a1 1 0 1 1 1.414-1.414L10 8.586V3a1 1 0 0 1 1-1h1zm-1 12.5a1 1 0 0 0-1-1H7.5a1 1 0 1 0 0 2H10a1 1 0 0 0 1-1zm5.5 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zM11 18a1 1 0 0 0-1-1H7.5a1 1 0 1 0 0 2H10a1 1 0 0 0 1-1zm5.5 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
                          </svg>
                        </div>
                        Transmission
                      </span>
                      <span>{transmission}</span>
                    </li>
                    <li className="flex justify-between items-center text-gray-700 text-lg font-light">
                      <span className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-brand-gold"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M19.5 6h-3.87l-1.1-2.19A1.5 1.5 0 0 0 13.13 3H10.87a1.5 1.5 0 0 0-1.4 .81L8.37 6H4.5A1.5 1.5 0 0 0 3 7.5v12A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 19.5 6zM15 13.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                          </svg>
                        </div>
                        Luggage
                      </span>
                      <span>{luggage} Bags</span>
                    </li>
                    <li className="flex justify-between items-center text-gray-700 text-lg font-light">
                      <span className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-brand-gold"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 12h14M12 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        Air Condition
                      </span>
                      <span>{airCondition ? "Yes": "No"}</span>
                    </li>
                    <li className="flex justify-between items-center text-gray-700 text-lg font-light">
                      <span className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-brand-gold"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        Age
                      </span>
                      <span>{minAgeForDrive}</span>
                    </li>
                  </ul>

                  {/* Split Button */}
                  <div className="mt-8">
                    <div className="flex items-center text-lg">
                      <a
                        href="#"
                        className="bg-brand-gold w-2/5 text-center text-black py-4 rounded-l-full hover:bg-brand-dark hover:text-white transition-colors"
                      >
                        Rent Now
                      </a>
                      <div className="w-1 h-6"></div>
                      <a
                        href="#"
                        className="bg-brand-gold w-3/5 text-center text-black py-4 rounded-r-full hover:bg-brand-dark hover:text-white transition-colors flex items-center justify-center gap-2"
                      >
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          fill="currentColor"
                        >
                          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.2-97.2-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralInfoAndBookingSection;
