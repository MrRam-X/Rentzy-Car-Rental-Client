import React from "react";

const ContactInfoCardsSection: React.FC = () => {
  return (
    <section id="contact-info" className="bg-gray-100 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: Email us */}
          <div className="group relative bg-white rounded-3xl p-8 overflow-hidden text-center sm:text-left transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-brand-gold">
            {/* Large Background Icon */}
            <div className="absolute -bottom-8 -right-8 text-gray-100 group-hover:text-black/10 transition-colors duration-300">
              <svg
                className="w-48 h-48"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.223V6h16zM4 18V9.044l7.386 5.762a.998.998 0 0 0 1.228 0L20 9.044 20.002 18H4z" />
              </svg>
            </div>

            <div className="relative z-10">
              {/* MODIFICATION: Added group-hover classNamees for icon color swap */}
              <div className="text-brand-gold inline-block mb-4 transition-colors duration-300 group-hover:text-brand-dark">
                <svg
                  className="w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.223V6h16zM4 18V9.044l7.386 5.762a.998.998 0 0 0 1.228 0L20 9.044 20.002 18H4z" />
                </svg>
              </div>
              {/* MODIFICATION: Added group-hover classNamees for text color change */}
              <h3 className="text-xl font-bold text-brand-dark transition-colors duration-300 group-hover:text-black">
                Email us
              </h3>
              <p className="text-gray-500 mt-1 transition-colors duration-300 group-hover:text-black/70">
                info@renax.com
              </p>
            </div>
          </div>

          {/* Card 2: Our address */}
          <div className="group relative bg-white rounded-3xl p-8 overflow-hidden text-center sm:text-left transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-brand-gold">
            <div className="absolute -bottom-8 -right-8 text-gray-100 group-hover:text-black/10 transition-colors duration-300">
              <svg
                className="w-48 h-48"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="text-brand-gold inline-block mb-4 transition-colors duration-300 group-hover:text-brand-dark">
                <svg
                  className="w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-dark transition-colors duration-300 group-hover:text-black">
                Our address
              </h3>
              <p className="text-gray-500 mt-1 transition-colors duration-300 group-hover:text-black/70">
                Dubai, Water Tower, Office 123
              </p>
            </div>
          </div>

          {/* Card 3: Opening Hours */}
          <div className="group relative bg-white rounded-3xl p-8 overflow-hidden text-center sm:text-left transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-brand-gold">
            <div className="absolute -bottom-8 -right-8 text-gray-100 group-hover:text-black/10 transition-colors duration-300">
              <svg
                className="w-48 h-48"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="text-brand-gold inline-block mb-4 transition-colors duration-300 group-hover:text-brand-dark">
                <svg
                  className="w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-dark transition-colors duration-300 group-hover:text-black">
                Opening Hours
              </h3>
              <p className="text-gray-500 mt-1 transition-colors duration-300 group-hover:text-black/70">
                Mon-Sun: 8 AM - 7 PM
              </p>
            </div>
          </div>

          {/* Card 4: Call us (Highlighted) */}
          <div className="group relative bg-white rounded-3xl p-8 overflow-hidden text-center sm:text-left transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-brand-gold">
            <div className="absolute -bottom-8 -right-8 text-black/10 transition-colors duration-300">
              <svg
                className="w-48 h-48"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.252 12.75c-1.13 0-2.161.393-3.013 1.026l-1.01-1.01a5.713 5.713 0 0 1 4.023-1.516V9.5c0-.169.054-.334.158-.474l.799-1.066a.502.502 0 0 1 .843.37V12h3.5c.276 0 .5.224.5.5s-.224.5-.5.5h-3.5v1.75a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.75zM19.999 2H4c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V4h16l.001 16H4z" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="text-brand-gold inline-block mb-4 transition-colors duration-300 group-hover:text-brand-dark">
                <svg
                  className="w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-dark transition-colors duration-300 group-hover:text-black">
                Call us
              </h3>
              <p className="text-black/70 mt-1 transition-colors duration-300 group-hover:text-black">
                +971 52-333-4444
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCardsSection;
