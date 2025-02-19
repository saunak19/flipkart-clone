import React, { useState } from "react";
import { PiSortAscendingLight } from "react-icons/pi";
import { IoClose } from "react-icons/io5"; // Close icon
import MobileFilter from "./MobileFilter";

const FilterPhone = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section>
        <div className="grid grid-cols-2 border-y border-gray-200">
          <div>
            <div className="flex gap-1 items-center justify-center py-3 relative">
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
            <div
              className="flex gap-1 items-center justify-center border-b border-gray-200 py-3 cursor-pointer"
              onClick={openModal}
            >
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

   
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full h-full relative flex flex-col">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <IoClose size={30} />
            </button>
            <div className="p-5 flex-grow overflow-auto">
              <MobileFilter />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterPhone;
