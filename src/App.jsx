import Cart from "./components/Cart";
import Header from "./components/common/Header";
import HeaderMobile from "./components/common/HeaderMobile";
import FilterDropdown from "./components/FilterDropdown";
import FilterPhone from "./components/FilterPhone";
import Filters from "./components/Filters";
import TopBannerS from "./components/TopBannerS";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCarousel from "./components/ProductCarousel";
import Navigation from "./components/common/Navigation";
import Pagination from "./components/common/Pagination";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <>
      <div className="block sm:hidden">
        <HeaderMobile />
      </div>

      <div className="hidden sm:block">
        <Header />
      </div>
      <div className="block sm:hidden">
        <FilterPhone />
      </div>
      <div className="block sm:hidden">
        <TopBannerS />
      </div>
      <main className="flex bg-[#f1f3f6] sm:p-[8px] overflow-visible">
        <section className="w-[370px] pr-[10px] hidden sm:block sm:mt-[3.8rem] mt-0">
          <div className="bg-white shadow">
            <div>
              <Filters />
              <FilterDropdown />
            </div>
          </div>
        </section>

        <section className="bg-white w-full shadow overflow-visible sm:mt-[3.8rem] mt-0" >
          <div className="hidden sm:block">
            <Navigation />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 justify-items-center border-t ">
            <div className="hover:shadow-lg transition-shadow duration-300">
              <Cart />
            </div>
            <div className="hover:shadow-lg transition-shadow duration-300">
              <Cart />
            </div>
            <div className="hover:shadow-lg transition-shadow duration-300">
              <Cart />
            </div>
            <div className="hover:shadow-lg transition-shadow duration-300">
              <Cart />
            </div>

            <div className="hover:shadow-lg transition-shadow duration-300">
              <Cart />
            </div>
          </div>

          <div className="block sm:hidden overflow-scroll">
            <ProductCarousel />
          </div>
          <div className="hidden sm:block">
            <Pagination totalPages={10}/>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
};
export default App;
