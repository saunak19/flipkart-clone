import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#172337] text-white py-10 pt-[25px]">
      <div className="container mx-auto px-4 text-[12px]">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-8 px-4">
      
          <div>
            <h3 className="mb-4 font-semibold">ABOUT</h3>
            <ul className="space-y-2">
              {[
                "Contact Us",
                "About Us",
                "Careers",
                "Flipkart Stories",
                "Press",
                "Corporate Information",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">GROUP COMPANIES</h3>
            <ul className="space-y-2">
              {["Myntra", "Cleartrip", "Shopsy"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">HELP</h3>
            <ul className="space-y-2">
              {["Payments", "Shipping", "Cancellation & Returns", "FAQ"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

        
          <div>
            <h3 className="mb-4 font-semibold">CONSUMER POLICY</h3>
            <ul className="space-y-2">
              {[
                "Cancellation & Returns",
                "Terms Of Use",
                "Security",
                "Privacy",
                "Sitemap",
                "Grievance Redressal",
                "EPR Compliance",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        
          <div className="px-[25px] border-l border-[#454d5e]">
            <h3 className="mb-4 font-semibold">Mail Us:</h3>
            <p>
              Flipkart Internet Private Limited, <br />
              Buildings Alyssa, Begonia & Clove Embassy Tech Village, <br />
              Outer Ring Road, Devarabeesanahalli Village, <br />
              Bengaluru, 560103, Karnataka, India.
            </p>
            
            <div className="mt-4">
              <span className="text-[#878787]">Social</span>
              <div className="flex gap-2 mt-2">
                <img src="./fb.png" alt="Facebook" width={24} height={24} />
                <img src="./x.png" alt="Twitter" width={24} height={24} />
                <img
                  src="./YoutubeLogo.png"
                  alt="YouTube"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Registered Office Address:</h3>
            <p>
              Flipkart Internet Private Limited, <br />
              Buildings Alyssa, Begonia & Clove Embassy Tech Village, <br />
              Outer Ring Road, Devarabeesanahalli Village, <br />
              Bengaluru, 560103, Karnataka, India. <br />
              CIN: U51109KA2012PTC066107 <br />
              Telephone: <span className="text-[#2874f0]">
                044-45614700
              </span> / <span className="text-[#2874f0]">044-67415800</span>
            </p>
          </div>
        </div>

     
        <div className="flex flex-col md:flex-row justify-around items-center border-t border-[#454d5e] mt-6 py-4 text-center md:text-left space-y-4 md:space-y-0">
          <div className="flex gap-2 items-center">
            <img src="./seller.png" alt="Seller" />
            <span>Become a Seller</span>
          </div>
          <div className="flex gap-2 items-center">
            <img src="./advertise.png" alt="Advertise" />
            <span>Advertise</span>
          </div>
          <div className="flex gap-2 items-center">
            <img src="./gift.png" alt="Gift Cards" />
            <span>Gift Cards</span>
          </div>
          <div className="flex gap-2 items-center">
            <img src="./help-center.png" alt="Help Center" />
            <span>Help Center</span>
          </div>
          <div>
            <span>© 2007-2024 Flipkart.com</span>
          </div>
          <div>
            <img src="payment-method.png" alt="Payment Methods" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
