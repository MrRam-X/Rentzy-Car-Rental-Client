import React from "react";
import Modal from "../../../components/common/Modal/Modal";
import BookServiceForm from "./BookServiceForm";

type BookServiceSectionProps = {
  isModalOpen: boolean;
  onModalClose: () => void;
  cancelButtonHandler: () => void;
  submitButtonHandler: () => void;
};

const BookServiceSection: React.FC<BookServiceSectionProps> = ({
  isModalOpen,
  onModalClose,
  cancelButtonHandler,
  submitButtonHandler,
}) => {
  return (
    <Modal title="Book A Service" isOpen={isModalOpen} onClose={onModalClose}>
      <BookServiceForm
        cancelButtonHandler={cancelButtonHandler}
        submitButtonHandler={submitButtonHandler}
      />
    </Modal>
  );
};

export default BookServiceSection;
