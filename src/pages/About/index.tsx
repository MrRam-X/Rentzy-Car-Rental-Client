import React from "react";
import AboutUsHeroSection from "./components/AboutUsHeroSection";
import AboutUsTestimonialsSection from "./components/AboutUsTestimonialsSection";
import AboutUsExpertsTeamSection from "./components/AboutUsExpertsTeamSection";
import AboutUsSection from "../../components/common/AboutUsSection";
import useAboutUsData from "../../hooks/useAboutUsData";

const About: React.FC = () => {
  const {
    mainContent,
    extendedContent,
    perksList,
    isAboutPage,
    EXPERTS_LIST,
    TESTIMONIALS_LIST,
  } = useAboutUsData();
  return (
    <main className="font-outfit" aria-labelledby="about-page">
      {/* About Us Hero Section */}
      <AboutUsHeroSection />

      {/* About Us Content Section */}
      <AboutUsSection
        mainContent={mainContent}
        extendedContent={extendedContent}
        perksList={perksList}
        isAboutPage={isAboutPage}
      />

      {/* Testimonials Section */}
      <AboutUsTestimonialsSection testimonials={TESTIMONIALS_LIST} />

      {/* Experts Team Section */}
      <AboutUsExpertsTeamSection experts={EXPERTS_LIST} />
    </main>
  );
};

export default About;
