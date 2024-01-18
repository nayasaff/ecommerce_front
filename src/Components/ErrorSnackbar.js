import React, {useEffect} from "react";

const ErrorSnackbar = ({ isOpen, onClose, message }) => {
    const displayMessage = message || "Error";
  
    useEffect(() => {
      let timeoutId;
      if (isOpen) {
        timeoutId = setTimeout(() => {
          onClose();
        }, 5000);
      }
  
      return () => {
        clearTimeout(timeoutId);
      };
    }, [isOpen, onClose]);
  
    return (
      <div
        className={`${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } fixed bottom-4 left-1/2 transform -translate-x-1/2 transition-transform duration-300 ease-in-out bg-red-600 border border-red-700 w-96 px-6 py-3 rounded-md shadow-md`}
      >
        <div className="flex items-center justify-between">
          <p className="text-white">{displayMessage}</p>
          <button
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  };

  export default ErrorSnackbar