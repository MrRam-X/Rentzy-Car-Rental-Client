import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { carService } from "../../../services/CarService";
import type { Car } from "../../../types/Cars";
import type { CarService } from "../../../types/CarService";
import type { ToastType } from "../../../context/GlobalContext";
import type { BookingForm, BookingInput } from "../../../types/commonTypes";
import {
  CAR_TYPES_OPTIONS,
  INITIAL_BOOKING_FORM_DATA,
  MAX_RENT_PERIOD_IN_DAYS,
} from "../../../appConstant";
import useBookingForm from "../../../hooks/useBookingForm";
import {
  formatDateToYMD,
  getNextYear,
  getNextDate,
} from "../../../utils/commonUtils";
import type { RentalStation } from "../../../types/RentalStation";

type RouteParams = {
  carId: string;
};

const useCarDetailsData = (
  addToast: (title: string, message: string, type: ToastType) => void,
  showSpinner: () => void,
  hideSpinner: () => void,
  carServicesList: CarService[],
  carsData: Car[],
  rentalStations: RentalStation[]
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
    pickupLocationList,
    onModalOpen,
    onModalClose,
    onFormDataChange,
    formSubmitHandler,
    formCancelHandler,
  } = useBookingForm(
    formData,
    carsData,
    carServicesList,
    rentalStations,
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

  const formInputFieldsList: BookingInput[] = [
    {
      type: "date",
      name: "fromDate",
      id: "from-date",
      label: "From Date",
      required: true,
      value: formData.fromDate,
      min: formatDateToYMD(new Date()),
      max: formatDateToYMD(getNextYear(new Date())),
      onChange: onFormDataChange,
    },
    {
      type: "date",
      name: "toDate",
      id: "to-date",
      label: "To Date (max: 20 days)",
      required: true,
      value: formData.toDate,
      disabled: !formData.fromDate,
      min: formatDateToYMD(
        getNextDate(
          formData.fromDate ? new Date(formData.fromDate) : new Date()
        )
      ),
      max: formatDateToYMD(
        getNextDate(new Date(formData.fromDate), MAX_RENT_PERIOD_IN_DAYS)
      ),
      onChange: onFormDataChange,
      disabledClassName: !formData.fromDate
        ? "cursor-not-allowed opacity-50"
        : "",
    },
    {
      type: "text",
      name: "fullName",
      id: "full-name",
      label: "Full Name",
      required: true,
      placeholder: "Full name. e.g - Ram Prasad Baidya",
      value: formData.fullName,
      onChange: onFormDataChange,
      containerClassName: "sm:col-span-2",
    },
    {
      type: "email",
      name: "email",
      id: "email",
      label: "Email",
      required: true,
      placeholder: "Email Address. e.g - ram.prasad@rentzy.com",
      value: formData.email,
      onChange: onFormDataChange,
    },
    {
      type: "tel",
      name: "phoneNumber",
      id: "phone-number",
      label: "Contact No.",
      required: true,
      placeholder: "Mobile number. e.g - +912223334448",
      value: formData.phoneNumber,
      onChange: onFormDataChange,
    },
    {
      type: "select",
      name: "serviceType",
      id: "service-type",
      label: "Service Type",
      required: true,
      value: formData.serviceType,
      onChange: onFormDataChange,
      options: [{ value: "", label: "Select a service" }, ...serviceList],
      optionClassName: (currValue: string) =>
        formData.serviceType === currValue ? "text-gray-400" : "",
      containerClassName: "sm:col-span-2",
    },
    {
      type: "select",
      name: "pickupLocation",
      id: "pickup-location",
      label: "Pickup Location",
      required: true,
      value: formData.pickupLocation,
      onChange: onFormDataChange,
      options: [
        { value: "", label: "Select a pickup location" },
        ...pickupLocationList,
      ],
      optionClassName: (currValue: string) =>
        formData.pickupLocation === currValue ? "text-gray-400" : "",
      placeholder: "Pickup Location. e.g - Area, District, State, Country, Pin",
      containerClassName: "sm:col-span-2",
    },
    {
      type: "select",
      name: "carType",
      id: "car-type",
      label: "Car Type",
      required: true,
      value: formData.carType,
      disabled: carDetailsData.carType === formData.carType,
      onChange: onFormDataChange,
      options: [{ value: "", label: "Select Car Type" }, ...CAR_TYPES_OPTIONS],
      optionClassName: (currValue: string) =>
        formData.carType === currValue ? "text-gray-400" : "",
      containerClassName: "sm:col-span-2",
      disabledClassName:
        carDetailsData.carType === formData.carType
          ? "text-gray-400 cursor-not-allowed"
          : "",
    },
    {
      type: "select",
      name: "carBrand",
      id: "car-brand",
      label: "Car Brand",
      required: true,
      value: formData.carBrand,
      disabled: carDetailsData.brand === formData.carBrand,
      onChange: onFormDataChange,
      options: [{ value: "", label: "Select Brand" }, ...carBrandList],
      optionClassName: (currValue: string) =>
        formData.carBrand === currValue ? "text-gray-400" : "",
      containerClassName: "sm:col-span-2",
      disabledClassName:
        carDetailsData.brand === formData.carBrand
          ? "text-gray-400 cursor-not-allowed"
          : "",
    },
    {
      type: "select",
      name: "carModel",
      id: "car-model",
      label: "Car Model",
      required: false,
      value: formData.carModel,
      disabled: carDetailsData.model === formData.carModel,
      onChange: onFormDataChange,
      options: [{ value: "", label: "Select Model" }, ...carModelList],
      optionClassName: (currValue: string) =>
        formData.carModel === currValue ? "text-gray-400" : "",
      containerClassName: "sm:col-span-2",
      disabledClassName:
        carDetailsData.model === formData.carModel
          ? "text-gray-400 cursor-not-allowed"
          : "",
    },
  ];

  return {
    formData,
    carDetailsData,
    isModalOpen,
    isFormDirty,
    carBrandList,
    carModelList,
    serviceList,
    formInputFieldsList,
    onModalOpen,
    onModalClose,
    onFormDataChange,
    formSubmitHandler,
    formCancelHandler,
  };
};

export default useCarDetailsData;
