import React from "react";
import bgBookAutoRental from "../../../assets/images/HeroSection.jpg";
import type { AutoRentalForm, OptionType } from "../../../types/commonTypes";
import {
  CAR_TYPES_OPTIONS,
  MAX_RENT_PERIOD_IN_DAYS,
} from "../../../appConstant";
import {
  formatDateToYMD,
  getNextDate,
  getNextYear,
} from "../../../utils/commonUtils";

type BookAutoRentalProps = {
  autoRentalFormData: AutoRentalForm;
  pickupLocationList: OptionType[];
  onChangeAutoRentalFormData: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  handleSubmitAutoRental: () => Promise<void>;
};

const BookAutoRental: React.FC<BookAutoRentalProps> = ({
  autoRentalFormData,
  pickupLocationList,
  handleSubmitAutoRental,
  onChangeAutoRentalFormData,
}) => {
  return (
    <section
      className="w-full h-auto bg-fixed bg-cover bg-center relative sm:h-[500px] py-24 flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: `url(${bgBookAutoRental})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 w-full px-4">
        <p className="text-brand-gold tracking-[0.3em] uppercase text-sm mb-2">
          Rent Now
        </p>
        <h1 className="text-white text-4xl font-bold mb-8">Book Auto Rental</h1>
        <div className="bg-white rounded-2xl lg:rounded-full shadow-lg flex flex-col lg:flex-row items-center p-2 max-w-6xl mx-auto">
          <div className="w-full flex flex-wrap lg:flex-nowrap items-center text-xs">
            {/* Email */}
            <div className="w-full md:w-1/2 lg:flex-1 p-2">
              <div className="relative w-full">
                <input
                  type="text"
                  name="email"
                  value={autoRentalFormData.email}
                  onChange={onChangeAutoRentalFormData}
                  className="w-full bg-transparent outline-none py-3 pl-4 pr-10 lg:border-r border-gray-200"
                  placeholder="Email Id"
                />
              </div>
            </div>
            {/* Car Type */}
            <div className="w-full md:w-1/2 lg:flex-1 p-2">
              <div className="relative w-full">
                <select
                  name="carType"
                  value={autoRentalFormData.carType}
                  onChange={onChangeAutoRentalFormData}
                  className="w-full bg-transparent outline-none py-3 pl-4 pr-10 appearance-none lg:border-r border-gray-200"
                >
                  <option className="text-gray-400" value="">
                    Choose Car Type
                  </option>
                  {CAR_TYPES_OPTIONS.map((item) => {
                    return (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    );
                  })}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                  <svg
                    className="fill-current h-4 w-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Pick Up Location */}
            <div className="w-full md:w-1/2 lg:flex-1 p-2">
              <div className="relative w-full">
                <select
                  name="pickupLocation"
                  value={autoRentalFormData.pickupLocation}
                  onChange={onChangeAutoRentalFormData}
                  className="w-full bg-transparent outline-none py-3 pl-4 pr-10 appearance-none lg:border-r border-gray-200"
                >
                  <option value="">Pick Up Location</option>
                  {pickupLocationList.map((item) => {
                    return (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    );
                  })}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                  <svg
                    className="fill-current h-4 w-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Pick Up Date */}
            <div className="w-full md:w-1/2 lg:flex-1 p-2">
              <div className="relative w-full">
                <input
                  type="date"
                  name="pickupDate"
                  value={autoRentalFormData.pickupDate}
                  onChange={onChangeAutoRentalFormData}
                  min={formatDateToYMD(new Date())}
                  max={formatDateToYMD(getNextYear(new Date()))}
                  className="w-full bg-transparent outline-none py-3 pl-4 pr-10 lg:border-r border-gray-200"
                  placeholder="Pick Up Date"
                />
              </div>
            </div>

            {/* Return Date */}
            <div className="w-full md:w-1/2 lg:flex-1 p-2">
              <div className="relative w-full">
                <input
                  type="date"
                  name="dropoffDate"
                  value={autoRentalFormData.dropoffDate}
                  onChange={onChangeAutoRentalFormData}
                  min={formatDateToYMD(
                    getNextDate(
                      autoRentalFormData.pickupDate
                        ? new Date(autoRentalFormData.pickupDate)
                        : new Date()
                    )
                  )}
                  max={formatDateToYMD(
                    getNextDate(
                      new Date(autoRentalFormData.pickupDate),
                      MAX_RENT_PERIOD_IN_DAYS
                    )
                  )}
                  className="w-full bg-transparent outline-none py-3 pl-4 pr-10 lg:border-r border-gray-200"
                  placeholder="Drop Off Date"
                />
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="w-full lg:w-auto p-2 text-xs">
            <button
              onClick={handleSubmitAutoRental}
              className="w-full lg:w-[150px] lg:p-[24px] bg-brand-gold text-black px-10 py-4 rounded-full hover:bg-black hover:text-brand-gold transition-colors duration-500"
            >
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAutoRental;
