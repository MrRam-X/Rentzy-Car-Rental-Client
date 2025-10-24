import React from "react";
import type { Testimonial } from "../../../types/commonTypes";

type TestimonialsCardProps = {
  item: Testimonial
};

const TestimonialsCard: React.FC<TestimonialsCardProps> = ({ item }) => {
  return (
    <div className="flex-shrink-0 w-full p-4">
      <div className="bg-white rounded-2xl p-8 shadow-md">
        <p className="text-gray-600 italic">"${item.quote}"</p>
        <div className="flex items-center mt-6">
          <img
            src={item.imgName}
            alt={`A Picture of ${item.userName}`}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div className="ml-4">
            <p className="font-bold text-brand-dark">${item.userName}</p>
            <p className="text-sm text-gray-500">${item.userDesignation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
