import React from "react";
import type { FilterList } from "../../../types/commonTypes";

type SidebarFilterProps = {
  filtersData: FilterList;
  onFilterChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    category: keyof FilterList
  ) => void;
  applyFilterButtonHandler: () => void;
};

const SidebarFilter: React.FC<SidebarFilterProps> = ({
  filtersData,
  onFilterChangeHandler,
  applyFilterButtonHandler,
}) => {
  return (
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
                  placeholder="Search Car Name..."
                  name="searchText"
                  value={filtersData.searchText}
                  onChange={(e) => onFilterChangeHandler(e, "searchText")}
                  className="w-full bg-white rounded-full py-5 pl-6 pr-16 text-lg text-brand-dark placeholder-gray-500 focus:outline-none"
                />
                {/* <button className="absolute top-1/2 right-2 -translate-y-1/2 w-14 h-14 bg-brand-gold text-black rounded-full flex items-center justify-center hover:bg-black hover:text-brand-gold transition-colors duration-500">
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
                </button> */}
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
                    name="min"
                    value={filtersData.perDayRate.min ?? ""}
                    onChange={(e) => onFilterChangeHandler(e, "perDayRate")}
                    placeholder="Min"
                    className="w-full bg-white rounded-lg p-2 text-center focus:outline-none focus:ring-1 focus:ring-brand-gold"
                  />
                  <span className="text-gray-400">-</span>
                  <input
                    name="max"
                    value={filtersData.perDayRate.max ?? ""}
                    onChange={(e) => onFilterChangeHandler(e, "perDayRate")}
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
                  {filtersData.carBrand.map((item) => {
                    return (
                      <label
                        key={item.value}
                        className="custom-radio flex items-center gap-3 text-gray-700 cursor-pointer"
                      >
                        <input
                          type="radio"
                          checked={item.isSelected}
                          value={item.value}
                          onChange={(e) => onFilterChangeHandler(e, "carBrand")}
                          name="carBrand"
                          className="sr-only"
                        />
                        <span className="custom-radio-button"></span>
                        {item.label}
                      </label>
                    );
                  })}
                </div>
              </div>
              {/* Car Type */}
              <div>
                <h3 className="text-lg font-bold text-brand-dark mb-4">
                  Car Type
                </h3>
                <div className="space-y-4">
                  {filtersData.carType.map((item) => {
                    return (
                      <label
                        key={item.value}
                        className="custom-checkbox flex items-center gap-3 text-gray-700 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={item.isSelected}
                          value={item.value}
                          onChange={(e) => onFilterChangeHandler(e, "carType")}
                          name="carType"
                          className="sr-only"
                        />
                        <span className="custom-checkbox-button"></span>
                        {item.label}
                      </label>
                    );
                  })}
                </div>
              </div>
              {/* Transmission */}
              <div>
                <h3 className="text-lg font-bold text-brand-dark mb-4">
                  Transmission
                </h3>
                <div className="space-y-4">
                  {filtersData.transmission.map((item) => {
                    return (
                      <label
                        key={item.value}
                        className="custom-checkbox flex items-center gap-3 text-gray-700 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={item.isSelected}
                          value={item.value}
                          onChange={(e) =>
                            onFilterChangeHandler(e, "transmission")
                          }
                          name="transmission"
                          className="sr-only"
                        />
                        <span className="custom-checkbox-button"></span>
                        {item.label}
                      </label>
                    );
                  })}
                </div>
              </div>
              <button
                onClick={applyFilterButtonHandler}
                className="p-4 w-full bg-brand-gold text-black rounded-lg hover:bg-black hover:text-brand-gold transition-colors duration-500"
              >
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarFilter;
