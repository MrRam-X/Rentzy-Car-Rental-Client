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
  addToast: (title: string, message: string, type: ToastType) => void;
  showSpinner: () => void;
  hideSpinner: () => void;
  carServicesList: CarService[];
  updateCarServiceList: (serviceList: CarService[]) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const [carServicesList, setCarServicesList] = useState<CarService[]>([]);

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

  useEffect(() => {
    fetchCarServicesData()
  }, [])

  const showSpinner = () => setIsLoading(true);
  const hideSpinner = () => setIsLoading(false);

  const value = useMemo(
    () => ({
      addToast,
      showSpinner,
      hideSpinner,
      carServicesList,
      updateCarServiceList,
    }),
    [carServicesList]
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
