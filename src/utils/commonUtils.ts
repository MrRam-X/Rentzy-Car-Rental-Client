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

export function formatDateToYMD(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // months are 0-based
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function getNextDate(date: Date = new Date()): Date {
  const next = new Date(date);
  next.setDate(next.getDate() + 1);
  return next;
}