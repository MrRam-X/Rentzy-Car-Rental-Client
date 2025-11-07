import { useState, useEffect } from "react";
import type { Car } from "../../../types/Cars";
import { carService } from "../../../services/CarService";
import {
  CAR_ITEMS_PER_PAGE,
  CAR_TYPES_OPTIONS,
  MAX_VISIBLE_PAGINATION_BUTTON,
} from "../../../appConstant";
import type { FilterList, OptionTypeValue } from "../../../types/commonTypes";
import { getAmountFormateText } from "../../../utils/commonUtils";

const initialFiltersData: FilterList = {
  searchText: "",
  perDayRate: {
    min: "",
    max: "",
  },
  carBrand: [],
  carType: [
    ...CAR_TYPES_OPTIONS.map((item) => ({
      ...item,
      isSelected: false,
    })),
  ],
  transmission: [],
  activeFilters: [],
};

const useCarsListingPage = (
  showSpinner: () => void,
  hideSpinner: () => void,
  carsData: Car[]
) => {
  const [filteredCarsData, setFilteredCarsData] = useState<Car[]>([
    ...carsData,
  ]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filtersData, setFiltersData] =
    useState<FilterList>(initialFiltersData);

  // Effect for calling api/fetching it from the context upon mounting
  useEffect(() => {
    const fetchCarsData = async () => {
      showSpinner();
      try {
        const data = await carService.getAllCars();
        setFilteredCarsData(data);
        generateFilterDataFromApiResponse(data, initialFiltersData);
      } catch (err) {
        console.log("Failed to load cars.", err);
      } finally {
        hideSpinner();
      }
    };

    if (carsData && carsData.length > 0) {
      setFilteredCarsData([...carsData]);
      generateFilterDataFromApiResponse(carsData, initialFiltersData);
    } else {
      fetchCarsData();
    }
  }, []);

  // Generate Filter Data from api response
  const generateFilterDataFromApiResponse = (
    carData: Car[],
    initialFiltersData: FilterList
  ) => {
    const carBrand = [] as OptionTypeValue[];
    const carTransmission = [] as OptionTypeValue[];
    if (carData.length > 0) {
      // Generate car brand filter options from car data
      carData.reduce((acc, curr) => {
        if (!acc.find((item) => item.value === curr.brand)) {
          acc.push({ label: curr.brand, value: curr.brand, isSelected: false });
        }
        return acc;
      }, carBrand);

      // Generate transmission filter options from car data
      carData.reduce((acc, curr) => {
        if (!acc.find((item) => item.value === curr.transmission)) {
          acc.push({
            label: curr.transmission,
            value: curr.transmission,
            isSelected: false,
          });
        }
        return acc;
      }, carTransmission);
    }

    setFiltersData({
      ...initialFiltersData,
      carBrand: [
        ...initialFiltersData.carBrand,
        ...carBrand.sort((a, b) => a.label.localeCompare(b.label)),
      ],
      transmission: [
        ...initialFiltersData.transmission,
        ...carTransmission.sort((a, b) => a.label.localeCompare(b.label)),
      ],
    });
  };

  // Filter Change Handler Function //
  const onFilterChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    category: keyof FilterList
  ) => {
    const { type, value, checked, name } = e.target;

    setFiltersData((prev) => {
      const updated: FilterList = { ...prev };

      switch (category) {
        case "carType":
        case "carBrand":
        case "transmission":
          if (type === "checkbox") {
            updated[category] = prev[category].map((item) =>
              item.value === value ? { ...item, isSelected: checked } : item
            );
          }
          if (type === "radio") {
            updated[category] = prev[category].map((item) => ({
              ...item,
              isSelected: item.value === value,
            }));
          }
          break;

        case "perDayRate":
          if (type === "number") {
            updated.perDayRate = {
              ...prev.perDayRate,
              [name]: value, // keep as string for controlled input
            };
          }
          break;

        case "searchText":
          if (type === "text") {
            updated.searchText = value;
          }
          break;

        default:
          break;
      }

      return updated;
    });
  };

  // Clear Filters Handler Function //
  const clearFiltersHandler = () => {
    generateFilterDataFromApiResponse(carsData, initialFiltersData);
    setFilteredCarsData([...carsData]);
  };

  // Remove Individual Filter Item Handler Function //
  const removeFilterItemHandler = (value: string, category: string) => {
    setFiltersData((prev) => {
      const updated: FilterList = {
        ...prev,
        activeFilters: prev.activeFilters.filter(
          (activeFilter) => activeFilter.value !== value
        ),
      };

      switch (category) {
        case "carBrand":
          updated[category] = prev[category].map((item) => ({
            ...item,
            isSelected: false,
          }));
          break;
        case "carType":
        case "transmission":
          updated[category] = prev[category].map((item) =>
            item.value === value ? { ...item, isSelected: false } : item
          );
          break;

        case "perDayRate":
          updated.perDayRate = {
            ...prev.perDayRate,
            min: "",
            max: "",
          };
          break;

        case "searchText":
          updated.searchText = "";
          break;

        default:
          break;
      }

      return updated;
    });
  };

  // Apply Filters Button Handler Function //
  const applyFilterButtonHandler = () => {
    const finalActiveFilterList = [];

    const { searchText, perDayRate, carBrand, carType, transmission } =
      filtersData;

    if (searchText) {
      finalActiveFilterList.push({
        category: "searchText",
        label: "Name",
        value: searchText,
      });
    }

    if (perDayRate.min || perDayRate.max) {
      finalActiveFilterList.push({
        category: "perDayRate",
        label: "Rate",
        value: `₹${getAmountFormateText(perDayRate.min)} - ${
          getAmountFormateText(perDayRate.max) || "Any"
        }`,
      });
    }

    if (carType.some((item) => item.isSelected)) {
      carType.forEach((car) => {
        if (car.isSelected) {
          finalActiveFilterList.push({
            category: "carType",
            label: "Type",
            value: car.value,
          });
        }
      });
    }

    if (carBrand.some((item) => item.isSelected)) {
      finalActiveFilterList.push({
        category: "carBrand",
        label: "Brand",
        value: carBrand.find((item) => item.isSelected)?.value || "",
      });
    }

    if (transmission.some((item) => item.isSelected)) {
      transmission.forEach((car) => {
        if (car.isSelected) {
          finalActiveFilterList.push({
            category: "transmission",
            label: "Transmission",
            value: car.value,
          });
        }
      });
    }
    setFiltersData({
      ...filtersData,
      activeFilters: [...finalActiveFilterList],
    });
    setCurrentPage(1);
  };

  // Filter Car State Based on Active Filters List //
  useEffect(() => {
    setFilteredCarsData(
      carsData.filter((car) => {
        // Collect selected values for each category
        const selectedCarTypes = filtersData.activeFilters
          .filter((f) => f.category === "carType")
          .map((f) => f.value);

        const selectedBrand = filtersData.activeFilters.find(
          (f) => f.category === "carBrand"
        )?.value;

        const selectedTransmission = filtersData.activeFilters.find(
          (f) => f.category === "transmission"
        )?.value;

        const rateFilter = filtersData.activeFilters.find(
          (f) => f.category === "perDayRate"
        );

        const searchFilter = filtersData.activeFilters.find(
          (f) => f.category === "searchText"
        );

        // Apply OR logic for carType
        const carTypeMatch =
          selectedCarTypes.length === 0 ||
          selectedCarTypes.includes(car.carType);

        // Apply AND logic for other categories
        const brandMatch =
          !selectedBrand ||
          selectedBrand === "ALL" ||
          car.brand === selectedBrand;

        const transmissionMatch =
          !selectedTransmission ||
          selectedTransmission === "ALL" ||
          car.transmission === selectedTransmission;

        const rateMatch = !rateFilter
          ? true
          : (() => {
              const [minStr, maxStr] = rateFilter.value
                .replace("₹", "")
                .split("-")
                .map((s) => s.trim());

              const min = Number(minStr) || 0;
              const max =
                maxStr === "Any" || maxStr === "" ? Infinity : Number(maxStr);

              return car.pricePerDay >= min && car.pricePerDay <= max;
            })();

        const searchMatch = !searchFilter
          ? true
          : car.model.toLowerCase().includes(searchFilter.value.toLowerCase());

        // Final AND across categories
        return (
          carTypeMatch &&
          brandMatch &&
          transmissionMatch &&
          rateMatch &&
          searchMatch
        );
      })
    );
  }, [filtersData.activeFilters, carsData]);

  // Pagination Logic Start //
  const totalPages = Math.ceil(filteredCarsData.length / CAR_ITEMS_PER_PAGE);

  const indexOfLastItem = currentPage * CAR_ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - CAR_ITEMS_PER_PAGE;
  const currentItems = filteredCarsData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const total = filteredCarsData.length;
  const start = (currentPage - 1) * CAR_ITEMS_PER_PAGE + 1;
  const end = Math.min(currentPage * CAR_ITEMS_PER_PAGE, total);
  const carsInfoText =
    total > 0 ? `Showing ${start}-${end} of ${total} Cars` : "";

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const getVisiblePages = (): number[] => {
    if (totalPages <= MAX_VISIBLE_PAGINATION_BUTTON) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    let start = currentPage - Math.floor(MAX_VISIBLE_PAGINATION_BUTTON / 2);
    let end = currentPage + Math.floor(MAX_VISIBLE_PAGINATION_BUTTON / 2);

    if (start < 1) {
      start = 1;
      end = MAX_VISIBLE_PAGINATION_BUTTON;
    } else if (end > totalPages) {
      end = totalPages;
      start = totalPages - MAX_VISIBLE_PAGINATION_BUTTON + 1;
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };
  // Pagination Logic End //

  return {
    currentItems,
    totalPages,
    currentPage,
    filtersData,
    carsInfoText,
    visiblePages: getVisiblePages(),
    goToPage,
    nextPage,
    prevPage,
    clearFiltersHandler,
    removeFilterItemHandler,
    onFilterChangeHandler,
    applyFilterButtonHandler,
  };
};

export default useCarsListingPage;
