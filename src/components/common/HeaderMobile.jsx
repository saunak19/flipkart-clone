import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { RiSearchLine } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";

const HeaderMobile = () => {
  return (
    <>
      <header>
        <section className="p-3">
          <div className="flex gap-2 items-center">
            <GoArrowLeft size={25} />
            <img src="/logo_lite.png" className="w-[23px]" alt="" />
            <span className="text-[#212121] text-[16px] font-semibold">
              Audio & Video
            </span>
            <RiSearchLine size={20} className="mx-3"/>
            <BsCart3 size={20} className=""/>
            <span className="text-[16px] mx-6">Login</span>
          </div>
        </section>
      </header>
    </>
  );
};

export default HeaderMobile;
