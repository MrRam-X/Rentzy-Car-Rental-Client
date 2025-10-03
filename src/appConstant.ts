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
const CarDetails = lazy(() => import("./pages/CarDetails"))

const BASE_URL = import.meta.env.VITE_API_URL;
const API_URL = `${BASE_URL}/api/v1`;

const API_ROUTE_NAMES = {
  CARS: 'cars'
}

const APP_ROUTE_NAMES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  CARS: "cars",
  SERVICES: "/services"
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

export { APP_ROUTE_NAMES, APP_ROUTES, INITIAL_DISPLAY_CAR_FLEET_VEHICLES, API_URL, API_ROUTE_NAMES };
