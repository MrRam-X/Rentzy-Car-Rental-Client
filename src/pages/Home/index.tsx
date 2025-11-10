import React from "react";
import ContactForRenting from "../../components/common/ContactForRenting";
import AboutUsSection from "../../components/common/AboutUsSection";
import BookAutoRental from "./components/BookAutoRental";
import CarRentalProcess from "./components/CarRentalProcess";
import OurServices from "./components/OurServices/OurServices";
import CarRentalCategories from "./components/CarRentalCategories/CarRentalCategories";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "../../context/GlobalContext";
import useHomePageData from "./hooks/useHomePageData";

const Home: React.FC = () => {
  const { addToast, showSpinner, hideSpinner, rentalStations, carsData } = useGlobalContext();
  const {
    autoRentalFormData,
    pickupLocationList,
    categoriesList,
    handleSubmitAutoRental,
    onChangeAutoRentalFormData,
  } = useHomePageData(addToast, showSpinner, hideSpinner, rentalStations, carsData);
  return (
    <main className="font-outfit">
      {/* Hero Section */}
      <HeroSection />

      {/* About Us Section */}
      <AboutUsSection />

      {/* Services Section Carousel*/}
      <OurServices />

      {/* Book Auto Rental */}
      <BookAutoRental
        autoRentalFormData={autoRentalFormData}
        pickupLocationList={pickupLocationList}
        handleSubmitAutoRental={handleSubmitAutoRental}
        onChangeAutoRentalFormData={onChangeAutoRentalFormData}
      />

      {/* Luxury Car Fleet Section (Disabled for MVP) */}
      {/* <LuxuryCarFleet /> */}

      {/* Car Rental Categories Carousel*/}
      <CarRentalCategories categoriesList={categoriesList}/>

      {/* Car Rental PROCESS */}
      <CarRentalProcess />

      {/* Contact For Renting */}
      <ContactForRenting />
    </main>
  );
};

export default Home;
