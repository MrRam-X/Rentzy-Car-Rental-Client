import { useState, useEffect } from "react";
import type { Car } from "../../../types/Cars";
import { useGlobalContext } from "../../../context/GlobalContext";
import { carService } from "../../../services/CarService";

const useCarsListingPage = () => {
  const { showSpinner, hideSpinner, carsData } = useGlobalContext();
  const [carsApiData, setCarsApiData] = useState<Car[]>([...carsData]);

  useEffect(() => {
    const fetchCarsData = async () => {
      showSpinner();
      try {
        const data = await carService.getAllCars();
        setCarsApiData(data);
      } catch (err) {
        console.log("Failed to load cars.", err);
      } finally {
        hideSpinner();
      }
    };

    if(carsData && carsData.length > 0) {
      setCarsApiData([...carsData])
    }
    else {
      fetchCarsData();
    }

  }, []);

  return { carsApiData };
};

export default useCarsListingPage;
