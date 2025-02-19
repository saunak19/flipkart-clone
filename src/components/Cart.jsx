import { CiHeart } from "react-icons/ci";
import { TiStarFullOutline } from "react-icons/ti";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaHeart } from "react-icons/fa";   


const Cart = () => {
  return (
    <>
      <section className=" p-[16px]">
        <div className="">
          <div>
            <div className="grid place-content-end">
              <FaHeart size={15} className="fill-[#c2c2c2]" />
            </div>
            <div className="flex justify-center p-3">
              <img
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/4/u/a/nb140-power-50-hours-playtime-dual-pairing-true-wireless-earbuds-original-imah44hbfju3ftty.jpeg?q=70"
                alt=""
                className="w-[180px]"
              />
            </div>
          </div>
          <div>
            <small className="text-[#878787]">Sponsored</small>
            <p className="text-[14px] text-[#212121] whitespace-normal">
              Aroma NB140 Power 50 Hours* Playtime, Dual Pairing True Wireless
              Earbuds Bluetooth
            </p>
            <small className="text-[12px] text-[#878787]">
              White, True Wireless
            </small>
            <div className="flex text-white mt-[5px]">
              <span className="bg-[#388e3c] text-[12px]  flex items-center px-[6px] rounded">
                3.5 <TiStarFullOutline className="ml-[2.5px]"/>
              </span>
              <span className="text-[#878787] text-[14px] mx-2">(9,631)</span>
            </div>
            <div className="flex items-center">
              <p className="text-[16px] text-[#212121] flex items-center font-semibold"><MdOutlineCurrencyRupee />499</p>
              <p className="text-[14px] text-[#878787] flex items-center mx-[6px]"><MdOutlineCurrencyRupee />1999</p>
              <p className="text-[13px] text-[#388e3c] font-semibold">77% off</p>
            </div>
            <p className="text-[14px] text-[#26A541] font-semibold tracking-wide mt-[5px]">Bank offer</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
