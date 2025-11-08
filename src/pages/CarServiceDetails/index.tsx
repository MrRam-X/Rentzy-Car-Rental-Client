import React from "react";
import BookServiceSection from "../../components/common/BookingForm/BookingFormSection";
import CarServiceDetailsAccordion from "./components/CarServiceDetailsAccordion";
import CarServiceDetailsHeroSection from "./components/CarServiceDetailsHeroSection";
import CarServiceDetailsSection from "./components/CarServiceDetailsSection";
import useCarServiceDetails from "./hooks/useCarServiceDetails";
import { useGlobalContext } from "../../context/GlobalContext";

const CarServiceDetails: React.FC = () => {
  const { addToast, showSpinner, hideSpinner, carServicesList, carsData } =
    useGlobalContext();

  const {
    carServiceDetailsData,
    isModalOpen,
    isFormDirty,
    formData,
    serviceList,
    carBrandList,
    carModelList,
    onFormDataChange,
    formCancelHandler,
    formSubmitHandler,
    onModalOpen,
    onModalClose,
  } = useCarServiceDetails(
    addToast,
    showSpinner,
    hideSpinner,
    carServicesList,
    carsData
  );

  const bookServiceFormData = {
    formData,
    serviceList,
    carBrandList,
    carModelList,
    onFormDataChange,
    formCancelHandler,
    formSubmitHandler,
  };

  return (
    <main className="font-outfit">
      {/* Service Details Hero Section */}
      <CarServiceDetailsHeroSection
        carServiceDetailsData={carServiceDetailsData}
        onModalOpen={onModalOpen}
      />

      {/* Service Details */}
      <CarServiceDetailsSection
        carServiceDetailsData={carServiceDetailsData}
        carServicesList={carServicesList || []}
      />

      {/* SECTION: RENTAL CONDITIONS ACCORDION */}
      <CarServiceDetailsAccordion
        serviceConditions={carServiceDetailsData?.serviceConditions || []}
      />

      {/* Service Booking Section */}
      <BookServiceSection
        title="Book A Service"
        isDirty={isFormDirty}
        isModalOpen={isModalOpen}
        onModalClose={onModalClose}
        bookingFormData={bookServiceFormData}
      />
    </main>
  );
};

export default CarServiceDetails;
