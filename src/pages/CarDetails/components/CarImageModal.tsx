import React from "react";
import { generateImageUrl } from "../../../utils/commonUtils";

type CarImageModalProps = {
  currIdx: number;
  imageGalleryUris: string[];
  isGalleryModalOpen: boolean;
  carType: string;
  nextImageButtonHandler: () => void;
  prevImageButtonHandler: () => void;
  closeGalleryModal: () => void;
};

const CarImageModal: React.FC<CarImageModalProps> = ({
  currIdx,
  carType,
  imageGalleryUris,
  isGalleryModalOpen,
  nextImageButtonHandler,
  prevImageButtonHandler,
  closeGalleryModal,
}) => {
  return (
    <div
      id="lightbox-modal"
      className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[110] ${
        isGalleryModalOpen ? "flex" : "hidden"
      } items-center justify-center p-4`}
    >
      {/* Close Button */}
      <button
        onClick={closeGalleryModal}
        id="lightbox-close"
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-20"
      >
        <svg
          className="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Prev Button */}
      <button
        onClick={prevImageButtonHandler}
        id="lightbox-prev"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-20 p-2"
      >
        <svg
          className="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={nextImageButtonHandler}
        id="lightbox-next"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-20 p-2"
      >
        <svg
          className="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Image Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          id="lightbox-image"
          src={generateImageUrl(imageGalleryUris[currIdx], carType)}
          alt="Enlarged car view"
          className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default CarImageModal;
