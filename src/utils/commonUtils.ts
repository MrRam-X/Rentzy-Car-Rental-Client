import { CARS_IMAGE_URL } from "../appConstant";

export const generateImageUrl = (imageUri: string, typeName: string) => {
  return `${
    CARS_IMAGE_URL[typeName as keyof typeof CARS_IMAGE_URL]
  }/${imageUri}`;
};

export const getActiveAccordionClass = (isSameService: boolean) => {
  return isSameService
    ? "bg-brand-gold border border-brand-gold"
    : "bg-gray-100 border border-gray-300";
};
