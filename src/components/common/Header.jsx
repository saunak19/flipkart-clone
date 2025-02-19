import { LuSearch } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import MoreDropdown from "./More";
import Login from "./Login";

const Header = () => {
  return (
    <>
      <section>
        <header className="bg-[#2874f0] py-3 fixed w-full">
          <div className="flex items-center justify-center">
            <div className="mx-2">
              <img src="/flipkart-plus.png" width={75} alt="" />
              <div className="flex text-[11px] italic hover:underline decoration-transparent hover:decoration-white">
                <span className="text-white">Explore </span>
                <span className="display-ruby mx-1 text-[#FFE500]">
                  Plus
                  <img src="/plus.png" className="mx-1" width={10} alt="" />
                </span>
              </div>
            </div>
            <div className="w-[30%] ">
              <div className="flex items-center bg-white w-[100%] py-2 rounded-sm px-3">
                <input
                  type="text"
                  className="text-[14px] w-[100%] outline-none focus:outline-none focus:ring-0 "
                  placeholder="Search for products, brands and more"
                />
                <LuSearch size={18} className="text-[#2874f0]" />
              </div>
            </div>
            <Login />
            <div>
              <span className="text-white font-bold">Become a Seller</span>
            </div>
            <MoreDropdown />
            <div>
              <span className="flex items-center gap-1 text-white">
                <FaShoppingCart /> Cart
              </span>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
