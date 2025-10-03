import { useState, useEffect } from "react";
import type { Car } from "../../../types/Cars";
import { useGlobalContext } from "../../../context/GlobalContext";
import { carService } from "../../../services/CarService";

const useCarsListingPage = () => {
  const { showSpinner, hideSpinner } = useGlobalContext();
  const [carsApiData, setCarsApiData] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCarsData = async () => {
      showSpinner();
      try {
        const data = await carService.getAllCars();
        setCarsApiData(data);
      } catch (err) {
        console.log("Failed to load products.", err);
      } finally {
        hideSpinner();
      }
    };

    fetchCarsData();
  }, []);

  return { carsApiData };
};

export default useCarsListingPage;
