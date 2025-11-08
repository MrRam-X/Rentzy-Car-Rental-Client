import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import useCarDetailsData from "./hooks/useCarDetailsData";
import ContactForRenting from "../../components/common/ContactForRenting";
import CarDetailsHeroSection from "./components/CarDetailsHeroSection";
import GeneralInfoAndBookingSection from "./components/GeneralInfoAndBookingSection";
import CarImageGallery from "./components/CarImageGallery";
import RentalConditionsAccordion from "./components/RentalConditionsAccordion";
import BookingFormSection from "../../components/common/BookingForm/BookingFormSection";

const CarDetails: React.FC = () => {
  const { addToast, showSpinner, hideSpinner, carServicesList, carsData } =
    useGlobalContext();

  const {
    carDetailsData,
    isModalOpen,
    isFormDirty,
    formInputFieldsList,
    onModalOpen,
    onModalClose,
    formSubmitHandler,
    formCancelHandler,
  } = useCarDetailsData(
    addToast,
    showSpinner,
    hideSpinner,
    carServicesList,
    carsData
  );

  const bookServiceFormData = {
    formInputFieldsList,
    formCancelHandler,
    formSubmitHandler,
  };

  return (
    <main className="font-outfit">
      {/* Hero Section */}
      <CarDetailsHeroSection
        brand={carDetailsData?.brand || ""}
        model={carDetailsData?.model || ""}
        carType={carDetailsData?.carType || ""}
        primaryImageUri={carDetailsData?.primaryImageUri || ""}
      />

      {/* General Information Section */}
      <GeneralInfoAndBookingSection
        generalInformation={carDetailsData?.generalInformation || ""}
        benefitPoints={carDetailsData?.benefitPoints || []}
        priceCurrency={carDetailsData?.priceCurrency || ""}
        pricePerDay={carDetailsData?.pricePerDay || 0}
        airCondition={carDetailsData?.airCondition || false}
        doors={carDetailsData?.doors || 0}
        luggage={carDetailsData?.luggage || 0}
        minAgeForDrive={carDetailsData?.minAgeForDrive || 0}
        passengers={carDetailsData?.passengers || 0}
        transmission={carDetailsData?.transmission || ""}
        onModalOpen={onModalOpen}
      />

      {/* Image Gallery (with Lightbox Modal) */}
      <CarImageGallery
        brand={carDetailsData?.brand || ""}
        model={carDetailsData?.model || ""}
        carType={carDetailsData?.carType || ""}
        imageGalleryUris={carDetailsData?.imageGalleryUris || []}
      />

      {/* Rental Conditions Accordion */}
      <RentalConditionsAccordion
        rentalConditions={carDetailsData?.rentalConditions || []}
      />

      {/* Section: Interested In Renting */}
      <ContactForRenting />

      <BookingFormSection
        title="Book Your Car"
        isDirty={isFormDirty}
        isModalOpen={isModalOpen}
        onModalClose={onModalClose}
        bookingFormData={bookServiceFormData}
      />
    </main>
  );
};

export default CarDetails;
