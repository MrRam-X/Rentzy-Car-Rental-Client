import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import Spinner from "../components/spinner/Spinner";
import { ToasterContainer } from "../components/toast/Toaster";
import type { CarService } from "../types/CarService";
import { carService } from "../services/CarService";
import type { Car } from "../types/Cars";
import type { RentalStation } from "../types/RentalStation";

export type ToastType = "success" | "error" | "info" | "warning";

export interface ToastProps {
  id: string;
  title: string;
  message: string;
  type: ToastType;
}

interface GlobalContextProviderProps {
  children: ReactNode;
}

interface GlobalContextType {
  carServicesList: CarService[];
  carsData: Car[];
  rentalStations: RentalStation[];
  addToast: (title: string, message: string, type: ToastType) => void;
  showSpinner: () => void;
  hideSpinner: () => void;
  updateCarServiceList: (serviceList: CarService[]) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const [carServicesList, setCarServicesList] = useState<CarService[]>([]);
  const [carsData, setCarsData] = useState<Car[]>([]);
  const [rentalStations, setRentalStations] = useState<RentalStation[]>([]);

  const addToast = (title: string, message: string, type: ToastType) => {
    const id = crypto.randomUUID();
    setToasts((currentToasts) => [
      ...currentToasts,
      { id, title, message, type },
    ]);
  };

  const removeToast = (id: string) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );
  };

  const updateCarServiceList = (serviceList: CarService[]) =>
    setCarServicesList([...serviceList]);

  const fetchCarServicesData = async () => {
    showSpinner();
    try {
      const data = await carService.getAllCarServices();
      setCarServicesList(data);
    } catch (err) {
      console.log("Failed to load car services.", err);
    } finally {
      hideSpinner();
    }
  };

  const fetchCarsData = async () => {
    showSpinner();
    try {
      const data = await carService.getAllCars();
      setCarsData(data);
    } catch (err) {
      console.log("Failed to load cars.", err);
    } finally {
      hideSpinner();
    }
  };

  const fetchRentalStationsData = async () => {
    showSpinner();
    try {
      const data = await carService.getAllRentalStations();
      setRentalStations(data);
    } catch (err) {
      console.log("Failed to load rental stations.", err);
    } finally {
      hideSpinner();
    }
  };

  useEffect(() => {
    fetchCarServicesData();
    fetchCarsData();
    fetchRentalStationsData();
  }, []);

  const showSpinner = () => setIsLoading(true);
  const hideSpinner = () => setIsLoading(false);

  const value = useMemo(
    () => ({
      carsData,
      carServicesList,
      rentalStations,
      addToast,
      showSpinner,
      hideSpinner,
      updateCarServiceList,
    }),
    [carServicesList, carsData, rentalStations]
  );

  return (
    <GlobalContext.Provider value={value}>
      {isLoading && <Spinner />}
      <ToasterContainer toasts={toasts} removeToast={removeToast} />
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be within a GlobalContextProvider");
  }
  return context;
};
