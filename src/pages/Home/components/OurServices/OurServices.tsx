import React from "react";
import corporateDriveImage from "../../../../assets/images/CorporateDriveImage.jpg";
import hireWithDriverImage from "../../../../assets/images/HireWithDriver.jpg";
import airportDriveImage from "../../../../assets/images/AirportDrive.jpg";
import weddingCarImage from "../../../../assets/images/WeddingCar.jpeg";
import cityTourImage from "../../../../assets/images/cityTour.jpeg";
import selfDriveRentalImage from "../../../../assets/images/SelfDriveRental.jpeg";
import Carousel from "../../../../components/common/Carousel";
import ServiceCardList from "./ServiceCardList";

const servicesList = [
  {
    id: 1,
    title: "Corporate Car Rental",
    imgSrc: corporateDriveImage,
  },
  {
    id: 2,
    title: "Car Rental with Driver",
    imgSrc: hireWithDriverImage,
  },
  {
    id: 3,
    title: "Airport Drive",
    imgSrc: airportDriveImage,
  },
  {
    id: 4,
    title: "Wedding Car Service",
    imgSrc: weddingCarImage,
  },
  {
    id: 5,
    title: "City Tours",
    imgSrc: cityTourImage,
  },
  {
    id: 6,
    title: "Self-Drive Rentals",
    imgSrc: selfDriveRentalImage,
  },
];

const OurServices: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* <!-- Section Header --> */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-brand-gold tracking-[0.3em] uppercase text-sm mb-2">
            WHAT WE DO
          </p>
          <h2 className="text-4xl font-bold text-brand-dark">
            Our <span className="text-brand-gold">Services</span>
          </h2>
        </div>

        <Carousel list={servicesList}>
          <ServiceCardList servicesList={servicesList}/>
        </Carousel>
      </div>
    </section>
  );
};

export default OurServices;
