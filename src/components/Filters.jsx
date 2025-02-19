import React, { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { FiChevronLeft } from "react-icons/fi";
const Filters = () => {
  const [isAudioOpen, setIsAudioOpen] = useState(false);

  const toggleAudio = () => setIsAudioOpen(!isAudioOpen);
  return (
    <>
      <section>
        <div className="">
          <div className="pb-[12px] border-b border-gray-200">
            <div className="pt-[16px] px-[16px] pb[12px]">
              <div className="flex items-center justify-between ">
                <div>
                  <span className="text-[18px] text-[#212121] font-semibold">
                    Filters
                  </span>
                </div>
                <span className="text-[12px] text-[#2874f0] font-semibold cursor-pointer">
                  CLEAR ALL
                </span>
              </div>
              <div className="mt-[8px] grid grid-cols-2 gap-3 ">
                <div className="flex items-center border bg-[#E0E0E0] p-[8px]  rounded text-[12px] text-[#212121]">
                  <p>✕</p>
                  <span className="flex items-center ml-[8px] transition-all duration-300 ease-in-out hover:line-through">
                    3★ & above
                  </span>
                </div>
                <div className="flex items-center border bg-[#E0E0E0] p-[8px]  rounded text-[12px] text-[#212121]">
                  <p>✕</p>
                  <span className="flex items-center ml-[8px] duration-300 ease-in-out hover:line-through">
                    4★ & above
                  </span>
                </div>
                <div className="flex items-center border bg-[#E0E0E0] p-[8px]  rounded text-[12px] text-[#212121]">
                  <p>✕</p>
                  <span className="flex items-center ml-[8px] duration-300 ease-in-out hover:line-through">
                    Min-₹5000+
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-[16px] border-b border-gray-200">
            <div>
              <span className="text-[12px] text-[#212121] font-semibold">
                CATEGORIES
              </span>
              <div className="py-[5px]">
                <button
                  className="flex justify-between w-full"
                  onClick={toggleAudio}
                >
                  <div className="flex items-center w-[100%]">
                    <span>
                      {isAudioOpen ? (
                        <LuChevronDown className="font-bold text-[#212121]" />
                      ) : (
                        <FiChevronLeft className="font-bold text-[#212121]" />
                      )}
                    </span>
                    <span className="text-[14px] font-bold text-[#212121]">
                    Audio & Video
                    </span>
                  </div>
                </button>
                {isAudioOpen && (
                  <div>
                   <div className="">
                   <p className="py-[5px] text-[#212121] text-[14px] pl-[30px]">Speakers</p>
                   <p className="py-[5px] text-[#212121] text-[14px] pl-[30px]">Headset</p>
                   </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Filters;
