import React from 'react'
import bgBookAutoRental from "../../../assets/images/HeroSection.jpg"

const BookAutoRental: React.FC = () => {
  return (
      <section
        className="w-full h-auto bg-fixed bg-cover bg-center relative sm:h-[500px] py-24 flex flex-col justify-center items-center text-center"
        style={{backgroundImage: `url(${bgBookAutoRental})`}}
      >
        {/* <!-- Overlay --> */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative z-10 w-full px-4">
          {/* <!-- Title --> */}
          <p className="text-brand-gold tracking-[0.3em] uppercase text-sm mb-2">
            Rent Now
          </p>
          <h1 className="text-white text-4xl font-bold mb-8">Book Auto Rental</h1>
          <div
            className="bg-white rounded-2xl lg:rounded-full shadow-lg flex flex-col lg:flex-row items-center p-2 max-w-6xl mx-auto"
          >
            <div
              className="w-full flex flex-wrap lg:flex-nowrap items-center text-xs"
            >
              {/* <!-- Car Type --> */}
              <div className="w-full md:w-1/2 lg:flex-1 p-2">
                <div className="relative w-full">
                  <select
                    className="w-full bg-transparent outline-none py-3 pl-4 pr-10 appearance-none lg:border-r border-gray-200"
                  >
                    <option>Choose Car Type</option>
                    <option>SUV</option>
                    <option>Sedan</option>
                    <option>Hatchback</option>
                  </select>
                  <div
                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4"
                  >
                    <svg
                      className="fill-current h-4 w-4 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* <!-- Pick Up Location --> */}
              <div className="w-full md:w-1/2 lg:flex-1 p-2">
                <div className="relative w-full">
                  <select
                    className="w-full bg-transparent outline-none py-3 pl-4 pr-10 appearance-none lg:border-r border-gray-200"
                  >
                    <option>Pick Up Location</option>
                    <option>Airport</option>
                    <option>City Center</option>
                    <option>Hotel</option>
                  </select>
                  <div
                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4"
                  >
                    <svg
                      className="fill-current h-4 w-4 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* <!-- Pick Up Date --> */}
              <div className="w-full md:w-1/2 lg:flex-1 p-2">
                <div className="relative w-full">
                  <input
                    type="text"
                    className="w-full bg-transparent outline-none py-3 pl-4 pr-10 lg:border-r border-gray-200"
                    placeholder="Pick Up Date"
                  />
                  <div
                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4"
                  >
                    <svg
                      className="h-5 w-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* <!-- Drop Off Location --> */}
              <div className="w-full md:w-1/2 lg:flex-1 p-2">
                <div className="relative w-full">
                  <select
                    className="w-full bg-transparent outline-none py-3 pl-4 pr-10 appearance-none lg:border-r border-gray-200"
                  >
                    <option>Drop Off Location</option>
                    <option>Airport</option>
                    <option>City Center</option>
                    <option>Hotel</option>
                  </select>
                  <div
                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4"
                  >
                    <svg
                      className="fill-current h-4 w-4 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* <!-- Return Date --> */}
              <div className="w-full md:w-1/2 lg:flex-1 p-2">
                <div className="relative w-full">
                  <input
                    type="text"
                    className="w-full bg-transparent outline-none py-3 pl-4 pr-10 lg:border-r border-gray-200"
                    placeholder="Drop Off Date"
                  />
                  <div
                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4"
                  >
                    <svg
                      className="h-5 w-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Button --> */}
            <div className="w-full lg:w-auto p-2 text-xs">
              <button
                className="w-full lg:w-[150px] lg:p-[24px] bg-brand-gold text-black px-10 py-4 rounded-full hover:bg-black hover:text-brand-gold transition-colors duration-500"
              >
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default BookAutoRental