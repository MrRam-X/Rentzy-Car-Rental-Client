import React, { useEffect } from "react";
import type { ToastProps } from "../../context/GlobalContext";

// --- Individual Toast Component ---
interface ToastComponentProps extends ToastProps {
  onClose: (id: string) => void;
}

const Toast: React.FC<ToastComponentProps> = ({
  id,
  title,
  message,
  type,
  onClose,
}) => {
  // Automatically close the toast after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, 5000);

    // Cleanup the timer if the component is unmounted
    return () => {
      clearTimeout(timer);
    };
  }, [id, onClose]);

  // --- Icon & Color Definitions ---
  const icons = {
    success: <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>,
    error: <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>,
    warning: <svg className="w-6 h-6 text-brand-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.21 3.03-1.742 3.03H4.42c-1.532 0-2.492-1.696-1.742-3.03l5.58-9.92zM10 5a1 1 0 011 1v3a1 1 0 11-2 0V6a1 1 0 011-1zm1 5a1 1 0 10-2 0v2a1 1 0 102 0v-2z" clipRule="evenodd" /></svg>,
    info: <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>,
  };
  const colors = {
    success: "text-green-800",
    error: "text-red-800",
    warning: "text-yellow-800",
    info: "text-blue-800",
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-4 flex items-start gap-3 toast-enter toast-enter-active">
      <div className="flex-shrink-0">{icons[type]}</div>
      <div className="flex-grow">
        <p className={`font-bold ${colors[type]}`}>{title}</p>
        <p className="text-sm text-gray-600 mt-1">{message}</p>
      </div>
      <div className="flex-shrink-0">
        <button className="toast-close-btn text-gray-400 hover:text-gray-600" onClick={() => onClose(id)}>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

// --- Toaster Container Component ---
interface ToasterContainerProps {
  toasts: ToastProps[];
  removeToast: (id: string) => void;
}

export const ToasterContainer: React.FC<ToasterContainerProps> = ({
  toasts,
  removeToast,
}) => {
  return (
    // This container is fixed to the top-right of the screen
    // It has a very high z-index to appear on top of everything
    <div
      id="toast-container"
      className="fixed top-4 right-4 w-full max-w-sm z-[200] space-y-3"
    >
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={removeToast} />
      ))}
    </div>
  );
};
