import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContext";
import Spinner from "./components/spinner/Spinner";
import MainLayout from "./components/layout/MainLayout";
import { APP_ROUTES } from "./appConstant";
import ErrorNotFound from "./pages/404Error";
import './App.css'


function App() {
  return (
    <GlobalContextProvider>
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
    </GlobalContextProvider>
  );
}

export default App;
