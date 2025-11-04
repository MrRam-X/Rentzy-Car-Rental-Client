import React from "react";
import {
  formatDateToYMD,
  getNextDate,
  getNextYear,
} from "../../../utils/commonUtils";
import {
  CAR_TYPES_OPTIONS,
  MAX_RENT_PERIOD_IN_DAYS,
} from "../../../appConstant";
import type { BookingForm, OptionType } from "../../../types/commonTypes";

type BookServiceFormProps = {
  formData: BookingForm;
  carBrandList: OptionType[];
  carModelList: OptionType[];
  serviceList: OptionType[];
  onFormDataChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  formCancelHandler: () => void;
  formSubmitHandler: () => void;
};

const BookServiceForm: React.FC<BookServiceFormProps> = ({
  formData,
  carBrandList,
  carModelList,
  serviceList,
  onFormDataChange,
  formCancelHandler,
  formSubmitHandler,
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
            From Date <span>*</span>
          </label>
          <input
            type="date"
            name="fromDate"
            min={formatDateToYMD(new Date())}
            max={formatDateToYMD(getNextYear(new Date()))}
            value={formData.fromDate}
            onChange={onFormDataChange}
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
            To Date (max: 20 days) <span>*</span>
          </label>
          <input
            type="date"
            name="toDate"
            disabled={!formData.fromDate}
            min={formatDateToYMD(
              getNextDate(
                formData.fromDate ? new Date(formData.fromDate) : new Date()
              )
            )}
            max={formatDateToYMD(
              getNextDate(new Date(formData.fromDate), MAX_RENT_PERIOD_IN_DAYS)
            )}
            value={formData.toDate}
            onChange={onFormDataChange}
            id="to-date"
            required
            className={`w-full bg-gray-100 rounded-lg border-transparent p-3 focus:outline-none focus:ring-2 focus:ring-brand-gold ${
              !formData.fromDate ? "cursor-not-allowed opacity-50" : ""
            }`}
          />
        </div>
        {/* Full Name */}
        <div className="sm:col-span-2">
          <label
            htmlFor="full-name"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Full Name <span>*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={onFormDataChange}
            id="full-name"
            required
            placeholder="Full name. e.g - Ram Prasad Baidya"
            className="w-full bg-gray-100 rounded-lg border-transparent p-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"
          />
        </div>
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Email <span>*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onFormDataChange}
            id="email"
            required
            placeholder="Email Address. e.g - you@example.com"
            className="w-full bg-gray-100 rounded-lg border-transparent p-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"
          />
        </div>
        {/* Phone Number */}
        <div>
          <label
            htmlFor="phone-number"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Phone Number <span>*</span>
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={onFormDataChange}
            id="phone-number"
            required
            placeholder="Mobile number. e.g - +912223334448"
            className="w-full bg-gray-100 rounded-lg border-transparent p-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"
          />
        </div>
        {/* Service Type */}
        <div className="sm:col-span-2">
          <label
            htmlFor="service-type"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Service Type <span>*</span>
          </label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={onFormDataChange}
            id="service-type"
            required
            className="w-full bg-gray-100 rounded-lg border-transparent p-3 focus:outline-none focus:ring-2 focus:ring-brand-gold appearance-none"
          >
            <option value="">Select a service</option>
            {serviceList.map((item) => {
              return (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
        {/* Pickup Location */}
        <div className="sm:col-span-2">
          <label
            htmlFor="pickup-location"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Pickup Location <span>*</span>
          </label>
          <input
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={onFormDataChange}
            id="pickup-location"
            required
            placeholder="Pickup Location. e.g - Area, District, State, Country, Pin"
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
            name="carType"
            value={formData.carType}
            onChange={onFormDataChange}
            id="car-type"
            className={`w-full bg-gray-100 rounded-lg border-transparent p-3 focus:outline-none focus:ring-2 focus:ring-brand-gold appearance-none ${
              !formData.carType ? "text-gray-400" : ""
            }`}
          >
            <option value="">Any</option>
            {CAR_TYPES_OPTIONS.map((item) => {
              return (
                <option
                  key={item.value}
                  value={item.value}
                  className="text-gray-700"
                >
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
        {/* Car Brand */}
        <div className="sm:col-span-2">
          <label
            htmlFor="car-brand"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Car Brand (Optional)
          </label>
          <select
            name="carBrand"
            value={formData.carBrand}
            onChange={onFormDataChange}
            id="car-brand"
            className={`w-full bg-gray-100 rounded-lg border-transparent p-3 focus:outline-none focus:ring-2 focus:ring-brand-gold appearance-none ${
              !formData.carBrand ? "text-gray-400" : ""
            }`}
          >
            <option value="">Any</option>
            {carBrandList.map((item) => {
              return (
                <option
                  key={item.value}
                  value={item.value}
                  className="text-gray-700"
                >
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
        {/* Car Model */}
        <div className="sm:col-span-2">
          <label
            htmlFor="car-Model"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Car Model (Optional)
          </label>
          <select
            name="carModel"
            value={formData.carModel}
            onChange={onFormDataChange}
            id="car-Model"
            className={`w-full bg-gray-100 rounded-lg border-transparent p-3 focus:outline-none focus:ring-2 focus:ring-brand-gold appearance-none ${
              !formData.carModel ? "text-gray-400" : ""
            }`}
          >
            <option value="">Any</option>
            {carModelList.map((item) => {
              return (
                <option
                  key={item.value}
                  value={item.value}
                  className="text-gray-700"
                >
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="mt-8 flex justify-end gap-4">
        <button
          onClick={formCancelHandler}
          id="cancel-booking-btn"
          type="button"
          className="bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={formSubmitHandler}
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
