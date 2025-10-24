import React from "react";
import AboutUsHeroSection from "./components/AboutUsHeroSection";
import AboutUsTestimonialsSection from "./components/AboutUsTestimonialsSection";
import AboutUsExpertsTeamSection from "./components/AboutUsExpertsTeamSection";
import AboutUsSection from "../../components/common/AboutUsSection";

const testimonials = [
  {
    quote:
      "Renting a car from Rentzy was an absolute breeze! The vehicle was immaculate and the customer service was top-notch. Highly recommended for a seamless experience.",
    userName: "Sarah L.",
    userDesignation: "Business Traveler",
    imgName:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    quote:
      "The best luxury car selection in the city. I was able to book a stunning convertible for the weekend with no hassle. The team was professional and accommodating.",
    userName: "Michael B.",
    userDesignation: "Weekend Renter",
    imgName:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    quote:
      "As a frequent renter, I value reliability and efficiency. Rentzy delivers on both fronts every single time. Their process is straightforward and their cars are always in perfect condition.",
    userName: "Jessica P.",
    userDesignation: "Corporate Client",
    imgName:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const teamData = [
  {
    name: "John Doe",
    designation: "Founder & CEO",
    imgName:
      "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Jane Smith",
    designation: "Operations Manager",
    imgName:
      "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Peter Jones",
    designation: "Fleet Director",
    imgName:
      "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Emily White",
    designation: "Customer Relations",
    imgName:
      "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "David Green",
    designation: "Lead Mechanic",
    imgName:
      "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Susan Black",
    designation: "Marketing Head",
    imgName:
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const About: React.FC = () => {
  return (
    <main className="font-outfit">
      {/* About Us Hero Section */}
      <AboutUsHeroSection />

      {/* About Us Content Section */}
      <AboutUsSection />

      {/* Testimonials Section */}
      <AboutUsTestimonialsSection testimonials={testimonials} />

      {/* Experts Team Section */}
      <AboutUsExpertsTeamSection experts={teamData}/>
    </main>
  );
};

export default About;
