import { useEffect, useState } from "react";
import type { CarService } from "../../../types/CarService";
import { useGlobalContext } from "../../../context/GlobalContext";
import { carService } from "../../../services/CarService";

const useCarServices = () => {
  const { showSpinner, hideSpinner } = useGlobalContext();
  const [carServiceData, setCarServiceData] = useState<CarService[]>([]);

  const fetchCarServicesData = async () => {
    showSpinner();
    try {
      const data = await carService.getAllCarServices();
      setCarServiceData(data);
    } catch (err) {
      console.log("Failed to load car services.", err);
    } finally {
      hideSpinner();
    }
  };

  useEffect(() => {
    fetchCarServicesData()
  }, [])

  return { carServiceData }
};

export default useCarServices;
