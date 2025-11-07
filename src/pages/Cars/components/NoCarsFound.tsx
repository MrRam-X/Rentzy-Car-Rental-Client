import React from "react";

type NoCarsFoundProps = {
    title: string;
    description: string;
}

const NoCarsFound: React.FC<NoCarsFoundProps> = ({ title, description}) => {
  return (
    <div className="min-h-[50vh] w-full border-2 border-dashed border-gray-300 rounded-3xl flex flex-col items-center justify-center text-center p-8">
      <div className="w-24 h-24 text-gray-300">
        {/*Car Robot SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8V6" />
          <circle
            cx="12"
            cy="5"
            r="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 12C4 10.8954 4.89543 10 6 10H18C19.1046 10 20 10.8954 20 12V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V12Z"
          />
          <rect
            x="7"
            y="12"
            width="3"
            height="2"
            rx="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="14"
            y="12"
            width="3"
            height="2"
            rx="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 16H15" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 20V21C5 21.5523 4.55228 22 4 22H3"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 20V21C19 21.5523 19.4477 22 20 22H21"
          />
        </svg>
      </div>

      {/* Text Content */}
      <h3 className="mt-6 text-2xl font-bold text-brand-dark">{title}</h3>
      <p className="mt-2 max-w-sm text-gray-500">
        {description}
      </p>
    </div>
  );
};

export default NoCarsFound;
