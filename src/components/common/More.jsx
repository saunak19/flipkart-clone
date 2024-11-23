import React, { useState } from "react";
import {
  FaBell,
  FaQuestionCircle,
  FaChartLine,
  FaDownload,
} from "react-icons/fa";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

const MoreDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 5000); // 10 seconds delay to close
  };

  const handleMouseCancel = () => {
    clearTimeout(timeoutId);
  };

  return (
    <div className="relative mx-5">
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* More Button */}
        <div className="group flex items-center gap-1">
          {/* Button */}
          <button className="text-white font-bold">More</button>

          {/* Icon with rotation on hover */}
          <LuChevronDown className="text-white transform transition-transform duration-300 group-hover:rotate-180" />
        </div>
        {/* Dropdown Menu */}
        {isOpen && (
          <div
            className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-sm"
            onMouseEnter={handleMouseCancel} // Prevent close on hover back
            onMouseLeave={handleMouseLeave} // Close if leaving again
          >
            {/* Arrow */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>

            <ul className="text-sm">
              <li className="flex items-center gap-2 text-gray-800 py-4 px-5 hover:bg-gray-100 border-b border-gray-200">
                <FaBell className="text-blue-500" />
                Notification Preferences
              </li>
              <li className="flex items-center gap-2 text-gray-800 py-4 px-5 hover:bg-gray-100 border-b border-gray-200">
                <FaQuestionCircle className="text-blue-500" />
                24x7 Customer Care
              </li>
              <li className="flex items-center gap-2 text-gray-800 py-4 px-5 hover:bg-gray-100 border-b border-gray-200">
                <FaChartLine className="text-blue-500" />
                Advertise
              </li>
              <li className="flex items-center gap-2 text-gray-800 py-4 px-5 hover:bg-gray-100">
                <FaDownload className="text-blue-500" />
                Download App
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoreDropdown;
