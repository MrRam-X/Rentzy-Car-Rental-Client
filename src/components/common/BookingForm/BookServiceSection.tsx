import React from "react";
import Modal from "../Modal/Modal";
import type { OptionType } from "../../../types/commonTypes";
import type { BookingForm } from "../../../types/commonTypes";
import BookingFormComponent from "./BookingFormComponent";


type BookServiceSectionProps = {
  title: string;
  isDirty: boolean
  isModalOpen: boolean;
  onModalClose: () => void;
  bookingFormData: {
    formData: BookingForm
    carBrandList: OptionType[]
    carModelList: OptionType[]
    serviceList: OptionType[]
    onFormDataChange: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void
    formCancelHandler: () => void
    formSubmitHandler: () => void
  }
};

const BookServiceSection: React.FC<BookServiceSectionProps> = ({
  title,
  isModalOpen,
  onModalClose,
  bookingFormData,
}) => {
  return (
    <Modal title={title} isOpen={isModalOpen} onClose={onModalClose}>
      <BookingFormComponent
        {...bookingFormData}
      />
    </Modal>
  );
};

export default BookServiceSection;
