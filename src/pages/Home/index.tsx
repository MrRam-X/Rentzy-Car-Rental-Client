import React from "react";
import ContactForRenting from "../../components/common/ContactForRenting";
import AboutUsSection from "../../components/common/AboutUsSection";
import BookAutoRental from "./components/BookAutoRental";
import CarRentalProcess from "./components/CarRentalProcess";
import LuxuryCarFleet from "./components/LuxuryCarFleet/LuxuryCarFleet";
import OurServices from "./components/OurServices/OurServices";
import CarRentalCategories from "./components/CarRentalCategories/CarRentalCategories";
import HeroSection from "./components/HeroSection";

const Home: React.FC = () => {
  return (
    <main className="font-outfit">
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Us Section */}
      <AboutUsSection />

      {/* Services Section Carousel*/}
      <OurServices />

      {/* Book Auto Rental */}
      <BookAutoRental />

      {/* Luxury Car Fleet Section */}
      <LuxuryCarFleet />

      {/* Car Rental Categories Carousel*/}
      <CarRentalCategories />

      {/* Car Rental PROCESS */}
      <CarRentalProcess />

      {/* Contact For Renting */}
      <ContactForRenting />
    </main>
  );
};

export default Home;
