import React from "react";

const TopBannerS = () => {
  return (
    <div>
      <div className="flex gap-2 py-2 px-3">
        <div className="display-ruby border p-1 rounded">
          <img src="/star-img.png" className="w-[32px]" alt="" />
          <span className="text-[12px] text-[#212121] break-words mx-1">Top Rated </span>
        </div>
        <div className="display-ruby border p-1 rounded-sm">
          <img src="/discount.png" className="w-[32px]" alt="" />
          <span className="text-[12px] text-[#212121] break-words mx-1">50% or more</span>
        </div>
      </div>
    </div>
  );
};

export default TopBannerS;
