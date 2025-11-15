import React, { useState, useEffect } from "react";
import VehicleCard from "./VehicleCard";
import { INITIAL_DISPLAY_CAR_FLEET_VEHICLES } from "../../../../appConstant";
import { useGlobalContext } from "../../../../context/GlobalContext";
import { carService } from "../../../../services/CarService";
import type { Car } from "../../../../types/Cars";

const initialTabList = [
  {
    label: "All",
    value: "ALL",
    isActive: true,
  },
  {
    label: "SUVs",
    value: "SUV",
    isActive: false,
  },
  {
    label: "Sports",
    value: "Sports",
    isActive: false,
  },
  {
    label: "Sedans",
    value: "Sedan",
    isActive: false,
  },
];

const LuxuryCarFleet: React.FC = () => {
  const { showSpinner, hideSpinner, carsData } = useGlobalContext();
  const [tabList, setTabList] = useState(initialTabList);
  const [carList, setCarList] = useState<Car[]>([...carsData]);
  const [showMore, setShowMore] = useState<boolean>(false);

  // Function to fetch all cars data
  const fetchCarsData = async () => {
    showSpinner();
    try {
      const data = await carService.getAllCars();
      setCarList(data);
    } catch (err) {
      console.log("Failed to load products.", err);
    } finally {
      hideSpinner();
    }
  };

  // Temporary setting the car list once component mounts
  useEffect(() => {
    if(carsData && carsData.length > 0) {
      setCarList([...carsData])
    }
    else {
      fetchCarsData();
    }
    // setCarList(initialCarListData)
  }, []);

  // Function to apply active class
  const getClassNameForTabSelectionStatus = (tabValue: string) => {
    const idx = tabList.findIndex((tab) => tab.value === tabValue);
    return tabList[idx].isActive === true
      ? "bg-brand-dark text-white"
      : "bg-gray-100 text-brand-dark hover:bg-gray-200";
  };

  // Function to update active tab from tab list
  const updateActiveTab = (tabValue: string) => {
    setTabList([
      ...tabList.map((tab) =>
        tab.value === tabValue
          ? { ...tab, isActive: true }
          : { ...tab, isActive: false }
      ),
    ]);
  };

  // Function display or hide vehicle card based on number of cards to display
  const getClassNameForVehicleCardDisplay = (count: number) => {
    return !showMore && count > INITIAL_DISPLAY_CAR_FLEET_VEHICLES
      ? "hidden"
      : "";
  };

  const activeCategory = tabList.find((tab) => tab.isActive)?.value || "";

  return (
    <section id="car-fleet-grid" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-brand-gold tracking-[0.3em] uppercase text-sm mb-2">
            SELECT YOUR CAR
          </p>
          <h2 className="text-4xl font-bold text-brand-dark">
            Luxury <span className="text-brand-gold">Car Fleet</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <nav
          id="fleet-filters"
          className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-12"
        >
          {tabList.map((tab) => {
            return (
              <button
                key={tab.value}
                id={tab.value}
                className={`${getClassNameForTabSelectionStatus(
                  tab.value
                )} filter-btn font-semibold py-2 px-6 rounded-full transition-colors duration-300`}
                onClick={() => updateActiveTab(tab.value)}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Cars Grid */}
        <div
          id="fleet-grid-container"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {activeCategory === "ALL"
            ? carList.map((car, idx) => {
                return (
                  <VehicleCard
                    key={`${car.carType}-${car.model}`}
                    customClassName={getClassNameForVehicleCardDisplay(idx + 1)}
                    {...car}
                  />
                );
              })
            : carList
                .filter((car) => car.carType === activeCategory)
                .map((car, idx) => (
                  <VehicleCard
                    key={`${car.carType}-${car.model}`}
                    customClassName={getClassNameForVehicleCardDisplay(idx + 1)}
                    {...car}
                  />
                ))}
        </div>

        {/* Load More Button */}
        <div id="load-more-container" className="text-center mt-16">
          <button
            onClick={() => setShowMore(!showMore)}
            id="load-more-btn"
            className="bg-brand-dark text-white font-semibold py-3 px-8 rounded-full hover:bg-black transition-colors duration-300"
          >
            {showMore ? "Show Less" : "Load More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default LuxuryCarFleet;
