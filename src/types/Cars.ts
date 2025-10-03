export interface Car {
  _id: string;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  priceCurrency: string;
  carType: string;
  generalInformation: string;
  benefitPoints: string[];
  doors: number;
  passengers: number;
  transmission: string;
  luggage: number;
  airCondition: boolean;
  minAgeForDrive: number;
  primaryImageUri: string;
  imageGalleryUris: string[];
  rentalConditions: {
    title: string;
    description: string;
  }[];
  available: boolean;
}
