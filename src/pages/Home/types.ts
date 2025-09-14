export type VehicleCardType = {
  name: string;
  price: number;
  category: string;
  image: string;
  specs: {
    seats: number;
    transmission: string;
    fuel: string;
    airbags: number;
    age: number;
  };
};

export type ServiceCardType = {
  id: number;
  title: string;
  imgSrc: string;
};

export type RentalCategoryType = {
    title: string;
    imageSrc: string;
}
