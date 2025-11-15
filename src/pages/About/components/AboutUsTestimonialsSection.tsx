import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";
import type { TestimonialProps } from "../../../types/commonTypes";

type AboutUsTestimonialsSectionProps = TestimonialProps;

const AboutUsTestimonialsSection: React.FC<AboutUsTestimonialsSectionProps> = ({
  testimonials,
}) => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand-gold tracking-[0.3em] uppercase text-sm mb-2">
            TESTIMONIALS
          </p>
          <h2 className="text-4xl font-bold text-brand-dark">
            What Our <span className="text-brand-gold">Clients Say</span>
          </h2>
        </div>
        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  );
};

export default AboutUsTestimonialsSection;
