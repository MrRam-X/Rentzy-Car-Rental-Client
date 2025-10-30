import { useEffect, useMemo, useState } from "react";
import type { CarService } from "../../../types/CarService";
import { type ToastType } from "../../../context/GlobalContext";
import { useParams } from "react-router-dom";
import { carService } from "../../../services/CarService";
import type { BookingForm, OptionType } from "../../../types/commonTypes";
import type { Car } from "../../../types/Cars";
import { RAZORPAY_KEY_ID } from "../../../appConstant";

type RouteParams = {
  serviceId: string;
};

const initialFormData = {
  fromDate: "",
  toDate: "",
  fullName: "",
  email: "",
  phoneNumber: "",
  serviceType: "",
  pickupLocation: "",
  carType: "",
  carBrand: "",
  carModel: "",
};

const useCarServiceDetails = (
  addToast: (title: string, message: string, type: ToastType) => void,
  showSpinner: () => void,
  hideSpinner: () => void,
  carServicesList: CarService[],
  carsData: Car[]
) => {
  // const { addToast, showSpinner, hideSpinner, carServicesList, carsData } =
  //   useGlobalContext();
  const { serviceId } = useParams<RouteParams>();
  const [carServiceDetailsData, setCarServiceDetailsData] =
    useState<CarService>({} as CarService);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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

  const onModalOpen = () => {
    setIsModalOpen(true);
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  /* TODO: Need to implement this behavior later */
  // const onModalBlur = () => {
  //   if(!isFormDirty) {
  //     setIsModalOpen(false)
  //   }
  // }

  const [formData, setFormData] = useState<BookingForm>(initialFormData);
  const [isFormDirty, setIsFormDirty] = useState<boolean>(false);

  const onFormDataChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (!isFormDirty) setIsFormDirty(true);
  };

  const formSubmitHandler = async () => {
    const {
      fromDate,
      toDate,
      email,
      fullName,
      phoneNumber,
      pickupLocation,
      serviceType,
      carBrand,
      carModel,
      carType,
    } = formData;
    // Before calling api validate the form fields
    if (
      fromDate &&
      toDate &&
      email &&
      fullName &&
      phoneNumber &&
      pickupLocation &&
      serviceType
    ) {
      showSpinner();
      try {
        const carItem = carsData.find(
          (car) =>
            car.carType === formData.carType &&
            car.brand === formData.carBrand &&
            car.model === formData.carModel
        );
        const serviceItem = carServicesList.find(
          (serviceItem) => serviceItem._id === formData.serviceType
        );

        const createOrderPayload = {
          fromDate,
          toDate,
          email,
          fullName,
          phoneNumber,
          pickupLocation,
          serviceType: serviceItem?.serviceTitle || "",
          serviceId: serviceType, // We are storing service id as service type in the form state
          carId: carItem?._id || "",
          carBrand,
          carModel,
          carType,
        };

        //  Create order from backend
        const bookingOrderResponse = await carService.createServiceBookingOrder(
          createOrderPayload
        );
        console.log({ bookingOrderResponse });
        // Load Razorpay script
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
          const options = {
            key: RAZORPAY_KEY_ID,
            amount: bookingOrderResponse.amount,
            currency: bookingOrderResponse.currency,
            name: "My App",
            description: "Test Transaction",
            order_id: bookingOrderResponse.orderId,
            handler: async function (response: {
              razorpay_payment_id: string;
              razorpay_order_id: string;
              razorpay_signature: string;
            }) {
              // 3. Verify payment
              const verifyRes = await carService.verifyServiceBookingPayment({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              });

              if (verifyRes.success) {
                alert("Payment successful!");
              } else {
                alert("Payment verification failed");
              }
            },
            prefill: {
              name: "Ram",
              email: "ram@example.com",
              contact: "9999999999",
            },
            theme: {
              color: "#3399cc",
            },
          };

          const rzp = new window.Razorpay(options);
          rzp.open();
        };
      } catch (error) {
        console.log(error);
        hideSpinner();
      } finally {
        hideSpinner();
        onModalClose();
      }
    } else {
      addToast("Error", "Must fill required fields !!", "error");
    }
  };

  const formCancelHandler = () => {
    setFormData({ ...initialFormData });
    setIsModalOpen(false);
  };

  const carBrandList: OptionType[] = useMemo(() => {
    if (carsData.length > 0 && formData.carType) {
      return carsData
        .filter((car) => car.carType === formData.carType)
        .map((item) => {
          return {
            label: item.brand,
            value: item.brand,
          };
        });
    }
    return [];
  }, [carsData, formData.carType]);

  const carModelList: OptionType[] = useMemo(() => {
    if (carsData.length > 0 && formData.carType && formData.carBrand) {
      return carsData
        .filter(
          (car) =>
            car.carType === formData.carType && car.brand === formData.carBrand
        )
        .map((item) => {
          return {
            label: item.model,
            value: item.model,
          };
        });
    }
    return [];
  }, [carsData, formData.carType, formData.carBrand]);

  const serviceList: OptionType[] = useMemo(() => {
    if (carServicesList.length > 0) {
      return carServicesList.map((service) => {
        return {
          label: service.serviceTitle,
          value: service._id,
        };
      });
    }
    return [];
  }, [carServicesList]);

  useEffect(() => {
    if (serviceId) {
      fetchCarServiceDetails(serviceId);
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
