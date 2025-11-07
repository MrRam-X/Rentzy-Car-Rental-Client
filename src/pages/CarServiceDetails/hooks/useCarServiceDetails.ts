import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { carService } from "../../../services/CarService";
import type { CarService } from "../../../types/CarService";
import type { ToastType } from "../../../context/GlobalContext";
import type { BookingForm } from "../../../types/commonTypes";
import type { Car } from "../../../types/Cars";
import useBookingForm from "../../../hooks/useBookingForm";
import { INITIAL_BOOKING_FORM_DATA } from "../../../appConstant";

type RouteParams = {
  serviceId: string;
};

const useCarServiceDetails = (
  addToast: (title: string, message: string, type: ToastType) => void,
  showSpinner: () => void,
  hideSpinner: () => void,
  carServicesList: CarService[],
  carsData: Car[]
) => {
  const { serviceId } = useParams<RouteParams>();
  const [carServiceDetailsData, setCarServiceDetailsData] =
    useState<CarService>({} as CarService);
  const [formData, setFormData] = useState<BookingForm>(INITIAL_BOOKING_FORM_DATA);

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
  )

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
      setFormData({ ...formData, serviceType: serviceId });
    }
  }, [serviceId]);

  return {
    isFormDirty,
    carServiceDetailsData,
    isModalOpen,
    formData,
    serviceList,
    carBrandList,
    carModelList,
    onFormDataChange,
    formCancelHandler,
    formSubmitHandler,
    onModalOpen,
    onModalClose,
  };
};

export default useCarServiceDetails;
