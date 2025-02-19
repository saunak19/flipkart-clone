import React, { useState } from "react";
import {
  FaUserCircle,
  FaStar,
  FaShoppingCart,
  FaHeart,
  FaGift,
} from "react-icons/fa";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId;

  // Handle mouse enter to show dropdown
  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Clear any existing timeout to prevent premature hiding
    setIsOpen(true);
  };

  // Handle mouse leave to hide dropdown after 10 seconds
  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 5000); 
  };

  // Clear the timeout if the user hovers back before the 10 seconds expire
  const handleMouseCancel = () => {
    clearTimeout(timeoutId);
  };

  return (
    <div>
      <div className="mx-5">
        <div
          className="relative align-middle"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Login Button */}
          <button className="px-10 py-1 text-blue-500 bg-white font-medium rounded-sm">
            Login
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div
              className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-sm"
              onMouseEnter={handleMouseCancel} // Cancel hide if hovering back over menu
              onMouseLeave={handleMouseLeave} // Restart 10-second timer if leaving again
            >
              {/* Arrow */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>

              <div>
                {/* Top Section */}
                <div className="flex justify-between items-center py-4 px-5 border-b border-gray-200">
                  <span className="text-gray-600 text-sm">New customer?</span>
                  <button className="text-blue-500 text-sm font-medium hover:underline">
                    Sign Up
                  </button>
                </div>

                {/* Menu Items */}
                <ul className="text-sm">
                  <li className="flex items-center gap-2 text-gray-800 py-4 px-5 hover:bg-gray-100 border-b border-gray-200">
                    <FaUserCircle className="text-blue-500" />
                    My Profile
                  </li>
                  <li className="flex items-center gap-2 text-gray-800 py-4 px-5 hover:bg-gray-100 border-b border-gray-200">
                    <FaStar className="text-blue-500" />
                    Flipkart Plus Zone
                  </li>
                  <li className="flex items-center gap-2 text-gray-800 py-4 px-5 hover:bg-gray-100 border-b border-gray-200">
                    <FaShoppingCart className="text-blue-500" />
                    Orders
                  </li>
                  <li className="flex items-center gap-2 text-gray-800 py-4 px-5 hover:bg-gray-100 border-b border-gray-200">
                    <FaHeart className="text-blue-500" />
                    Wishlist
                  </li>
                  <li className="flex items-center gap-2 text-gray-800 py-4 px-5 hover:bg-gray-100 border-b border-gray-200">
                    <FaGift className="text-blue-500" />
                    Rewards
                  </li>
                  <li className="flex items-center gap-2 text-gray-800 py-4 px-5 hover:bg-gray-100 border-b border-gray-200">
                    <FaGift className="text-blue-500" />
                    Gift Cards
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
