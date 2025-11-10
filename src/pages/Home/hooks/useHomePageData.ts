import { useMemo, useState } from "react";
import type { ToastType } from "../../../context/GlobalContext";
import { carService } from "../../../services/CarService";
import type { AutoRentalForm, OptionType } from "../../../types/commonTypes";
import {
  INITIAL_AUTO_RENTAL_FORM_DATA,
  MAX_RENT_PERIOD_IN_DAYS,
} from "../../../appConstant";
import type { RentalStation } from "../../../types/RentalStation";
import {
  formatDateToYMD,
  getNextDate,
  getNextYear,
} from "../../../utils/commonUtils";

const useHomePageData = (
  addToast: (title: string, message: string, type: ToastType) => void,
  showSpinner: () => void,
  hideSpinner: () => void,
  rentalStations: RentalStation[]
) => {
  const [autoRentalFormData, setAutoRentalFormData] = useState<AutoRentalForm>(
    INITIAL_AUTO_RENTAL_FORM_DATA
  );

  const onChangeAutoRentalFormData = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setAutoRentalFormData((prev) => {
      const updated = { ...prev };
      updated[name as keyof AutoRentalForm] = value;

      return updated;
    });
  };

  const resetAutoRentalFormData = () => {
    setAutoRentalFormData(INITIAL_AUTO_RENTAL_FORM_DATA)
  }

  const validateFormFields = () => {
    const errorsList: { name: string; errorMessage: string }[] = [];

    const { carType, dropoffDate, email, pickupDate, pickupLocation } =
      autoRentalFormData;

    if (
      !carType.trim() ||
      !dropoffDate.trim() ||
      !email.trim() ||
      !pickupDate.trim() ||
      !pickupLocation.trim()
    ) {
      errorsList.push({
        name: "Required*",
        errorMessage: "Please fill the empty fields",
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

      // Pickup Date & Drop Off Date Validation
      if (pickupDate && dropoffDate) {
        const pickupDateObj = new Date(pickupDate);
        const dropoffDateObj = new Date(dropoffDate);
        if (
          pickupDateObj > getNextYear(new Date()) ||
          pickupDateObj.getDate() < new Date().getDate()
        ) {
          errorsList.push({
            name: "From Date",
            errorMessage: `From Date must be within ${formatDateToYMD(
              new Date()
            )} and ${formatDateToYMD(getNextYear(new Date()))}`,
          });
        }

        if (
          dropoffDateObj >
            getNextDate(pickupDateObj, MAX_RENT_PERIOD_IN_DAYS) ||
          dropoffDateObj < getNextDate(pickupDateObj)
        ) {
          errorsList.push({
            name: "To Date",
            errorMessage: `To Date must be within ${formatDateToYMD(
              getNextDate(pickupDateObj)
            )} and ${formatDateToYMD(
              getNextDate(pickupDateObj, MAX_RENT_PERIOD_IN_DAYS)
            )}`,
          });
        }
      }
    }
    return errorsList;
  };

  const handleSubmitAutoRental = async () => {
    const { carType, dropoffDate, email, pickupDate, pickupLocation } =
      autoRentalFormData;

    // Validate Form Input Fields
    const errorList = validateFormFields();

    if (errorList.length > 0) {
      errorList.forEach((errorItem) => {
        addToast(`Error: ${errorItem.name}`, errorItem.errorMessage, "error");
      });
      return;
    }

    if (
      carType.trim() ||
      dropoffDate.trim() ||
      email.trim() ||
      pickupDate.trim() ||
      pickupLocation.trim()
    ) {
      showSpinner();
      try {
        const autoRentalPayload = {
          email,
          carType,
          pickupDate,
          dropoffDate,
          pickupLocation,
        };
        const autoRentalResponse =
          await carService.createAutoRentalBookingOrder(autoRentalPayload);
        console.log(
          "submit function triggered",
          autoRentalFormData,
          autoRentalPayload
        );
        if (
          autoRentalResponse.statusCode === 201 &&
          autoRentalResponse.message
        ) {
          addToast("Success", autoRentalResponse.message, "success");
          resetAutoRentalFormData()
        }
      } catch (error) {
        addToast("Error", `${error}`, "error");
      } finally {
        hideSpinner();
      }
    }
  };

  const pickupLocationList: OptionType[] = useMemo(() => {
    if (rentalStations.length > 0) {
      return rentalStations.map((item) => ({
        label: item.locationAbbreviation,
        value: item._id,
      }));
    }
    return [];
  }, [rentalStations]);

  return {
    autoRentalFormData,
    pickupLocationList,
    onChangeAutoRentalFormData,
    handleSubmitAutoRental,
  };
};

export default useHomePageData;
