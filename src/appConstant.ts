import { lazy, type ComponentType } from "react";
import { CarTypes } from "./types/commonTypes";
import testimonialSarahImg from "./assets/images/testimonials_sarah.jpeg";
import testimonialMichaelImg from "./assets/images/testimonials_michael.jpeg";
import testimonialJessicaImg from "./assets/images/testimonials_jessica.jpeg";
import expertJohnImg from "./assets/images/team_john.jpeg";
import expertJaneImg from "./assets/images/team_jane.jpg";
import expertPeterImg from "./assets/images/team_peter.jpg";
import expertEmilyImg from "./assets/images/team_emilly.jpeg";
import expertDavidImg from "./assets/images/team_david.jpg";
import expertSusanImg from "./assets/images/team_susan.jpeg";
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
  SEND_GET_IN_TOUCH_MESSAGE: "contact-us/get-in-touch/send",
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
  CARS: "/cars",
  SERVICES: "/services",
};

const NAVBAR_ROUTES = [
  { id: "nav-home", label: "Home", to: APP_ROUTE_NAMES.HOME },
  { id: "nav-about", label: "About", to: APP_ROUTE_NAMES.ABOUT },
  { id: "nav-services", label: "Services", to: APP_ROUTE_NAMES.SERVICES },
  { id: "nav-cars", label: "Cars", to: APP_ROUTE_NAMES.CARS },
  { id: "nav-contact", label: "Contact", to: APP_ROUTE_NAMES.CONTACT },
];

const APP_ROUTES: AppRoute[] = [
  { path: "/", Component: Home },
  { path: "/about", Component: About },
  { path: "/contact", Component: Contact },
  { path: "/cars", Component: Cars },
  { path: "/cars/:carId", Component: CarDetails },
  { path: "/services", Component: Services },
  { path: "/services/:serviceId", Component: CarServiceDetails },
];

const CAR_RENTAL_PROCESS_LIST = [
  {
    id: "1",
    title: "Choose A Car & Service",
    description: "Select a car and the type of service (purpose of rent)",
  },
  {
    id: "2",
    title: "Make Payment",
    description: "Proceed and complete the payment. Get the pdf receipt.",
  },
  {
    id: "3",
    title: "Enjoy Driving",
    description: "Get your car from the rental pickup station.",
  },
];

const ABOUT_US_SECTION_CONTENT = {
  SHORTEN_CONTENT:
    "At Rentzy, we believe mobility should be effortless, stylish, and tailored to your journey. Whether you're chasing adventure in a luxury SUV or navigating the city in a fuel-efficient compact, our fleet is curated to match your lifestyle.",
  EXTENDED_CONTENT:
    "We don’t stop at cars — from booking to drop-off, we’re here to make your rental experience smooth, flexible, and memorable. With transparent pricing, expanding locations, and a team that truly cares, Rentzy is redefining what it means to rent a car. We deliver trust, transparency, and top-tier service with every ride.",
  PERKS_LIST: [
    "Premium Sports & Luxury Vehicles",
    "Affordable Economy Options",
    "Personalized Rental Experience",
    "Dedicated Customer Support",
  ],
  TESTIMONIALS_LIST: [
    {
      quote:
        "Renting a car from Rentzy was an absolute breeze! The vehicle was immaculate and the customer service was top-notch. Highly recommended for a seamless experience.",
      userName: "Sarah L.",
      userDesignation: "Business Traveler",
      imgName: testimonialSarahImg,
    },
    {
      quote:
        "The best luxury car selection in the city. I was able to book a stunning convertible for the weekend with no hassle. The team was professional and accommodating.",
      userName: "Michael B.",
      userDesignation: "Weekend Renter",
      imgName: testimonialMichaelImg,
    },
    {
      quote:
        "As a frequent renter, I value reliability and efficiency. Rentzy delivers on both fronts every single time. Their process is straightforward and their cars are always in perfect condition.",
      userName: "Jessica P.",
      userDesignation: "Corporate Client",
      imgName: testimonialJessicaImg,
    },
  ],
  EXPERTS_LIST: [
    {
      name: "John Doe",
      designation: "Founder & CEO",
      imgName: expertJohnImg,
    },
    {
      name: "Jane Smith",
      designation: "Operations Manager",
      imgName: expertJaneImg,
    },
    {
      name: "Peter Jones",
      designation: "Fleet Director",
      imgName: expertPeterImg,
    },
    {
      name: "Emily White",
      designation: "Customer Relations",
      imgName: expertEmilyImg,
    },
    {
      name: "David Green",
      designation: "Lead Mechanic",
      imgName: expertDavidImg,
    },
    {
      name: "Susan Black",
      designation: "Marketing Head",
      imgName: expertSusanImg,
    },
  ],
};

const INITIAL_DISPLAY_CAR_FLEET_VEHICLES = 6;
const MAX_RENT_PERIOD_IN_DAYS = 20;
const CAR_ITEMS_PER_PAGE = 8;
const MAX_VISIBLE_PAGINATION_BUTTON = 3;
const MAX_CONTACT_FORM_SUBJECT_LENGTH = 20;
const MAX_CONTACT_FORM_MESSAGE_LENGTH = 100;

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

const INITIAL_CONTACT_FORM_DATA = {
  fullName: "",
  email: "",
  contactNumber: "",
  subject: "",
  message: "",
};

export {
  APP_ROUTE_NAMES,
  APP_ROUTES,
  NAVBAR_ROUTES,
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
  INITIAL_CONTACT_FORM_DATA,
  MAX_CONTACT_FORM_SUBJECT_LENGTH,
  MAX_CONTACT_FORM_MESSAGE_LENGTH,
  CAR_RENTAL_PROCESS_LIST,
  ABOUT_US_SECTION_CONTENT,
};
