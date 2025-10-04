import { useEffect, useState } from "react";
import type { Car } from "../../../types/Cars";
import { useGlobalContext } from "../../../context/GlobalContext";
import { carService } from "../../../services/CarService";
import { useParams } from "react-router-dom";

type RouteParams = {
  carId: string;
};


const useCarDetailsData = () => {
  const { showSpinner, hideSpinner } = useGlobalContext();
  const { carId } = useParams<RouteParams>();
  const [carDetailsData, setCarDetailsData] = useState<Car>(
    {} as Car
  );

  // Function to fetch car details based on car id
  const fetchCarDetailsData = async (carId: string) => {
    showSpinner();
    try {
      const data = await carService.getCarDetails(carId);
      setCarDetailsData(data);
    } catch (err) {
      console.log("Failed to load products.", err);
    } finally {
      hideSpinner();
    }
  };

  useEffect(() => {
    if (carId) {
      fetchCarDetailsData(carId);
    }
  }, [carId]);

  return {
    carDetailsData,
  };
};

export default useCarDetailsData;
