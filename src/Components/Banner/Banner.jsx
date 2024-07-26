import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="container mx-auto pt-1">
        <div className="flex flex-col mt-[60px] justify-between items-center gap-2 md:flex-row md:gap-7">
          <div className="relative max-w-7/12">
            <img
              className="object-cover w-full h-full"
              src="/src/assets/Images/Banner/cattle.png"
              alt=""
            />
            <div className="absolute bottom-1/2 capitalize right-1/2 left-10 space-y-4  ">
              <h2 className="text-5xl font-semibold text-green-900">
                Premium Quality Cattle
              </h2>
              <p className="text-sm leading-5 text-gray-500 tracking-tight  text-justify font-base">
                Discover our range of healthy, well-bred cattle, perfect for
                farming and livestock needs. Browse our selection to find the
                best cattle for your agricultural business.
              </p>
              <button className="lg:btn-md btn-sm border-green-700 border-2 rounded-md bg-[#22C55E] mt-2 text-white">
                Shop Now
              </button>
            </div>
          </div>
          <div className="space-y-2 md:space-y-7 max-w-5/12">
            <div className="relative">
              <img
                className="object-cover w-full h-full"
                src="/src/assets/Images/Banner/poultry.png"
                alt=""
              />
              <div className="absolute  capitalize   w-1/2 top-5 space-y-2 left-5  ">
                <h2 className="text-3xl text-green-900 font-semibold">
                  High-Quality Poultry
                </h2>
                <p className="text-sm leading-4 text-gray-500 tracking-tight  text-justify font-base">
                  Explore our poultry selection of chickens, ducks, and turkeys.
                  Perfect for any scale of farming, our poultry is bred for
                  health and productivity.
                </p>
                <button className="lg:btn-md btn-sm border-green-700 border-2 rounded-md bg-[#22C55E] mt-2 text-white">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                className="object-cover w-full h-full"
                src="/src/assets/Images/Banner/birds.png"
                alt=""
              />
              <div className="absolute  capitalize   w-1/2 top-5 space-y-2 left-5">
                <h2 className="text-3xl text-green-900 font-semibold">
                  Loving Pets for Your Home
                </h2>
                <p className="text-sm leading-4 text-gray-500 tracking-tight  text-justify font-base">
                  Find your perfect family companion from our selection of dogs,
                  cats, and small animals, all raised with care. Adopt a furry
                  friend today!
                </p>
                <button className=" btn lg:btn-md btn-sm border-green-700 border-2 rounded-md bg-[#22C55E] mt-2 text-white">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
