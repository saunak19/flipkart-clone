import React, { useState } from "react";

const Pagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  return (
    <>
      <div className="flex items-center justify-between mt-6 border-y py-4">
        <p className="text-sm text-[#212121] mx-3 font-semibold">
          Page {currentPage} of {totalPages}
        </p>
        <ul className="flex items-center space-x-2">
          
          {Array.from(
            { length: Math.min(10, totalPages) },
            (_, i) => i + 1
          ).map((page) => (
            <li
              key={page}
              onClick={() => handlePageClick(page)}
              className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "text-gray-800 hover:bg-gray-200"
              }`}
            >
              {page}
            </li>
          ))}
          
          <li
            onClick={handleNextClick}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            NEXT
          </li>
        </ul>
        <div></div>
      </div>
    </>
  );
};

export default Pagination;
