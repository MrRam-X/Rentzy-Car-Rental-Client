import { Component, type ErrorInfo, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { APP_ROUTE_NAMES } from "../../appConstant";

// Define the types for the component's props and state
interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  // Initialize the state
  public state: State = {
    hasError: false,
  };

  // This lifecycle method is called when an error is thrown in a descendant component.
  // It updates the state to trigger the rendering of the fallback UI.
  public static getDerivedStateFromError(_: Error): State {
    void _
    return { hasError: true };
  }

  // This lifecycle method is for logging the error information.
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can log this error to an external service like Sentry, LogRocket, etc.
    console.error("Uncaught error:", error, errorInfo);
  }

  // A function to reset the error state and attempt to re-render the children.
  private handleTryAgain = () => {
    this.setState({ hasError: false });
  };

  public render() {
    // If an error has occurred, render the fallback UI.
    if (this.state.hasError) {
      return (
        <main>
          <div className="bg-brand-dark text-white h-screen w-full flex items-center justify-center text-center p-4">
            <div className="flex flex-col items-center max-w-lg">
              {/* On-brand warning icon */}
              <div className="w-20 h-20 text-brand-gold mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold">
                Oops! Something Went Wrong
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                The page has encountered an unexpected error. Please try again
                or return to the homepage.
              </p>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                <button
                  onClick={(this.handleTryAgain)}
                  className="w-full sm:w-auto bg-brand-gold text-black font-bold py-3 px-8 rounded-full 
                             transition-all duration-300 ease-in-out
                             hover:bg-black hover:text-brand-gold hover:-translate-y-1"
                >
                  Try Again
                </button>
                <Link
                  to={APP_ROUTE_NAMES.HOME}
                  className="w-full sm:w-auto border-2 border-gray-400 text-white font-bold py-3 px-8 rounded-full 
                             transition-all duration-300 ease-in-out
                             hover:bg-white hover:text-black hover:border-white hover:-translate-y-1"
                >
                  Go Home
                </Link>
              </div>
            </div>
          </div>
        </main>
      );
    }

    // If there is no error, render the children as normal.
    return this.props.children;
  }
}

export default ErrorBoundary;
