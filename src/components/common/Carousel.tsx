import React, { useEffect, useRef, useState, type ReactNode } from "react";

type CarouselProps<T> = {
  list: T[];
  children: ReactNode;
};

const Carousel = <T,>({ list, children }: CarouselProps<T>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(
    window.innerWidth >= 1024 ? 3 : 1
  );

  const trackRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(list.length / slidesPerPage);

  // Update slidesPerPage on resize
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerPage(window.innerWidth >= 1024 ? 3 : 1);
      setCurrentIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Apply transform when index changes
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  const goNext = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const goToPage = (page: number) => {
    setCurrentIndex(page);
  };
  return (
    <>
      {/* Carousel Container */}
      <div id="services-carousel" className="relative max-w-6xl mx-auto">
        {/* Viewport */}
        <div className="overflow-hidden">
          {/* Track */}
          <div
            id="carousel-track"
            ref={trackRef}
            className="flex transition-transform duration-500 ease-in-out -mx-4"
          >
            {/* Carousel Cards */}
            {children}
          </div>
        </div>

        {/* Mobile Arrows */}
        <button
          id="prev-btn"
          onClick={goPrev}
          className={`lg:hidden absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 transition-colors mx-2 ${
            currentIndex === 0 ? "hidden" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-brand-dark"
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
          id="next-btn"
          onClick={goNext}
          className={`lg:hidden absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 transition-colors mx-2 ${
            currentIndex === totalPages - 1 ? "hidden" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-brand-dark"
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
      </div>

      {/* Slider Indicators */}
      <div
        id="indicator-container"
        className="hidden lg:flex justify-center mt-12 gap-3"
      >
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToPage(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex
                ? "bg-brand-gold"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </>
  );
};

export default Carousel;
