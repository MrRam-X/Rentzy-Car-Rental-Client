import React from "react";
import ContactHeroSection from "./components/ContactHeroSection";
import ContactInfoCardsSection from "./components/ContactInfoCardsSection";
import ContactFormAndLocationSection from "./components/ContactFormAndLocationSection";
import { useGlobalContext } from "../../context/GlobalContext";
import useContactData from "./hooks/useContactData";

const Contact: React.FC = () => {
  const { addToast, showSpinner, hideSpinner } = useGlobalContext();
  const { contactFormData, onFormDataChangeHandler, onFormSubmitHandler } =
    useContactData(addToast, showSpinner, hideSpinner);
  return (
    <main className="font-outfit">
      {/* Contact Us Hero Section */}
      <ContactHeroSection />

      {/* Contact Info Cards Section */}
      <ContactInfoCardsSection />

      {/* Contact Form & Location Section */}
      <ContactFormAndLocationSection
        contactFormData={contactFormData}
        onFormDataChangeHandler={onFormDataChangeHandler}
        onFormSubmitHandler={onFormSubmitHandler}
      />
    </main>
  );
};

export default Contact;
