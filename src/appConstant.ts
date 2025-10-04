import { lazy, type ComponentType } from "react";

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

const BASE_URL = import.meta.env.VITE_API_URL;
const BASE_IMAGE_URL = import.meta.env.VITE_APP_IMAGE_BASE_URL;
const API_URL = `${BASE_URL}/api/v1`;

const API_ROUTE_NAMES = {
  CARS: "cars",
};

const SPORTS_IMAGE_URL = `${BASE_IMAGE_URL}/Sports`;
const LUXURY_IMAGE_URL = `${BASE_IMAGE_URL}/Luxury`;
const SUVS_IMAGE_URL = `${BASE_IMAGE_URL}/SUV`;
const ELECTRIC_IMAGE_URL = `${BASE_IMAGE_URL}/Electric`;
const SEDAN_IMAGE_URL = `${BASE_IMAGE_URL}/Sedan`;

const CARS_IMAGE_URL = {
  "Electric": ELECTRIC_IMAGE_URL,
  "SUV": SUVS_IMAGE_URL,
  "Sports": SPORTS_IMAGE_URL,
  "Sedan": SEDAN_IMAGE_URL,
  "Luxury": LUXURY_IMAGE_URL,
}

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
  { path: "/cars/:id", Component: CarDetails },
  { path: "/services", Component: Services },
];

const INITIAL_DISPLAY_CAR_FLEET_VEHICLES = 6;

export {
  APP_ROUTE_NAMES,
  APP_ROUTES,
  INITIAL_DISPLAY_CAR_FLEET_VEHICLES,
  API_URL,
  API_ROUTE_NAMES,
  CARS_IMAGE_URL,
};
