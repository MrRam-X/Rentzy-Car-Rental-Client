import React from "react";
import Modal from "../Modal/Modal";
import BookingFormComponent from "./BookingFormComponent";
import type { BookingInput } from "../../../types/commonTypes";

type BookingFormSectionProps = {
  title: string;
  isDirty: boolean;
  isModalOpen: boolean;
  onModalClose: () => void;
  bookingFormData: {
    formInputFieldsList: BookingInput[];
    formCancelHandler: () => void;
    formSubmitHandler: () => void;
  };
};

const BookingFormSection: React.FC<BookingFormSectionProps> = ({
  title,
  isModalOpen,
  onModalClose,
  bookingFormData,
}) => {
  return (
    <Modal title={title} isOpen={isModalOpen} onClose={onModalClose}>
      <BookingFormComponent {...bookingFormData} />
    </Modal>
  );
};

export default BookingFormSection;
