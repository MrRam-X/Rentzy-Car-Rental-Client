import { useState } from "react";
import type { Testimonial } from "../../../types/commonTypes";

const useTestimonialsCarousel = (testimonials: Testimonial[]) => {
    const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return {
    index,
    prevSlide,
    nextSlide
  }
}

export default useTestimonialsCarousel