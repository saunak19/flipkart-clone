import React, { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";

const FilterDropdown = () => {
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isRatingsOpen, setIsRatingsOpen] = useState(false);
  const [isDiscountOpen, setDiscountOpen] = useState(false);
  const [isGstInvoicOpen, setGstInvoicOpen] = useState(false);
  const [isAvailabilityOpen, setAvailabilityOpen] = useState(false);
  const [isOfferOpen, setOfferOpen] = useState(false);

  const toggleBrand = () => setIsBrandOpen(!isBrandOpen);
  const toggleRatings = () => setIsRatingsOpen(!isRatingsOpen);
  const toggleDiscount = () => setDiscountOpen(!isDiscountOpen);
  const toggleGstInvoic = () => setGstInvoicOpen(!isGstInvoicOpen);
  const toggleAvailability = () => setAvailabilityOpen(!isAvailabilityOpen);
  const toggleOffer = () => setOfferOpen(!isOfferOpen);

  return (
    <section>
      <div className="">
        <div className="p-[16px] border-b border-gray-200">
          <button className="flex justify-between w-full" onClick={toggleBrand}>
            <div className="flex items-center justify-between w-[100%]">
              <span className="text-[13px] font-semibold text-[#212121]">
                BRAND
              </span>
              <span>
                {isBrandOpen ? (
                  <LuChevronUp className="text-[#878787]" />
                ) : (
                  <LuChevronDown className="text-[#878787]" />
                )}
              </span>
            </div>
          </button>
          {isBrandOpen && (
            <div>
              <div>
                <div className="py-[7px]">
                  <span className="bg-[#f0f0f0] text-[#878787] text-[10px] px-[3px] py-[1px] text-center">
                    ✕
                  </span>
                  <span className="text-[14px] text-[#878787] ml-[11px]">
                    Clear all
                  </span>
                </div>
                <div className="flex w-full max-w-sm border-b-2 border-[#e0e0e] focus-within:border-blue-500">
                  <span className="flex items-center text-gray-500">
                    <IoSearch className="text-[14px]" />
                  </span>
                  <input
                    type="text"
                    placeholder="Search Brand"
                    className="ml-2 w-[100%] outline-none focus:outline-none focus:ring-0 text-[14px]"
                  />
                </div>
                <div className="py-3 text-[#212121]">
                  <div className="flex items-center py-2">
                    <input type="checkbox" className="" />
                    <span className="text-[14px] ml-2">3BAAN</span>
                  </div>
                  <div className="flex items-center py-1">
                    <input type="checkbox" className="" />
                    <span className="text-[14px] ml-2">2fortheroad</span>
                  </div>
                  <div className="flex items-center py-1">
                    <input type="checkbox" className="" />
                    <span className="text-[14px] ml-2">4UONLY</span>
                  </div>
                  <div className="flex items-center py-1">
                    <input type="checkbox" className="" />
                    <span className="text-[14px] ml-2">5PLUS</span>
                  </div>
                  <div className="flex items-center py-1">
                    <input type="checkbox" className="" />
                    <span className="text-[14px] ml-2">7SEVEN</span>
                  </div>
                  <div className="flex items-center py-1">
                    <input type="checkbox" className="" />
                    <span className="text-[14px] ml-2">99DOTCOM</span>
                  </div>
                  <div>
                    <span className="text-[#2874f0] text-[12px] font-semibold">
                      1377 MORE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-[16px] border-b border-gray-200">
          <button
            className="flex justify-between w-full"
            onClick={toggleRatings}
          >
            <div className="flex items-center justify-between w-[100%]">
              <span className="text-[13px] font-semibold text-[#212121]">
                CUSTOMER RATINGS
              </span>
              <span>
                {isRatingsOpen ? (
                  <LuChevronUp className="text-[#878787]" />
                ) : (
                  <LuChevronDown className="text-[#878787]" />
                )}
              </span>
            </div>
          </button>
          {isRatingsOpen && (
            <div>
              <div className="py-3 text-[#212121]">
                <div className="flex items-center py-2">
                  <input type="checkbox" className="" />
                  <span className="text-[14px] ml-2">4★ & above</span>
                </div>
                <div className="flex items-center py-1">
                  <input type="checkbox" className="" />
                  <span className="text-[14px] ml-2">3★ & above</span>
                </div>
                <div className="flex items-center py-1">
                  <input type="checkbox" className="" />
                  <span className="text-[14px] ml-2">2★ & above</span>
                </div>
                <div className="flex items-center py-1">
                  <input type="checkbox" className="" />
                  <span className="text-[14px] ml-2">1★ & above</span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="p-[16px] border-b border-gray-200">
          <button
            className="flex justify-between w-full"
            onClick={toggleDiscount}
          >
            <div className="flex items-center justify-between w-[100%]">
              <span className="text-[13px] font-semibold text-[#212121]">
                DISCOUNT
              </span>
              <span>
                {isDiscountOpen ? (
                  <LuChevronUp className="text-[#878787]" />
                ) : (
                  <LuChevronDown className="text-[#878787]" />
                )}
              </span>
            </div>
          </button>
          {isDiscountOpen && (
            <div>
              <div className="py-3 text-[#212121]">
                <div className="flex items-center py-2">
                  <input type="checkbox" className="" />
                  <span className="text-[14px] ml-2">50% or more</span>
                </div>
                <div className="flex items-center py-1">
                  <input type="checkbox" className="" />
                  <span className="text-[14px] ml-2">40% or more</span>
                </div>
                <div className="flex items-center py-1">
                  <input type="checkbox" className="" />
                  <span className="text-[14px] ml-2">30% or more</span>
                </div>
                <div className="flex items-center py-1">
                  <input type="checkbox" className="" />
                  <span className="text-[14px] ml-2">20% or more</span>
                </div>
                <div className="flex items-center py-1">
                  <input type="checkbox" className="" />
                  <span className="text-[14px] ml-2">10% or more</span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="p-[16px] border-b border-gray-200">
          <button
            className="flex justify-between w-full"
            onClick={toggleGstInvoic}
          >
            <div className="flex items-center justify-between w-[100%]">
              <span className="text-[13px] font-semibold text-[#212121]">
                GST INVOICE AVAILABLE
              </span>
              <span>
                {isGstInvoicOpen ? (
                  <LuChevronUp className="text-[#878787]" />
                ) : (
                  <LuChevronDown className="text-[#878787]" />
                )}
              </span>
            </div>
          </button>
          {isGstInvoicOpen && (
            <div>
              <div className="py-3 text-[#212121]">
                <div className="flex items-center py-2">
                  <input type="checkbox" className="" disabled />
                  <span className="text-[14px] ml-2 text-[#c0c0c0] cursor-pointer">
                    GST Invoice Available
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="p-[16px] border-b border-gray-200">
          <button
            className="flex justify-between w-full"
            onClick={toggleAvailability}
          >
            <div className="flex items-center justify-between w-[100%]">
              <span className="text-[13px] font-semibold text-[#212121]">
                AVAILABILITY
              </span>
              <span>
                {isAvailabilityOpen ? (
                  <LuChevronUp className="text-[#878787]" />
                ) : (
                  <LuChevronDown className="text-[#878787]" />
                )}
              </span>
            </div>
          </button>
          {isAvailabilityOpen && (
            <div>
              <div className="py-3 text-[#212121]">
                <div className="flex items-center py-2">
                  <input type="checkbox" className="" />
                  <span className="text-[14px] ml-2 ">
                    Exclude Out of Stock
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="p-[16px] border-b border-gray-200">
          <button className="flex justify-between w-full" onClick={toggleOffer}>
            <div className="flex items-center justify-between w-[100%]">
              <span className="text-[13px] font-semibold text-[#212121]">
                OFFERS
              </span>
              <span>
                {isOfferOpen ? (
                  <LuChevronUp className="text-[#878787]" />
                ) : (
                  <LuChevronDown className="text-[#878787]" />
                )}
              </span>
            </div>
          </button>
          {isOfferOpen && (
            <div>
              <div className="py-3 text-[#212121]">
                <div className="flex items-center py-2">
                  <input type="checkbox" className="" />
                  <span className="text-[14px] ml-2 ">Buy More, Save More</span>
                </div>
                <div className="flex items-center py-2">
                  <input type="checkbox" className="" disabled />
                  <span className="text-[14px] ml-2 text-[#c0c0c0] cursor-pointer">
                    Special Price
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FilterDropdown;
