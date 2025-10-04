import { CARS_IMAGE_URL } from "../appConstant";

export const generateImageUrl = (imageUri: string, typeName: string) => {
  return `${
    CARS_IMAGE_URL[typeName as keyof typeof CARS_IMAGE_URL]
  }/${imageUri}`;
};
