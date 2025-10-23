import { useEffect, useState } from "react";
import type { CarService } from "../../../types/CarService";
import { useGlobalContext } from "../../../context/GlobalContext";
import { useParams } from "react-router-dom";
import { carService } from "../../../services/CarService";

type RouteParams = {
  serviceId: string;
};

const useCarServiceDetails = () => {
  const { showSpinner, hideSpinner, carServicesList } = useGlobalContext();
  const { serviceId } = useParams<RouteParams>();
  const [carServiceDetailsData, setCarServiceDetailsData] =
    useState<CarService>({} as CarService);

  const fetchCarServiceDetails = async (serviceId: string) => {
    showSpinner();
    try {
      const data = await carService.getCarServiceDetails(serviceId);
      setCarServiceDetailsData(data);
    } catch (err) {
      console.log("Failed to load service details.", err);
    } finally {
      hideSpinner();
    }
  };

  useEffect(() => {
    if (serviceId) {
      fetchCarServiceDetails(serviceId);
    }
  }, [serviceId]);

  return { carServiceDetailsData, carServicesList }
};

export default useCarServiceDetails;
