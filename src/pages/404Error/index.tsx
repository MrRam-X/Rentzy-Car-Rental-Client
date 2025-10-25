import React from "react";
import heroBgImage from "../../assets/images/HeroSection.jpg";
import { Link } from "react-router-dom";
import { APP_ROUTE_NAMES } from "../../appConstant";

const ErrorNotFound: React.FC = () => {
  return (
    <main>
      {/* Full-screen Hero Section */}
      <section
        className="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      >
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content Container */}
        <div className="relative z-10 px-4 text-white">
          <h1 className="text-8xl sm:text-9xl font-black text-brand-gold opacity-80">
            404
          </h1>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
            Page Not Found
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-lg text-gray-300">
            Sorry, the page you are looking for does not exist or has been
            moved. Let's get you back on track.
          </p>

          {/* Return to Home Button */}
          <Link
            to={APP_ROUTE_NAMES.HOME}
            className="mt-10 inline-flex items-center gap-3 bg-brand-gold text-black py-4 px-8 rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:-translate-y-1"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>Return to Home</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ErrorNotFound;
