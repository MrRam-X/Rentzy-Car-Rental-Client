import React from "react";
import type { Car } from "../../../types/Cars";
import CarsCard from "./CarsCard";
import type { FilterList } from "../../../types/commonTypes";
import NoCarsFound from "./NoCarsFound";
import { ERROR_MESSAGES } from "../../../appConstant";

type CarsGridWithActiveFiltersProps = {
  carsList: Car[];
  totalPages: number;
  currentPage: number;
  carsInfoText: string;
  visiblePages: number[];
  filtersData: FilterList;
  goToPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  clearFiltersHandler: () => void;
  removeFilterItemHandler: (value: string, category: string) => void;
};

const CarsGridWithActiveFilters: React.FC<CarsGridWithActiveFiltersProps> = ({
  carsList,
  totalPages,
  currentPage,
  carsInfoText,
  visiblePages,
  filtersData,
  goToPage,
  nextPage,
  prevPage,
  clearFiltersHandler,
  removeFilterItemHandler,
}) => {
  const { COULD_NOT_MATCH_CRITERIA, FAILED_TO_FETCH } = ERROR_MESSAGES;
  return (
    <div className="lg:col-span-2">
      {/* Top Results Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        {carsInfoText && <p className="text-lg text-brand-dark">{carsInfoText}</p>}
        {/* Filter Tags (Desktop) */}
        <div className="hidden md:flex items-center gap-2 flex-wrap">
          {/* Active Filters Map */}
          {filtersData.activeFilters.length > 0 &&
            filtersData.activeFilters.map((filterItem) => {
              return (
                <span
                  key={`${filterItem.category}-${filterItem.value}`}
                  className="bg-brand-gold text-sm rounded-full py-3 px-5"
                >
                  {`${filterItem.label}: ${filterItem.value}`}
                  <button
                    onClick={() =>
                      removeFilterItemHandler(
                        filterItem.value,
                        filterItem.category
                      )
                    }
                    className="ml-1 font-bold"
                  >
                    x
                  </button>
                </span>
              );
            })}
          {filtersData.activeFilters.length > 0 && (
            <a
              onClick={clearFiltersHandler}
              className="text-sm hover:underline cursor-pointer"
            >
              Clear All
            </a>
          )}
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
      {carsList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {carsList.map((car, idx) => {
            return <CarsCard key={`${idx}-${car._id}`} {...car} />;
          })}
        </div>
      ) : (
        <NoCarsFound
          title="No Cars Found"
          description={
            filtersData.activeFilters.length > 0
              ? COULD_NOT_MATCH_CRITERIA
              : FAILED_TO_FETCH
          }
        />
      )}

      {/* Pagination */}
      {visiblePages.length > 0 && (
        <nav className="mt-16 flex justify-center">
          <ul className="flex items-center gap-2">
            <li>
              <a
                onClick={prevPage}
                className={`w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-brand-dark hover:bg-gray-200 transition-colors ${
                  currentPage === 1
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer"
                }`}
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
            {visiblePages.map((page) => {
              return (
                <li key={page}>
                  <a
                    onClick={() => goToPage(page)}
                    className={`w-12 h-12 flex items-center justify-center rounded-full transition-colors cursor-pointer ${
                      currentPage === page
                        ? "bg-brand-gold text-black"
                        : "bg-gray-100 text-brand-dark hover:bg-gray-200"
                    }`}
                  >
                    {page}
                  </a>
                </li>
              );
            })}

            <li>
              <a
                onClick={nextPage}
                className={`w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-brand-dark hover:bg-gray-200 transition-colors ${
                  currentPage === totalPages
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer"
                }`}
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
      )}
    </div>
  );
};

export default CarsGridWithActiveFilters;
