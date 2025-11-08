import React from "react";
import type { BookingInput } from "../../../types/commonTypes";

type BookingFormComponentProps = {
  formInputFieldsList: BookingInput[];
  formCancelHandler: () => void;
  formSubmitHandler: () => void;
};

const BookingFormComponent: React.FC<BookingFormComponentProps> = ({
  formInputFieldsList,
  formCancelHandler,
  formSubmitHandler,
}) => {
  return (
    <form className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
        {formInputFieldsList.map((formInputField) => {
          return (
            <div
              key={formInputField.id}
              className={formInputField?.containerClassName || ""}
            >
              <label
                htmlFor={formInputField.id}
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                {formInputField.label}{" "}
                <span>{formInputField.required ? "*" : "(Optional)"}</span>
              </label>
              {formInputField.type === "select" ? (
                <select
                  id={formInputField.id}
                  name={formInputField.name}
                  value={formInputField.value}
                  onChange={formInputField.onChange}
                  required={formInputField.required}
                  disabled={formInputField.disabled}
                  className={`w-full bg-gray-100 rounded-lg border-transparent p-3 focus:outline-none focus:ring-2 focus:ring-brand-gold appearance-none ${
                    formInputField?.disabledClassName || ""
                  }`}
                >
                  {formInputField.options?.map((opt) => (
                    <option
                      key={opt.value}
                      value={opt.value}
                      className={
                        formInputField?.optionClassName
                          ? formInputField.optionClassName(opt.value)
                          : ""
                      }
                    >
                      {opt.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={formInputField.id}
                  type={formInputField.type}
                  name={formInputField.name}
                  value={formInputField.value}
                  onChange={formInputField.onChange}
                  required={formInputField.required}
                  disabled={formInputField.disabled}
                  placeholder={formInputField.placeholder}
                  min={formInputField.min}
                  max={formInputField.max}
                  className="w-full bg-gray-100 rounded-lg border-transparent p-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                />
              )}
            </div>
          );
        })}
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

export default BookingFormComponent;
