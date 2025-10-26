import React from "react";
import CarImageModal from "./CarImageModal";
import CarThumbnail from "./CarThumbnail";
import useImageGallery from "../hooks/useImageGallery";

type CarImageGalleryProps = {
  imageGalleryUris: string[];
  brand: string;
  model: string;
  carType: string;
};

const CarImageGallery: React.FC<CarImageGalleryProps> = ({
  imageGalleryUris,
  brand,
  carType,
  model,
}) => {
  const {
    currIdx,
    isGalleryModalOpen,
    currentImageIdxHandler,
    nextImageButtonHandler,
    prevImageButtonHandler,
    closeGalleryModal,
  } = useImageGallery(imageGalleryUris);
  return (
    <section id="gallery-v2" className="pb-10">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mt-12">
          <p className="text-brand-gold tracking-[0.3em] uppercase text-sm mb-2">
            View Car's
          </p>
          <h2 className="text-4xl font-bold text-brand-dark">
            Image <span className="text-brand-gold">Gallery</span>
          </h2>
        </div>
        {/* Thumbnail Grid */}
        <div
          id="thumbnail-grid"
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Thumbnails will be populated here by JavaScript */}
          {imageGalleryUris.length > 0 &&
            imageGalleryUris.map((item, idx) => {
              return (
                <CarThumbnail
                  key={`${idx}-${item}`}
                  carImageName={item}
                  brand={brand}
                  carType={carType}
                  model={model}
                  currentImageIdxHandler={currentImageIdxHandler}
                />
              );
            })}
        </div>
      </div>
      <CarImageModal 
        currIdx={currIdx}
        carType={carType}
        isGalleryModalOpen={isGalleryModalOpen}
        nextImageButtonHandler={nextImageButtonHandler}
        prevImageButtonHandler={prevImageButtonHandler}
        closeGalleryModal={closeGalleryModal}
        imageGalleryUris={imageGalleryUris}
      />
    </section>
  );
};

export default CarImageGallery;
