import { useEffect, useMemo, useState } from "react";
import type { CarService } from "../../../types/CarService";
import { type ToastType } from "../../../context/GlobalContext";
import { useParams } from "react-router-dom";
import { carService } from "../../../services/CarService";
import type { BookingForm, OptionType } from "../../../types/commonTypes";
import type { Car } from "../../../types/Cars";
import { MAX_RENT_PERIOD_IN_DAYS, RAZORPAY_KEY_ID } from "../../../appConstant";
import {
  formatDateToYMD,
  getNextDate,
  getNextYear,
} from "../../../utils/commonUtils";

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

  // Form Validation
  const validateFormFields = () => {
    const errorsList: { name: string; errorMessage: string }[] = [];
    const {
      fromDate,
      toDate,
      email,
      fullName,
      phoneNumber,
      pickupLocation,
      serviceType,
    } = formData;

    if (
      !fromDate.trim() ||
      !toDate.trim() ||
      !email.trim() ||
      !fullName.trim() ||
      !phoneNumber.trim() ||
      !pickupLocation.trim() ||
      !serviceType.trim()
    ) {
      errorsList.push({
        name: "All",
        errorMessage: "Required fields can't be empty",
      });
    } else {
      // Email Validation
      if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid = emailRegex.test(email);
        if (!isEmailValid) {
          errorsList.push({
            name: "Email",
            errorMessage: "Email is not valid",
          });
        }
      }

      // From Date & To Date Validation
      if (fromDate && toDate) {
        const fromDateObj = new Date(fromDate);
        const toDateObj = new Date(toDate);
        if (
          fromDateObj > getNextYear(new Date()) ||
          fromDateObj.getDate() < new Date().getDate()
        ) {
          errorsList.push({
            name: "From Date",
            errorMessage: `From Date must be within ${formatDateToYMD(
              new Date()
            )} and ${formatDateToYMD(getNextYear(new Date()))}`,
          });
        }

        if (
          toDateObj > getNextDate(fromDateObj, MAX_RENT_PERIOD_IN_DAYS) ||
          toDateObj < getNextDate(fromDateObj)
        ) {
          errorsList.push({
            name: "To Date",
            errorMessage: `To Date must be within ${formatDateToYMD(
              getNextDate(fromDateObj)
            )} and ${formatDateToYMD(
              getNextDate(fromDateObj, MAX_RENT_PERIOD_IN_DAYS)
            )}`,
          });
        }
      }

      // Full Name Validation
      if (fullName) {
        const fullNameRegex = /^(?:[A-Z][a-z]*)(?: [A-Z][a-z]*)*$/;
        const isFullNameValid = fullNameRegex.test(fullName);

        if (fullName.length > 20 || !isFullNameValid) {
          errorsList.push({
            name: "Full Name",
            errorMessage:
              "Full Name must be under 20 chars and follow '{first} {middle(optional)} {last}' naming pattern",
          });
        }
      }

      // Mobile Number Validation
      if (phoneNumber) {
        const phoneNumberRegex = /^(?:\+91)?[0-9]{10}$/; // With Indian Dial Code (+91)
        const isPhoneNumberValid = phoneNumberRegex.test(phoneNumber);

        if (!isPhoneNumberValid) {
          errorsList.push({
            name: "Phone Number",
            errorMessage:
              "Phone Number should be either 10 digits or followed by dial code (+91)",
          });
        }
      }

      // Pickup Location Validation
      if (pickupLocation) {
        // Matches: "Area, District, State, Country, 123456"
        const pickupAddressRegex =
          /^([A-Za-z ]+), ([A-Za-z ]+), ([A-Za-z ]+), ([A-Za-z ]+), (\d{6})$/;
        const isPickupAddressValid = pickupAddressRegex.test(pickupLocation);

        if (!isPickupAddressValid) {
          errorsList.push({
            name: "Pickup Location",
            errorMessage:
              "Pickup location is not valid. It should follow 'Area, District, State, Country, Pin code' pattern",
          });
        }
      }

      // Service Type Validation
      if (serviceType) {
        const isServiceIdExist = carServicesList.find(
          (service) => service._id === serviceType
        );
        if (!isServiceIdExist) {
          errorsList.push({
            name: "Service Type",
            errorMessage: "No car service exists of the provided type",
          });
        }
      }
    }
    return errorsList;
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
    const errorList = validateFormFields();

    if (errorList.length > 0) {
      errorList.forEach((errorItem) => {
        addToast(`Error: ${errorItem.name}`, errorItem.errorMessage, "error");
      });
      return;
    }
    if (
      fromDate.trim() &&
      toDate.trim() &&
      email.trim() &&
      fullName.trim() &&
      phoneNumber.trim() &&
      pickupLocation.trim() &&
      serviceType.trim()
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
        if (bookingOrderResponse.statusCode === 201) {
          addToast("Success", "Booking Order has been created", "success");
        }
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
                addToast("Success", "Payment successful!", "success");
                // 4. Fetch receipt PDF from backend
                const blob = await carService.getServiceBookingReceipt(
                  response.razorpay_order_id
                );

                // 5. Trigger download in browser
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.download = `receipt-${response.razorpay_order_id}.pdf`;
                document.body.appendChild(link);
                link.click();
                link.remove();
                window.URL.revokeObjectURL(url);
              } else {
                addToast("Error", "Payment verification failed", "error");
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
