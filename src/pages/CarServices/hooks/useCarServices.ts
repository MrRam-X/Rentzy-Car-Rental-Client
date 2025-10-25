import { useEffect, useState } from "react";
import type { CarService } from "../../../types/CarService";
import { useGlobalContext } from "../../../context/GlobalContext";
import { carService } from "../../../services/CarService";

const useCarServices = () => {
  const { showSpinner, hideSpinner, updateCarServiceList, carServicesList } =
    useGlobalContext();
  const [carServiceData, setCarServiceData] = useState<CarService[]>([
    ...carServicesList,
  ]);

  const fetchCarServicesData = async () => {
    showSpinner();
    try {
      const data = await carService.getAllCarServices();
      setCarServiceData(data);
      updateCarServiceList(data);
    } catch (err) {
      console.log("Failed to load car services.", err);
    } finally {
      hideSpinner();
    }
  };

  useEffect(() => {
    if (carServicesList.length === 0) {
      fetchCarServicesData();
    }
  }, []);

  return { carServiceData };
};

export default useCarServices;
