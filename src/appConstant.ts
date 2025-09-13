import { lazy, type ComponentType } from "react";

export interface AppRoute {
  path: string;
  Component: ComponentType;
}

// Lazy imports (only load when needed)
const Home = lazy(() => import("./pages/Home"));

const APP_ROUTE_NAMES = {
  HOME: "/",
};

const APP_ROUTES: AppRoute[] = [{ path: "/", Component: Home }];

export { APP_ROUTE_NAMES, APP_ROUTES };
