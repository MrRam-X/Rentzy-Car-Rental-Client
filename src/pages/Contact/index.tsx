import React from "react";
import ContactHeroSection from "./components/ContactHeroSection";
import ContactInfoCardsSection from "./components/ContactInfoCardsSection";
import ContactFormAndLocationSection from "./components/ContactFormAndLocationSection";

const Contact: React.FC = () => {
  return (
    <main className="font-outfit">
      {/* Contact Us Hero Section */}
      <ContactHeroSection />

      {/* Contact Info Cards Section */}
      <ContactInfoCardsSection />

      {/* Contact Form & Location Section */}
      <ContactFormAndLocationSection />
    </main>
  );
};

export default Contact;
