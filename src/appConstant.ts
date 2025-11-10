import { lazy, type ComponentType } from "react";
import { CarTypes } from "./types/commonTypes";

export interface AppRoute {
  path: string;
  Component: ComponentType;
}

// Lazy imports (only load when needed)
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Cars = lazy(() => import("./pages/Cars"));
const Services = lazy(() => import("./pages/CarServices"));
const CarDetails = lazy(() => import("./pages/CarDetails"));
const CarServiceDetails = lazy(() => import("./pages/CarServiceDetails"));

const BASE_URL = import.meta.env.VITE_API_URL;
const BASE_IMAGE_URL = import.meta.env.VITE_APP_IMAGE_BASE_URL;
const RAZORPAY_KEY_ID = import.meta.env.VITE_APP_RAZORPAY_KEY_ID;
const API_URL = `${BASE_URL}/api/v1`;

const API_ROUTE_NAMES = {
  CARS: "cars",
  SERVICES: "services",
  CREATE_BOOKING: "bookings/create",
  VERIFY_PAYMENT: "bookings/verify-payment",
  GET_BOOKING_RECEIPT: "bookings/payment-receipt",
  RENTAL_STATIONS: "rental-stations",
  CREATE_AUTO_RENTAL: "auto-rentals/create",
};

const SPORTS_IMAGE_URL = `${BASE_IMAGE_URL}/Sports`;
const LUXURY_IMAGE_URL = `${BASE_IMAGE_URL}/Luxury`;
const SUVS_IMAGE_URL = `${BASE_IMAGE_URL}/SUV`;
const ELECTRIC_IMAGE_URL = `${BASE_IMAGE_URL}/Electric`;
const SEDAN_IMAGE_URL = `${BASE_IMAGE_URL}/Sedan`;
const ECONOMY_IMAGE_URL = `${BASE_IMAGE_URL}/Economy`;

const CARS_IMAGE_URL = {
  Electric: ELECTRIC_IMAGE_URL,
  SUV: SUVS_IMAGE_URL,
  Sports: SPORTS_IMAGE_URL,
  Sedan: SEDAN_IMAGE_URL,
  Luxury: LUXURY_IMAGE_URL,
  Economy: ECONOMY_IMAGE_URL,
};

const APP_ROUTE_NAMES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  CARS: "cars",
  SERVICES: "/services",
};

const APP_ROUTES: AppRoute[] = [
  { path: "/", Component: Home },
  { path: "/about", Component: About },
  { path: "/contact", Component: Contact },
  { path: "/cars", Component: Cars },
  { path: "/cars/:carId", Component: CarDetails },
  { path: "/services", Component: Services },
  { path: "/services/:serviceId", Component: CarServiceDetails },
];

const INITIAL_DISPLAY_CAR_FLEET_VEHICLES = 6;
const MAX_RENT_PERIOD_IN_DAYS = 20;
const CAR_ITEMS_PER_PAGE = 8;
const MAX_VISIBLE_PAGINATION_BUTTON = 3;

const CAR_TYPES_OPTIONS = [
  {
    label: "EV",
    value: CarTypes.Electric,
  },
  {
    label: "Luxury",
    value: CarTypes.Luxury,
  },
  {
    label: "Sedans",
    value: CarTypes.Sedan,
  },
  {
    label: "Sports",
    value: CarTypes.Sports,
  },
  {
    label: "SUVS",
    value: CarTypes.SUV,
  },
    {
    label: "Economy",
    value: CarTypes.Economy,
  },
];

const ERROR_MESSAGES = {
  FAILED_TO_FETCH: "Oops! Failed to fetch cars data. Try Again in sometime.",
  COULD_NOT_MATCH_CRITERIA:
    "We couldn't find any cars matching your criteria. Try adjusting your filters or clearing them to see all available vehicles.",
};

const INITIAL_BOOKING_FORM_DATA = {
  fromDate: "",
  toDate: "",
  fullName: "",
  email: "",
  phoneNumber: "",
  serviceType: "",
  pickupLocation: "",
  carType: "",
  carBrand: "",
  carModel: "",
};

const INITIAL_AUTO_RENTAL_FORM_DATA = {
  pickupLocation: "",
  pickupDate: "",
  dropoffDate: "",
  carType: "",
  email: "",
};

export {
  APP_ROUTE_NAMES,
  APP_ROUTES,
  INITIAL_DISPLAY_CAR_FLEET_VEHICLES,
  API_URL,
  API_ROUTE_NAMES,
  CARS_IMAGE_URL,
  CAR_TYPES_OPTIONS,
  RAZORPAY_KEY_ID,
  MAX_RENT_PERIOD_IN_DAYS,
  CAR_ITEMS_PER_PAGE,
  MAX_VISIBLE_PAGINATION_BUTTON,
  ERROR_MESSAGES,
  INITIAL_BOOKING_FORM_DATA,
  INITIAL_AUTO_RENTAL_FORM_DATA,
};
