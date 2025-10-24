import React from "react";
import type { Expert } from "../../../types/commonTypes";

type ExpertsCardProps = {
  expert: Expert;
};

const ExpertsCard: React.FC<ExpertsCardProps> = ({ expert }) => {
  return (
    <div className="w-full lg:w-1/3 flex-shrink-0 px-4">
      <div className="group relative block rounded-3xl overflow-hidden shadow-lg">
        <img
          src={expert.imgName}
          alt={`A picture of ${expert.name}`}
          className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-white text-2xl font-bold">${expert.name}</h3>
          <p className="text-gray-300">${expert.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertsCard;
