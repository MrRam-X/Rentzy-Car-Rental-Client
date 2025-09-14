import React, { useState, useEffect } from "react";
import VehicleCard from "./VehicleCard";
import type { VehicleCardType } from "../../types";
import { INITIAL_DISPLAY_CAR_FLEET_VEHICLES } from "../../../../appConstant";

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
    value: "SPORTS",
    isActive: false,
  },
  {
    label: "Sedans",
    value: "SEDANS",
    isActive: false,
  },
];

const initialCarListData: VehicleCardType[] = [
  {
    name: "Bentley Bentayga",
    price: 4000,
    category: "SUV",
    image:
      "https://images.pexels.com/photos/15942431/pexels-photo-15942431/free-photo-of-a-silver-bentley-parked-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specs: {
      seats: 5,
      transmission: "Auto",
      fuel: "Petrol",
      airbags: 8,
      age: 25,
    },
  },
  {
    name: "Ferrari 296 GTB",
    price: 8200,
    category: "SPORTS",
    image:
      "https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specs: {
      seats: 2,
      transmission: "Auto",
      fuel: "Petrol",
      airbags: 4,
      age: 25,
    },
  },
  {
    name: "Mercedes S-Class",
    price: 4500,
    category: "SEDANS",
    image:
      "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specs: {
      seats: 5,
      transmission: "Auto",
      fuel: "Diesel",
      airbags: 10,
      age: 25,
    },
  },
  {
    name: "Aston Martin DBX",
    price: 6500,
    category: "SUV",
    image:
      "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specs: {
      seats: 5,
      transmission: "Auto",
      fuel: "Petrol",
      airbags: 8,
      age: 25,
    },
  },
  {
    name: "Bugatti Mistral W16",
    price: 8000,
    category: "SPORTS",
    image:
      "https://images.pexels.com/photos/17096537/pexels-photo-17096537/free-photo-of-bugatti-mistral-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specs: {
      seats: 2,
      transmission: "Auto",
      fuel: "Petrol",
      airbags: 2,
      age: 25,
    },
  },
  {
    name: "Rolls Royce Ghost",
    price: 4000,
    category: "SEDANS",
    image:
      "https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specs: {
      seats: 5,
      transmission: "Auto",
      fuel: "Petrol",
      airbags: 12,
      age: 30,
    },
  },
  {
    name: "Tesla Model S Plaid",
    price: 2500,
    category: "SEDANS",
    image:
      "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specs: {
      seats: 5,
      transmission: "Auto",
      fuel: "EV",
      airbags: 8,
      age: 25,
    },
  },
  {
    name: "Porsche 911 GT3",
    price: 3800,
    category: "SPORTS",
    image:
      "https://images.pexels.com/photos/16334698/pexels-photo-16334698/free-photo-of-porsche-911-gt3-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specs: {
      seats: 2,
      transmission: "Manual",
      fuel: "Petrol",
      airbags: 4,
      age: 25,
    },
  },
];

const LuxuryCarFleet: React.FC = () => {
  const [tabList, setTabList] = useState(initialTabList);
  const [carList, setCarList] = useState<VehicleCardType[]>(initialCarListData);
  const [showMore, setShowMore] = useState<boolean>(false)

  // Temporary setting the car list once component mounts
  useEffect(() => {
    setCarList(initialCarListData)
  }, [])

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
    return !showMore && count > INITIAL_DISPLAY_CAR_FLEET_VEHICLES ? "hidden" : ""
  }

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
          {/* <!-- Car cards will be injected here by JavaScript --> */}
          {activeCategory === "ALL"
            ? carList.map((car, idx) => {
                return <VehicleCard key={`${car.category}-${car.name}`} customClassName={getClassNameForVehicleCardDisplay(idx + 1)} {...car} />;
              })
            : carList
                .filter((car) => car.category === activeCategory)
                .map((car, idx) => <VehicleCard key={`${car.category}-${car.name}`} customClassName={getClassNameForVehicleCardDisplay(idx + 1)} {...car} />)}
        </div>

        {/* Load More Button */}
        <div id="load-more-container" className="text-center mt-16">
          <button
            onClick={() => setShowMore(!showMore)}
            id="load-more-btn"
            className="bg-brand-dark text-white font-semibold py-3 px-8 rounded-full hover:bg-black transition-colors duration-300"
          >
            {showMore ? "Show Less": "Load More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default LuxuryCarFleet;
