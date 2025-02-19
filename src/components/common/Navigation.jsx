import React from "react";
import { MdChevronRight } from "react-icons/md";

const Navigation = () => {
  return (
    <div>
      <div className="px-[16px] pt-[12px] bg-white">
        <div className="text-[12px] text-[#878787] mb-3 flex items-center">
          <span className="hover:text-[#2874f0]">Home</span>
          <MdChevronRight />
          <span className="text-[12px] text-[#878787] hover:text-[#2874f0]"> Audio & Video</span>
        </div>

        <div className="text-[12px] text-[#878787] mb-5">
          The all new{" "}
          <span className=" text-[#2874f0]">Samsung Galaxy Buds Pro</span>{" "}
          earphones will be launching on Jan 28th. Grab the best deal with
          Flipkart offers.
        </div>

        <div className="text-[12px] text-[#878787] mb-3">
          Also Check:
          <span className="text-[#2874f0]">
            {" "}
            sony headphones with mic, JBL xtreme 2, Sony Woofer, Lg Xboom
          </span>
        </div>
        <div className="text-[16px] text-[#212121] font-semibold">
          Audio & Video{" "}
          <span className="text-[12px] text-[#878787] font-normal">
            {" "}
            (Showing 1–40 products of 3,093 products)
          </span>
        </div>

        <div className="flex justify-between items-center mt-2">
          <div className="flex space-x-4 text-sm text-gray-700">
            <span className="cursor-pointer hover:text-[#2874f0] text-[14px] font-semibold text-[#21212]">Sort By</span>
            <span className="cursor-pointer text-[#2874f0] text-[14px] font-semibold  pb-[8px] border-b-2 border-[#2874f0]">Popularity</span>
            <span className="cursor-pointer hover:text-[#2874f0] text-[14px] font-semibold">
              Price -- Low to High
            </span>
            <span className="cursor-pointer hover:text-[#2874f0] text-[14px] font-semibold">
              Price -- High to Low
            </span>
            <span className="cursor-pointer hover:text-[#2874f0] text-[14px] font-semibold">
              Newest First
            </span>
            <span className="cursor-pointer hover:text-[#2874f0] text-[14px] font-semibold">Discount</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
