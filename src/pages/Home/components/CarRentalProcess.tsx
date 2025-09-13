import React from 'react'

const CarRentalProcess: React.FC = () => {
  return (
          <section id="rental-process" className="py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* <!-- Section Header --> */}
          <div className="text-center mb-16">
            <p
              className="text-brand-gold font-semibold tracking-[0.2em] uppercase text-sm mb-2"
            >
              STEPS
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark">
              Car Rental <span className="text-brand-gold">Process</span>
            </h2>
          </div>

          {/* <!-- Process Grid --> */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-8">
            {/* <!-- Step 1 Card --> */}
            <div className="relative pt-10">
              <div
                className="relative bg-gray-100 rounded-3xl p-12 h-full transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div
                  className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-md"
                >
                  <span className="text-xl font-bold text-brand-dark">01.</span>
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">
                  Choose A Car
                </h3>
                <p className="text-gray-600">
                  View our range of cars, find your perfect car for the coming
                  days.
                </p>
              </div>
            </div>

            {/* <!-- Step 2 Card --> */}
            <div className="relative pt-10">
              <div
                className="relative bg-gray-100 rounded-3xl p-12 h-full transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div
                  className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-md"
                >
                  <span className="text-xl font-bold text-brand-dark">02.</span>
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">
                  Come In Contact
                </h3>
                <p className="text-gray-600">
                  Our advisor team is ready to help you with the booking process
                  or any questions.
                </p>
              </div>
            </div>

            {/* <!-- Step 3 Card --> */}
            <div className="relative pt-10">
              <div
                className="relative bg-gray-100 rounded-3xl p-12 h-full transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div
                  className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-md"
                >
                  <span className="text-xl font-bold text-brand-dark">03.</span>
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">
                  Enjoy Driving
                </h3>
                <p className="text-gray-600">
                  Receive the key and enjoy your car. We treat all our cars with
                  respect.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Informational Note --> */}
          <div
            className="flex justify-center items-center gap-3 mt-16 text-gray-600"
          >
            <div
              className="flex-shrink-0 w-6 h-6 bg-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center"
            >
              <span className="font-bold text-sm">i</span>
            </div>
            <p>
              If you've never rented a car before, we'll guide you through the
              process.
            </p>
          </div>
        </div>
      </section>
  )
}

export default CarRentalProcess