import { useState } from "react";

const useImageGallery = (imageGalleryArr: string[]) => {
  const [currIdx, setCurrIdx] = useState<number>(0); // Default index of image gallery is 0
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState<boolean>(false);

  const nextImageButtonHandler = () => {
    setCurrIdx((prev) => (prev + 1) % imageGalleryArr.length);
  };

  const prevImageButtonHandler = () => {
    setCurrIdx((prev) =>
      prev === 0
        ? imageGalleryArr.length - 1
        : (prev - 1) % imageGalleryArr.length
    );
  };

  const currentImageIdxHandler = (imageName: string) => {
    setCurrIdx(imageGalleryArr.findIndex((item) => item === imageName) || 0);
    if (!isGalleryModalOpen) setIsGalleryModalOpen(true);
  };

  const closeGalleryModal = () => {
    setIsGalleryModalOpen(false);
  };

  return {
    currIdx,
    isGalleryModalOpen,
    nextImageButtonHandler,
    prevImageButtonHandler,
    currentImageIdxHandler,
    closeGalleryModal,
  };
};

export default useImageGallery;
