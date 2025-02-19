import React from "react";
import Slider from "react-slick";

const ProductCarousel = () => {
  const products = [
    { id: 1, name: "earbuds", img: "https://rukminim1.flixcart.com/image/192/208/xif0q/headphone/m/u/5/-original-imahf3h3cgzg6mrc.jpeg?q=60" },
    { id: 2, name: "boat airdopes", img: "https://rukminim1.flixcart.com/image/192/208/xif0q/headphone/m/u/5/-original-imahf3h3cgzg6mrc.jpeg?q=60" },
    { id: 3, name: "boat earbuds", img: "https://rukminim1.flixcart.com/image/192/208/xif0q/headphone/m/u/5/-original-imahf3h3cgzg6mrc.jpeg?q=60" },
    { id: 4, name: "realme earbuds", img: "https://rukminim1.flixcart.com/image/192/208/xif0q/headphone/q/o/4/airypod-tws-earbuds-bass-20-h-playtime-fast-charging-v5-1-original-imagzq526dwba6bc.jpeg?q=60" },
    { id: 5, name: "sony earbuds", img: "https://rukminim1.flixcart.com/image/192/208/xif0q/headphone/q/o/4/airypod-tws-earbuds-bass-20-h-playtime-fast-charging-v5-1-original-imagzq526dwba6bc.jpeg?q=60" },
  ];

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjust based on your needs
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Tablet screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480, // Mobile screens
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="p-4 bg-blue-100">
      <h2 className="text-lg font-medium mb-4">
        Can't find what you're looking for?
      </h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-2">
            <div className="bg-white shadow-lg rounded-lg h-[156px] w-[96px] flex flex-col items-center justify-center">
              <img
                src={product.img}
                alt={product.name}
                className="h-[96px] w-[96px] object-contain"
              />
              <p className="mt-2 text-[12px] font-medium text-gray-700 text-center">
                {product.name}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
