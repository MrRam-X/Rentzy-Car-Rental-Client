import React from "react";
import imgAboutUsSection from "../../assets/images/AboutUsEmployeeImage.jpg"

const AboutUsSection: React.FC = () => {
  return (
    //   <!-- About Us Section -->
    <section className="py-12 px-6 md:px-12 lg:px-20 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl">
        {/* <!-- Left Content --> */}
        <div className="text-center md:text-left">
          <p className="uppercase font-semibold text-sm tracking-[0.2em] text-brand-gold mb-2">
            Rentzy
          </p>
          <h2 className="text-3xl font-bold leading-snug mb-4">
            We Are More Than <br />
            <span className="text-brand-gold">A Car Rental Company</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Car repair quisque sodales dui ut varius vestibulum drana tortor
            turpis porttitor tellus eu euismod nisl massa nutod in the miss
            volume place urna lacinia eros nunt urna mauris vehicula rutrum in
            the miss on volume interdum.
          </p>

          {/* <!-- Feature List --> */}
          <ul className="space-y-4 mb-6">
            <li className="flex items-center justify-center md:justify-start space-x-3">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-gray-800">Sports and Luxury Cars</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-3">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-gray-800">Economy Cars</span>
            </li>
          </ul>

          {/* <!-- Button --> */}
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-brand-gold text-black hover:bg-black hover:text-brand-gold transition-colors duration-500 font-medium rounded-full shadow"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        {/* <!-- Right Image --> */}
        <div className="flex justify-center md:justify-end">
          <img
            src={imgAboutUsSection}
            alt="Employee Closing Deal With Customer"
            className="rounded-2xl w-full max-w-md object-cover lg:max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
