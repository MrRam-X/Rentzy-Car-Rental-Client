import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContext";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Spinner from "./components/spinner/Spinner";
import MainLayout from "./components/layout/MainLayout";
import { APP_ROUTES } from "./appConstant";
import ErrorNotFound from "./pages/404Error";
import "./App.css";

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
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
