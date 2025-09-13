import React from "react";
import heroSectionImage from "../../assets/images/HeroSection.jpg";

const Home: React.FC = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroSectionImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
    </section>
  );
};

export default Home;
