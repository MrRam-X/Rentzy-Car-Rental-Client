import React, { useEffect, useRef, useState } from "react";
import type { Car } from "../../../../types/Cars";
import { generateImageUrl } from "../../../../utils/commonUtils";
import CustomLinkButton from "../../../../components/common/Buttons/CustomLinkButton";

type HeroSectionCarouselProps = {
  carsList: Car[];
};
const HeroSectionCarousel: React.FC<HeroSectionCarouselProps> = ({
  carsList,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const updateCarousel = (newIndex: number) => {
    setCurrentIndex(newIndex);
  };

  const moveToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carsList.length);
  };

  const moveToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + carsList.length) % carsList.length);
  };

  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(moveToNext, 6000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  return (
    <section className="relative w-full h-screen bg-white overflow-hidden">
      {/* Track */}
      <div
        className="relative h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carsList.map((car, index) => (
          <div
            key={index}
            className={`hero-slide relative w-full h-full flex-shrink-0 bg-cover bg-center ${
              index === currentIndex ? "slide-active" : ""
            }`}
            style={{
              backgroundImage: `url('${generateImageUrl(
                car.primaryImageUri,
                car.carType
              )}')`,
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="container mx-auto h-full px-4 flex items-center justify-center relative z-10">
              <div className="w-full max-w-3xl text-center">
                <h1 className="slide-headline text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-10">
                  {car.carType} Cars <br/>
                  <span className="text-brand-gold">{`${car.brand} ${car.model}`}</span> <br />
                  <span className="text-xl md:text-2xl font-bold">Starting @{`${car.priceCurrency} ${car.pricePerDay}.00`} /DAY</span>
                </h1>
                {/* <div className="slide-description sm:space-x-4 mb-8">
                  <p className="text-xl md:text-5xl font-bold text-white">
                    {`${car.brand} ${car.model}`}
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-brand-gold">
                    {`${car.priceCurrency} ${car.pricePerDay}.00`}
                    <span className="text-sm font-normal text-white">
                      / DAY
                    </span>
                  </p>
                </div> */}
                <p className="slide-description mt-4 text-lg text-gray-200 max-w-xl mx-auto">
                  {car.generalInformation}
                </p>
                <div className="slide-buttons mt-8 flex flex-col sm:flex-row justify-center gap-4">
                  {/* View Details Button */}
                  <CustomLinkButton
                    redirectUrl={`/cars/${car._id}`}
                    borderClassName="border-2 border-brand-gold rounded-full"
                    colorClassName="bg-brand-gold text-black"
                    paddingClassName="py-4 px-8"
                    hoverClassName="hover:bg-white hover:text-black hover:border-white hover:-translate-y-1"
                    transitionClassName="transition-all duration-300 ease-in-out"
                    linkTitle="View Details"
                    iconElementName="RIGHT_ARROW"
                  />
                  {/* Rent Now Button */}
                  <CustomLinkButton
                    redirectUrl={"/cars"}
                    borderClassName="border-2 border-white rounded-full"
                    colorClassName="text-white"
                    paddingClassName="py-4 px-8"
                    hoverClassName="hover:bg-brand-gold hover:text-black hover:border-brand-gold hover:-translate-y-1"
                    transitionClassName="transition-all duration-300 ease-in-out"
                    linkTitle="All Cars"
                    iconElementName="TOP_RIGHT_ARROW"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => {
          stopAutoplay();
          moveToPrev();
          startAutoplay();
        }}
        className="hidden absolute top-1/2 left-4 sm:left-8 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-white/40 transition-colors"
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={() => {
          stopAutoplay();
          moveToNext();
          startAutoplay();
        }}
        className="hidden absolute top-1/2 right-4 sm:right-8 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-white/40 transition-colors"
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {carsList.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              stopAutoplay();
              updateCarousel(index);
              startAutoplay();
            }}
            className={`hero-indicator w-3 h-3 rounded-full border-2 border-white/50 hover:bg-white/50 transition-all duration-300 ${
              index === currentIndex ? "w-6 bg-white" : ""
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSectionCarousel;
