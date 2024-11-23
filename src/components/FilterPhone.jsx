import React from "react";
import { PiSortAscendingLight } from "react-icons/pi";

const FilterPhone = () => {
  return (
    <section>
      <div className="grid grid-cols-2 border-y border-gray-200">
        <div>
          <div className="flex gap-1 items-center justify-center  py-3 relative">
            {/* Sort Content */}
            <div className="flex gap-1 items-center">
              <PiSortAscendingLight size={18} />
              <span className="text-[14px]">Sort</span>
            </div>

            {/* Custom Height Border-e */}
            <div className="absolute right-0 top-4 bottom-3 w-[1.5px] bg-[#D5D7DB]"></div>
          </div>
        </div>
        <div>
          <div className="flex gap-1 items-center justify-center border-b border-gray-200 py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <line
                x1="3"
                y1="8"
                x2="21"
                y2="8"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="12" cy="8" r="1.5" fill="currentColor" />
              <line
                x1="3"
                y1="16"
                x2="21"
                y2="16"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="18" cy="16" r="1.5" fill="currentColor" />
            </svg>
            <span className="text-[14px]">Filter</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterPhone;
