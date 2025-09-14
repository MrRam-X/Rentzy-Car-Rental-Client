import React from "react";
import heroSectionImage from "../../assets/images/HeroSection.jpg";
import ContactForRenting from "../../components/common/ContactForRenting";
import AboutUsSection from "../../components/common/AboutUsSection";
import BookAutoRental from "./components/BookAutoRental";
import CarRentalProcess from "./components/CarRentalProcess";
import LuxuryCarFleet from "./components/LuxuryCarFleet/LuxuryCarFleet";
import OurServices from "./components/OurServices/OurServices";

const Home: React.FC = () => {
  return (
    <main className="font-outfit">
      {/* Hero Section */}
      <section
        className="relative h-screen w-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${heroSectionImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-white max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-brand-gold font-semibold tracking-widest uppercase mb-4">
              <span className="text-xl">▪</span> Premium
            </p>
            <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-4">
              Rental Car
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-4 mb-8">
              <p className="text-xl md:text-2xl font-medium">
                Bentley Bentayga
              </p>
              <p className="text-xl md:text-2xl font-bold text-brand-gold">
                ₹6500{" "}
                <span className="text-sm font-normal text-white">/ DAY</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="w-full sm:w-auto flex items-center justify-center gap-3 border-2 border-brand-gold bg-brand-gold text-black py-4 px-8 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300 ease-in-out hover:-translate-y-1"
              >
                <span>View Details</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            <a
              href="#"
              className="w-full sm:w-auto flex items-center justify-center gap-3 border-2 border-white text-white py-4 px-8 rounded-full transition-all duration-300 ease-in-out hover:bg-brand-gold hover:text-black hover:border-brand-gold hover:-translate-y-1"
            >
              <span>Rent Now</span>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17L17 7M17 12L17 7L12 7"
                />
              </svg>
            </a>
            </div>
          </div>
        </div>
        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-3">
          <button className="w-3 h-3 rounded-full bg-brand-gold"></button>
          <button className="w-3 h-3 rounded-full border-2 border-gray-400 hover:bg-gray-400"></button>
          <button className="w-3 h-3 rounded-full border-2 border-gray-400 hover:bg-gray-400"></button>
        </div>
      </section>
      {/* About Us Section */}
      <AboutUsSection />

      {/* Services Section Carousel*/}
      <OurServices />

      {/* Book Auto Rental */}
      <BookAutoRental />

      {/* Luxury Car Fleet Section */}
      <LuxuryCarFleet />

      {/* Rental Car Types Carousel*/}

      {/* Car Rental PROCESS */}
      <CarRentalProcess />

      {/* Contact For Renting */}
      <ContactForRenting />
    </main>
  );
};

export default Home;
