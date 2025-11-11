import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import useCarsListingPage from "./hooks/useCarsListingPage";
import CarListingHeroSection from "./components/CarListingHeroSection";
import SidebarFilter from "./components/SidebarFilter";
import CarsGridWithActiveFilters from "./components/CarsGridWithActiveFilters";

const Cars: React.FC = () => {
  const { showSpinner, hideSpinner, carsData } = useGlobalContext();
  const {
    isOpen,
    currentItems,
    totalPages,
    currentPage,
    filtersData,
    carsInfoText,
    visiblePages,
    openDrawer,
    closeDrawer,
    goToPage,
    nextPage,
    prevPage,
    clearFiltersHandler,
    onFilterChangeHandler,
    removeFilterItemHandler,
    applyFilterButtonHandler,
  } = useCarsListingPage(showSpinner, hideSpinner, carsData);

  return (
    <main className="font-outfit" aria-labelledby="cars-page">
      {/* Car Listing Page Hero Section */}
      <CarListingHeroSection />
      {/* MAIN CONTENT: FILTERS & CAR GRID */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-8xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
          {/* FILTERS: Sidebar for Desktop, Drawer for Mobile/Tablet */}
          <SidebarFilter
            isOpen={isOpen}
            filtersData={filtersData}
            closeDrawer={closeDrawer}
            onFilterChangeHandler={onFilterChangeHandler}
            applyFilterButtonHandler={applyFilterButtonHandler}
          />
          {/* RIGHT COLUMN: RESULTS & CAR GRID */}
          <CarsGridWithActiveFilters
            carsList={currentItems}
            carsInfoText={carsInfoText}
            visiblePages={visiblePages}
            totalPages={totalPages}
            currentPage={currentPage}
            filtersData={filtersData}
            openDrawer={openDrawer}
            clearFiltersHandler={clearFiltersHandler}
            removeFilterItemHandler={removeFilterItemHandler}
            goToPage={goToPage}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </div>
      </section>
      {/* Filter Drawer Backdrop */}
      {isOpen && (
        <div
          onClick={closeDrawer}
          id="filter-backdrop"
          className="fixed inset-0 bg-black/50 z-90 lg:hidden"
        ></div>
      )}
    </main>
  );
};

export default Cars;
