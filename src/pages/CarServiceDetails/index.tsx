import React from "react";
import BookServiceSection from "./components/BookServiceSection";
import CarServiceDetailsAccordion from "./components/CarServiceDetailsAccordion";
import CarServiceDetailsHeroSection from "./components/CarServiceDetailsHeroSection";
import CarServiceDetailsSection from "./components/CarServiceDetailsSection";
import useCarServiceDetails from "./hooks/useCarServiceDetails";

const CarServiceDetails: React.FC = () => {
  const {
    carServiceDetailsData,
    carServicesList,
    isModalOpen,
    onModalOpen,
    onModalClose,
    cancelButtonHandler,
    submitButtonHandler,
  } = useCarServiceDetails();

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
        carServicesList={carServicesList}
      />

      {/* SECTION: RENTAL CONDITIONS ACCORDION */}
      <CarServiceDetailsAccordion
        serviceConditions={carServiceDetailsData?.serviceConditions || []}
      />

      {/* Service Booking Section */}
      <BookServiceSection
        isModalOpen={isModalOpen}
        onModalClose={onModalClose}
        cancelButtonHandler={cancelButtonHandler}
        submitButtonHandler={submitButtonHandler}
      />
    </main>
  );
};

export default CarServiceDetails;
