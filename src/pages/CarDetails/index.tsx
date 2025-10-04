import React from "react";
import ContactForRenting from "../../components/common/ContactForRenting";
import useCarDetailsData from "./hooks/useCarDetailsData";
import CarDetailsHeroSection from "./components/CarDetailsHeroSection";
import GeneralInfoAndBookingSection from "./components/GeneralInfoAndBookingSection";
import CarImageGallery from "./components/CarImageGallery";
import RentalConditionsAccordion from "./components/RentalConditionsAccordion";

const CarDetails: React.FC = () => {
  const { carDetailsData } = useCarDetailsData();
  
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
      />

      {/* Image Gallery (with Lightbox Modal) */}
      <CarImageGallery 
        brand={carDetailsData?.brand || ""}
        model={carDetailsData?.model || ""}
        carType={carDetailsData?.carType || ""}
        imageGalleryUris={carDetailsData?.imageGalleryUris || []}
      />

      {/* Rental Conditions Accordion */}
      <RentalConditionsAccordion />

      {/* Section: Interested In Renting */}
      <ContactForRenting />
    </main>
  );
};

export default CarDetails;
