import React from "react";

type BookServiceFormProps = {
  cancelButtonHandler: () => void;
  submitButtonHandler: () => void;
};

const BookServiceForm: React.FC<BookServiceFormProps> = ({
  cancelButtonHandler,
  submitButtonHandler,
}) => {
  return (
    <form className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
        {/* From Date */}
        <div>
          <label
            htmlFor="from-date"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            From Date
          </label>
          <input
            type="date"
            name="from_date"
            id="from-date"
            required
            className="w-full bg-gray-100 rounded-lg border-transparent p-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"
          />
        </div>
        {/* To Date */}
        <div>
          <label
            htmlFor="to-date"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            To Date
          </label>
          <input
            type="date"
            name="to_date"
            id="to-date"
            required
            className="w-full bg-gray-100 rounded-lg border-transparent p-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"
          />
        </div>
        {/* Full Name */}
        <div className="sm:col-span-2">
          <label
            htmlFor="full-name"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            name="full_name"
            id="full-name"
            required
            placeholder="John Doe"
            className="w-full bg-gray-100 rounded-lg border-transparent p-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"
          />
        </div>
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="you@example.com"
            className="w-full bg-gray-100 rounded-lg border-transparent p-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"
          />
        </div>
        {/* Phone Number */}
        <div>
          <label
            htmlFor="phone-number"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Phone Number
          </label>
          <input
            type="tel"
            name="phone_number"
            id="phone-number"
            required
            placeholder="+1 (555) 000-0000"
            className="w-full bg-gray-100 rounded-lg border-transparent p-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"
          />
        </div>
        {/* Service Type */}
        <div className="sm:col-span-2">
          <label
            htmlFor="service-type"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Service Type
          </label>
          <select
            name="service_type"
            id="service-type"
            required
            className="w-full bg-gray-100 rounded-lg border-transparent p-3 focus:outline-none focus:ring-2 focus:ring-brand-gold appearance-none"
          >
            <option value="">Select a service</option>
            <option value="airport">Airport Drive</option>
            <option value="corporate">Corporate Rental</option>
            <option value="vip">VIP Transfer</option>
          </select>
        </div>
        {/* Pickup Location */}
        <div className="sm:col-span-2">
          <label
            htmlFor="pickup-location"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Pickup Location
          </label>
          <input
            type="text"
            name="pickup_location"
            id="pickup-location"
            required
            placeholder="Enter address or airport name"
            className="w-full bg-gray-100 rounded-lg border-transparent p-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"
          />
        </div>
        {/* Car Type */}
        <div className="sm:col-span-2">
          <label
            htmlFor="car-type"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Car Type (Optional)
          </label>
          <select
            name="car_type"
            id="car-type"
            className="w-full bg-gray-100 rounded-lg border-transparent p-3 focus:outline-none focus:ring-2 focus:ring-brand-gold appearance-none"
          >
            <option value="">Any</option>
            <option value="suv">SUV</option>
            <option value="sedan">Sedan</option>
            <option value="sports">Sports Car</option>
          </select>
        </div>
      </div>

      <div className="mt-8 flex justify-end gap-4">
        <button
          onClick={cancelButtonHandler}
          id="cancel-booking-btn"
          type="button"
          className="bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={submitButtonHandler}
          type="button"
          className="bg-brand-gold text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors"
        >
          Book Now
        </button>
      </div>
    </form>
  );
};

export default BookServiceForm;
