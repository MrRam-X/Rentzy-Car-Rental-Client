import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { carService } from "../../../services/CarService";
import type { Car } from "../../../types/Cars";
import type { CarService } from "../../../types/CarService";
import type { ToastType } from "../../../context/GlobalContext";
import type { BookingForm } from "../../../types/commonTypes";
import { INITIAL_BOOKING_FORM_DATA } from "../../../appConstant";
import useBookingForm from "../../../hooks/useBookingForm";

type RouteParams = {
  carId: string;
};

const useCarDetailsData = (
  addToast: (title: string, message: string, type: ToastType) => void,
  showSpinner: () => void,
  hideSpinner: () => void,
  carServicesList: CarService[],
  carsData: Car[]
) => {
  const { carId } = useParams<RouteParams>();
  const [carDetailsData, setCarDetailsData] = useState<Car>({} as Car);
  const [formData, setFormData] = useState<BookingForm>(
    INITIAL_BOOKING_FORM_DATA
  );

  const {
    isModalOpen,
    isFormDirty,
    carBrandList,
    carModelList,
    serviceList,
    onModalOpen,
    onModalClose,
    onFormDataChange,
    formSubmitHandler,
    formCancelHandler,
  } = useBookingForm(
    formData,
    carsData,
    carServicesList,
    setFormData,
    addToast,
    showSpinner,
    hideSpinner
  );

  // Function to fetch car details based on car id
  const fetchCarDetailsData = async (carId: string) => {
    showSpinner();
    try {
      const data = await carService.getCarDetails(carId);
      setCarDetailsData(data);
    } catch (err) {
      console.log("Failed to load car details.", err);
    } finally {
      hideSpinner();
    }
  };

  useEffect(() => {
    if (carId) {
      fetchCarDetailsData(carId);
    }
  }, [carId]);

  useEffect(() => {
    if (carDetailsData && carDetailsData._id === carId) {
      setFormData({
        ...formData,
        carBrand: carDetailsData.brand,
        carModel: carDetailsData.model,
        carType: carDetailsData.carType,
      });
    }
  }, [carDetailsData, carId]);

  return {
    formData,
    carDetailsData,
    isModalOpen,
    isFormDirty,
    carBrandList,
    carModelList,
    serviceList,
    onModalOpen,
    onModalClose,
    onFormDataChange,
    formSubmitHandler,
    formCancelHandler,
  };
};

export default useCarDetailsData;
