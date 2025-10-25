import React from "react";
import useCarsListingPage from "./hooks/useCarsListingPage";
import CarsCard from "./components/CarsCard";

const Cars: React.FC = () => {
  const { carsApiData } = useCarsListingPage();
  console.log({carsApiData})
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L16 11.414V16a1 1 0 01-.293.707l-2 2A1 1 0 0113 18v-1.586l-3.707-3.707A1 1 0 019 12V6.414L3.293 6.707A1 1 0 013 6V4z"
                  />
                </svg>
                Filters
              </button>
            </div>

            {/* Cars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {carsApiData.length > 0 && carsApiData.map((car, idx) => {
                return <CarsCard key={`${idx}-${car._id}`} {...car}/>
              })}
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
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
