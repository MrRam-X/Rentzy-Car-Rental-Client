import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContext";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Spinner from "./components/spinner/Spinner";
import MainLayout from "./components/layout/MainLayout";
import RouteScrollAndFocus from "./components/layout/RouteFocusAndScroll";
import ErrorNotFound from "./pages/404Error";
import { APP_ROUTES } from "./appConstant";
import "./App.css";

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
          {/* scroll to top and focus main on every route change */}
          <RouteScrollAndFocus scrollTo="top" behavior="auto" focusSelector="main"/>
            <Routes>
              <Route element={<MainLayout />}>
                {APP_ROUTES.map(({ path, Component }) => (
                  <Route key={path} path={path} element={<Component />} />
                ))}
              </Route>
              <Route path="*" element={<ErrorNotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
