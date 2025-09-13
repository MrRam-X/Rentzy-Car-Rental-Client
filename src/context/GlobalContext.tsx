import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import Spinner from "../components/spinner/Spinner";
import { ToasterContainer } from "../components/toast/Toaster";

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
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [toasts, setToasts] = useState<ToastProps[]>([]);

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

  const showSpinner = () => setIsLoading(true);
  const hideSpinner = () => setIsLoading(false);

  const value = useMemo(
    () => ({
      addToast,
      showSpinner,
      hideSpinner,
    }),
    []
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
