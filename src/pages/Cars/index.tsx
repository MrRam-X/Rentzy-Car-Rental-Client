import React from "react";

const Cars: React.FC = () => {
  return (
    <main className="font-outfit">
      <section className="relative h-[70vh] min-h-[300px] w-full bg-hero-pattern bg-cover bg-center flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white">
          <p className="text-brand-gold tracking-[0.3em] uppercase text-sm mb-2">
            Rent Now
          </p>
          <h2 className="text-5xl font-semibold text-brand-gold tracking-tighter">
            Select <span className="text-white">Your Car</span>
          </h2>
        </div>
      </section>
      {/* MAIN CONTENT: FILTERS & CAR GRID */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-8xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
          {/* FILTERS: Sidebar for Desktop, Drawer for Mobile/Tablet */}
          <aside
            id="filter-sidebar"
            className="fixed top-0 left-0 h-full w-80 bg-white shadow-2xl transform -translate-x-full transition-transform duration-300 ease-in-out z-[90] lg:static lg:w-auto lg:bg-transparent lg:shadow-none lg:transform-none lg:col-span-1"
          >
            <div className="h-full flex flex-col">
              {/* Drawer Header (Mobile) */}
              <div className="lg:hidden flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-bold">Filters</h2>
                <button id="close-filter-drawer" className="p-2">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Main Filter Content */}
              <div className="flex-grow overflow-y-auto">
                <div className="shadow-lg rounded-2xl lg:shadow-none">
                  <div className="bg-brand-gold rounded-t-2xl p-6">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full bg-white rounded-full py-5 pl-6 pr-16 text-lg text-brand-dark placeholder-gray-500 focus:outline-none"
                      />
                      <button className="absolute top-1/2 right-2 -translate-y-1/2 w-14 h-14 bg-brand-dark text-white rounded-full flex items-center justify-center hover:bg-black transition-colors">
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="bg-brand-card rounded-b-2xl p-6 space-y-8">
                    {/* Price Range */}
                    <div>
                      <h3 className="text-xl font-bold text-brand-dark mb-4">
                        Per Day Rate
                      </h3>
                      <div className="flex items-center gap-4">
                        <input
                          type="number"
                          placeholder="Min"
                          className="w-full bg-white rounded-lg p-2 text-center focus:outline-none focus:ring-1 focus:ring-brand-gold"
                        />
                        <span className="text-gray-400">-</span>
                        <input
                          type="number"
                          placeholder="Max"
                          className="w-full bg-white rounded-lg p-2 text-center focus:outline-none focus:ring-1 focus:ring-brand-gold"
                        />
                      </div>
                    </div>
                    {/* Select Brand */}
                    <div>
                      <h3 className="text-lg font-bold text-brand-dark mb-4">
                        Select Brand
                      </h3>
                      <div className="space-y-4">
                        <label className="custom-radio flex items-center gap-3 text-gray-700 cursor-pointer">
                          <input
                            type="radio"
                            name="brand"
                            className="sr-only"
                          />
                          <span className="custom-radio-button"></span>
                          Lamborghini
                        </label>
                        <label className="custom-radio flex items-center gap-3 text-gray-700 cursor-pointer">
                          <input
                            type="radio"
                            name="brand"
                            className="sr-only"
                          />
                          <span className="custom-radio-button"></span> Aston
                          Martin
                        </label>
                      </div>
                    </div>
                    {/* Car Type */}
                    <div>
                      <h3 className="text-lg font-bold text-brand-dark mb-4">
                        Car Type
                      </h3>
                      <div className="space-y-4">
                        <label className="custom-checkbox flex items-center gap-3 text-gray-700 cursor-pointer">
                          <input type="checkbox" className="sr-only" />
                          <span className="custom-checkbox-button"></span>
                          Luxury Cars
                        </label>
                        <label className="custom-checkbox flex items-center gap-3 text-gray-700 cursor-pointer">
                          <input type="checkbox" className="sr-only" />
                          <span className="custom-checkbox-button"></span>
                          SUVs
                        </label>
                      </div>
                    </div>
                    {/* Transmission */}
                    <div>
                      <h3 className="text-lg font-bold text-brand-dark mb-4">
                        Transmission
                      </h3>
                      <div className="space-y-4">
                        <label className="custom-checkbox flex items-center gap-3 text-gray-700 cursor-pointer">
                          <input type="checkbox" className="sr-only" />
                          <span className="custom-checkbox-button"></span>
                          Automatic
                        </label>
                        <label className="custom-checkbox flex items-center gap-3 text-gray-700 cursor-pointer">
                          <input type="checkbox" className="sr-only" />
                          <span className="custom-checkbox-button"></span>
                          Manual
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          {/* RIGHT COLUMN: RESULTS & CAR GRID */}
          <div className="lg:col-span-2">
            {/* Top Results Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <p className="text-lg text-brand-dark">Showing 1-6 of 24 Cars</p>
              {/* Filter Tags (Desktop) */}
              <div className="hidden md:flex items-center gap-2 flex-wrap">
                <span className="bg-brand-gold text-sm rounded-full py-3 px-5">
                  Brand: Lamborghini
                  <button className="ml-1 font-bold">x</button>
                </span>
                <span className="bg-brand-gold text-sm rounded-full py-3 px-5">
                  Type: SUV <button className="ml-1 font-bold">x</button>
                </span>
                <a href="#" className="text-sm hover:underline">
                  Clear All
                </a>
              </div>
              {/* Filter Drawer Button (Mobile/Tablet) */}
              <button
                id="open-filter-drawer"
                className="lg:hidden w-full md:w-auto bg-brand-dark text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L16 11.414V16a1 1 0 01-.293.707l-2 2A1 1 0 0113 18v-1.586l-3.707-3.707A1 1 0 019 12V6.414L3.293 6.707A1 1 0 013 6V4z"
                  />
                </svg>
                Filters
              </button>
            </div>

            {/* Cars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Car Card 1 */}
              <div className="group bg-brand-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
                {/* Image Container with Hover Effects */}
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Aston Martin DBX"
                    className="w-full h-56 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  {/* Darkening Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 ease-in-out"></div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-brand-dark">
                    Aston Martin DBX
                  </h3>

                  {/* Specs List */}
                  <ul className="mt-4 pt-4 mb-8 border-t border-gray-200 space-y-6 text-md flex-grow">
                    <li className="flex justify-between items-center">
                      <span className="flex items-center gap-3 text-gray-600">
                        {/* NEW Door SVG */}
                        <svg
                          className="w-5 h-5 text-brand-gold"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M19.5,2H8.35C7,2,6.13,2.83,5.77,4.03L3.12,12.45C3.04,12.71,3,13,3,13.29V21c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v-1h12v1c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v-7.71c0-0.29-0.04-0.58-0.12-0.84l-2.65-8.42C20.87,2.83,20,2,18.65,2z M8,13c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S8.55,13,8,13z M16,13c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S16.55,13,16,13z M8.17,4l2.25,7.21L11,13h2l0.58-1.79L15.83,4H8.17z" />
                        </svg>
                        Doors
                      </span>
                      <span className="text-brand-dark">4</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="flex items-center gap-3 text-gray-600">
                        {/* NEW Passengers SVG */}
                        <svg
                          className="w-5 h-5 text-brand-gold"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        Passengers
                      </span>
                      <span className="text-brand-dark">5</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="flex items-center gap-3 text-gray-600">
                        <svg
                          className="w-5 h-5 text-brand-gold"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                        </svg>
                        Transmission
                      </span>
                      <span className="text-brand-dark">Auto</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="flex items-center gap-3 text-gray-600">
                        <svg
                          className="w-5 h-5 text-brand-gold"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M8 5a1 1 0 100 2h4a1 1 0 100-2H8z" />
                          <path
                            fill-rule="evenodd"
                            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v1h-2V3a1 1 0 00-1-1H5a1 1 0 00-1 1v1H3V3zM3 7v10a2 2 0 002 2h10a2 2 0 002-2V7H3zm2-1h10v1H5V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Luggage
                      </span>
                      <span className="text-brand-dark">2 Bags</span>
                    </li>
                  </ul>

                  {/* Price and Button */}
                  <div className="flex justify-between items-center mt-6">
                    <p className="text-2xl font-bold text-brand-gold">
                      $750
                      <span className="text-sm font-normal text-gray-500">
                        / day
                      </span>
                    </p>
                    {/* Details Button with New Hover Effects */}
                    <a
                      href="car-details.html"
                      className="bg-brand-gold text-black py-5 px-12 rounded-full transition-all duration-300 ease-in-out hover:bg-brand-dark hover:text-white hover:-translate-y-1"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
              {/* Car Card 2 */}
              <div className="group bg-brand-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
                {/* Image Container with Hover Effects */}
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Aston Martin DBX"
                    className="w-full h-56 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  {/* Darkening Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 ease-in-out"></div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-brand-dark">
                    Aston Martin DBX
                  </h3>

                  {/* Specs List */}
                  <ul className="mt-4 pt-4 mb-8 border-t border-gray-200 space-y-6 text-md flex-grow">
                    <li className="flex justify-between items-center">
                      <span className="flex items-center gap-3 text-gray-600">
                        {/* NEW Door SVG */}
                        <svg
                          className="w-5 h-5 text-brand-gold"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M19.5,2H8.35C7,2,6.13,2.83,5.77,4.03L3.12,12.45C3.04,12.71,3,13,3,13.29V21c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v-1h12v1c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v-7.71c0-0.29-0.04-0.58-0.12-0.84l-2.65-8.42C20.87,2.83,20,2,18.65,2z M8,13c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S8.55,13,8,13z M16,13c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S16.55,13,16,13z M8.17,4l2.25,7.21L11,13h2l0.58-1.79L15.83,4H8.17z" />
                        </svg>
                        Doors
                      </span>
                      <span className="text-brand-dark">4</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="flex items-center gap-3 text-gray-600">
                        {/* NEW Passengers SVG */}
                        <svg
                          className="w-5 h-5 text-brand-gold"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        Passengers
                      </span>
                      <span className="text-brand-dark">5</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="flex items-center gap-3 text-gray-600">
                        <svg
                          className="w-5 h-5 text-brand-gold"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                        </svg>
                        Transmission
                      </span>
                      <span className="text-brand-dark">Auto</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="flex items-center gap-3 text-gray-600">
                        <svg
                          className="w-5 h-5 text-brand-gold"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M8 5a1 1 0 100 2h4a1 1 0 100-2H8z" />
                          <path
                            fill-rule="evenodd"
                            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v1h-2V3a1 1 0 00-1-1H5a1 1 0 00-1 1v1H3V3zM3 7v10a2 2 0 002 2h10a2 2 0 002-2V7H3zm2-1h10v1H5V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Luggage
                      </span>
                      <span className="text-brand-dark">2 Bags</span>
                    </li>
                  </ul>

                  {/* Price and Button */}
                  <div className="flex justify-between items-center mt-6">
                    <p className="text-2xl font-bold text-brand-gold">
                      $750
                      <span className="text-sm font-normal text-gray-500">
                        / day
                      </span>
                    </p>
                    {/* Details Button with New Hover Effects */}
                    <a
                      href="car-details.html"
                      className="bg-brand-gold text-black py-5 px-12 rounded-full transition-all duration-300 ease-in-out hover:bg-brand-dark hover:text-white hover:-translate-y-1"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
              {/* Car Card 3 */}
              <div className="group bg-brand-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
                {/* Image Container with Hover Effects */}
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Aston Martin DBX"
                    className="w-full h-56 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  {/* Darkening Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 ease-in-out"></div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-brand-dark">
                    Aston Martin DBX
                  </h3>

                  {/* Specs List */}
                  <ul className="mt-4 pt-4 mb-8 border-t border-gray-200 space-y-6 text-md flex-grow">
                    <li className="flex justify-between items-center">
                      <span className="flex items-center gap-3 text-gray-600">
                        {/* NEW Door SVG */}
                        <svg
                          className="w-5 h-5 text-brand-gold"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M19.5,2H8.35C7,2,6.13,2.83,5.77,4.03L3.12,12.45C3.04,12.71,3,13,3,13.29V21c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v-1h12v1c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v-7.71c0-0.29-0.04-0.58-0.12-0.84l-2.65-8.42C20.87,2.83,20,2,18.65,2z M8,13c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S8.55,13,8,13z M16,13c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S16.55,13,16,13z M8.17,4l2.25,7.21L11,13h2l0.58-1.79L15.83,4H8.17z" />
                        </svg>
                        Doors
                      </span>
                      <span className="text-brand-dark">4</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="flex items-center gap-3 text-gray-600">
                        {/* NEW Passengers SVG */}
                        <svg
                          className="w-5 h-5 text-brand-gold"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        Passengers
                      </span>
                      <span className="text-brand-dark">5</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="flex items-center gap-3 text-gray-600">
                        <svg
                          className="w-5 h-5 text-brand-gold"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                        </svg>
                        Transmission
                      </span>
                      <span className="text-brand-dark">Auto</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="flex items-center gap-3 text-gray-600">
                        <svg
                          className="w-5 h-5 text-brand-gold"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M8 5a1 1 0 100 2h4a1 1 0 100-2H8z" />
                          <path
                            fill-rule="evenodd"
                            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v1h-2V3a1 1 0 00-1-1H5a1 1 0 00-1 1v1H3V3zM3 7v10a2 2 0 002 2h10a2 2 0 002-2V7H3zm2-1h10v1H5V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Luggage
                      </span>
                      <span className="text-brand-dark">2 Bags</span>
                    </li>
                  </ul>

                  {/* Price and Button */}
                  <div className="flex justify-between items-center mt-6">
                    <p className="text-2xl font-bold text-brand-gold">
                      $750
                      <span className="text-sm font-normal text-gray-500">
                        / day
                      </span>
                    </p>
                    {/* Details Button with New Hover Effects */}
                    <a
                      href="car-details.html"
                      className="bg-brand-gold text-black py-5 px-12 rounded-full transition-all duration-300 ease-in-out hover:bg-brand-dark hover:text-white hover:-translate-y-1"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
              {/* Car Card 4 */}
              <div className="group bg-brand-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
                {/* Image Container with Hover Effects */}
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Aston Martin DBX"
                    className="w-full h-56 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  {/* Darkening Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 ease-in-out"></div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-brand-dark">
                    Aston Martin DBX
                  </h3>

                  {/* Specs List */}
                  <ul className="mt-4 pt-4 mb-8 border-t border-gray-200 space-y-6 text-md flex-grow">
                    <li className="flex justify-between items-center">
                      <span className="flex items-center gap-3 text-gray-600">
                        {/* NEW Door SVG */}
                        <svg
                          className="w-5 h-5 text-brand-gold"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M19.5,2H8.35C7,2,6.13,2.83,5.77,4.03L3.12,12.45C3.04,12.71,3,13,3,13.29V21c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v-1h12v1c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v-7.71c0-0.29-0.04-0.58-0.12-0.84l-2.65-8.42C20.87,2.83,20,2,18.65,2z M8,13c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S8.55,13,8,13z M16,13c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S16.55,13,16,13z M8.17,4l2.25,7.21L11,13h2l0.58-1.79L15.83,4H8.17z" />
                        </svg>
                        Doors
                      </span>
                      <span className="text-brand-dark">4</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="flex items-center gap-3 text-gray-600">
                        {/* NEW Passengers SVG */}
                        <svg
                          className="w-5 h-5 text-brand-gold"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        Passengers
                      </span>
                      <span className="text-brand-dark">5</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="flex items-center gap-3 text-gray-600">
                        <svg
                          className="w-5 h-5 text-brand-gold"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                        </svg>
                        Transmission
                      </span>
                      <span className="text-brand-dark">Auto</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="flex items-center gap-3 text-gray-600">
                        <svg
                          className="w-5 h-5 text-brand-gold"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M8 5a1 1 0 100 2h4a1 1 0 100-2H8z" />
                          <path
                            fill-rule="evenodd"
                            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v1h-2V3a1 1 0 00-1-1H5a1 1 0 00-1 1v1H3V3zM3 7v10a2 2 0 002 2h10a2 2 0 002-2V7H3zm2-1h10v1H5V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Luggage
                      </span>
                      <span className="text-brand-dark">2 Bags</span>
                    </li>
                  </ul>

                  {/* Price and Button */}
                  <div className="flex justify-between items-center mt-6">
                    <p className="text-2xl font-bold text-brand-gold">
                      $750
                      <span className="text-sm font-normal text-gray-500">
                        / day
                      </span>
                    </p>
                    {/* Details Button with New Hover Effects */}
                    <a
                      href="car-details.html"
                      className="bg-brand-gold text-black py-5 px-12 rounded-full transition-all duration-300 ease-in-out hover:bg-brand-dark hover:text-white hover:-translate-y-1"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <nav className="mt-16 flex justify-center">
              <ul className="flex items-center gap-2">
                <li>
                  <a
                    href="#"
                    className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-brand-dark hover:bg-gray-200 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-brand-dark hover:bg-gray-200 transition-colors"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="w-12 h-12 flex items-center justify-center bg-brand-gold rounded-full text-black transition-colors"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-brand-dark hover:bg-gray-200 transition-colors"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-brand-dark hover:bg-gray-200 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      {/* Filter Drawer Backdrop */}
      <div
        id="filter-backdrop"
        className="fixed inset-0 bg-black/50 z-[80] hidden lg:hidden"
      ></div>
    </main>
  );
};

export default Cars;
