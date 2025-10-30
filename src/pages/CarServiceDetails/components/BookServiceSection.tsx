import React from "react";
import Modal from "../../../components/common/Modal/Modal";
import BookServiceForm from "./BookServiceForm";
import type { BookingForm, OptionType } from "../../../types/commonTypes";

type BookServiceSectionProps = {
  isDirty: boolean
  isModalOpen: boolean;
  onModalClose: () => void;
  bookServiceFormData: {
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
  isModalOpen,
  onModalClose,
  bookServiceFormData,
}) => {
  return (
    <Modal title="Book A Service" isOpen={isModalOpen} onClose={onModalClose}>
      <BookServiceForm
        {...bookServiceFormData}
      />
    </Modal>
  );
};

export default BookServiceSection;
