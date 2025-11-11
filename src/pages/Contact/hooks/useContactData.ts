import { useState } from "react";
import type { ContactForm } from "../../../types/Contact";
import {
  INITIAL_CONTACT_FORM_DATA,
  MAX_CONTACT_FORM_MESSAGE_LENGTH,
  MAX_CONTACT_FORM_SUBJECT_LENGTH,
} from "../../../appConstant";
import type { ToastType } from "../../../context/GlobalContext";
import { carService } from "../../../services/CarService";

const useContactData = (
  addToast: (title: string, message: string, type: ToastType) => void,
  showSpinner: () => void,
  hideSpinner: () => void
) => {
  const [contactFormData, setContactFormData] = useState<ContactForm>(
    INITIAL_CONTACT_FORM_DATA
  );

  const onFormDataChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setContactFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetFormData = () => {
    setContactFormData(INITIAL_CONTACT_FORM_DATA);
  };

  const validateFormFields = () => {
    const errorsList: { name: string; errorMessage: string }[] = [];
    const { email, fullName, contactNumber, subject, message } =
      contactFormData;

    if (
      !email.trim() ||
      !fullName.trim() ||
      !contactNumber.trim() ||
      !subject.trim() ||
      !message.trim()
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
      if (contactNumber) {
        const phoneNumberRegex = /^(?:\+91)?[0-9]{10}$/; // With Indian Dial Code (+91)
        const isPhoneNumberValid = phoneNumberRegex.test(contactNumber);

        if (!isPhoneNumberValid) {
          errorsList.push({
            name: "Phone Number",
            errorMessage:
              "Phone Number should be either 10 digits or followed by dial code (+91)",
          });
        }
      }

      // Subject Validation
      if (
        subject &&
        subject.toString().length > MAX_CONTACT_FORM_SUBJECT_LENGTH
      ) {
        errorsList.push({
          name: "Subject",
          errorMessage: `Subject Field cannot exceed character length of ${MAX_CONTACT_FORM_SUBJECT_LENGTH}`,
        });
      }

      // Message Validation
      if (
        message &&
        message.toString().length > MAX_CONTACT_FORM_MESSAGE_LENGTH
      ) {
        errorsList.push({
          name: "Message",
          errorMessage: `Message Field cannot exceed character length of ${MAX_CONTACT_FORM_MESSAGE_LENGTH}`,
        });
      }
    }
    return errorsList;
  };

  const onFormSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const { email, fullName, contactNumber, subject, message } =
      contactFormData;

    // Validate Form Fields before calling api
    const errorList = validateFormFields();
    if (errorList.length > 0) {
      errorList.forEach((errorItem) => {
        addToast(`Error: ${errorItem.name}`, errorItem.errorMessage, "error");
      });
      return;
    }
    if (
      email.trim() &&
      fullName.trim() &&
      contactNumber.trim() &&
      subject.trim() &&
      message.trim()
    ) {
      showSpinner();
      try {
        console.log("function triggered", { contactFormData });
        // api calling function
        const messageResponse = await carService.sendGetInTouchMessage(
          contactFormData
        );
        if (messageResponse.statusCode === 201) {
          addToast("Sucess", `${messageResponse.message}`, "success");
          resetFormData();
        }
      } catch (err) {
        console.log(err);
        hideSpinner();
        resetFormData();
      } finally {
        hideSpinner();
        resetFormData();
      }
    }
  };

  return {
    contactFormData,
    onFormDataChangeHandler,
    onFormSubmitHandler,
  };
};

export default useContactData;
