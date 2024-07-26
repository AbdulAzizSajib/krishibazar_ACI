import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";

const HotDeals = () => {
  //fetch products from json
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const hotDeal = data.filter((item) => item.subcategory === "hotDeals");
        // console.log(hotDeal);
        setProducts(hotDeal);
      });
  }, []);

  //Remaining Time
  const countdownDuration = 2 * 24 * 60 * 60 * 1000; // 2 days in milliseconds
  const [remainingTime, setRemainingTime] = useState(countdownDuration);

  useEffect(() => {
    const storedEndTime = localStorage.getItem("countdownEndTime");
    let endTime;

    if (storedEndTime) {
      endTime = new Date(storedEndTime);
    } else {
      endTime = new Date(new Date().getTime() + countdownDuration);
      localStorage.setItem("countdownEndTime", endTime.toISOString());
    }

    const currentTime = new Date();
    const timeDifference = endTime - currentTime;

    if (timeDifference > 0) {
      setRemainingTime(timeDifference);
    } else {
      setRemainingTime(0);
      localStorage.removeItem("countdownEndTime");
    }
  }, [countdownDuration]);

  const renderer = ({ days, hours, minutes, seconds }) => (
    <div className="flex space-x-1 p-2 bg-[#ffd455] rounded-xl border">
      <div className="flex flex-col items-center -space-y-2">
        <h2 className="text-lg font-bold">{days}</h2>
        <p className="text-lg">Days</p>
      </div>
      <span className="text-xl font-bold">:</span>
      <div className="flex flex-col items-center -space-y-2">
        <h2 className="text-lg font-bold">{hours}</h2>
        <p className="text-lg">Hours</p>
      </div>
      <span className="text-xl font-bold">:</span>
      <div className="flex flex-col items-center -space-y-2">
        <h2 className="text-lg font-bold">{minutes}</h2>
        <p className="text-lg">Minutes</p>
      </div>
      <span className="text-xl font-bold">:</span>
      <div className="flex flex-col items-center -space-y-2">
        <h2 className="text-lg font-bold">{seconds}</h2>
        <p className="text-lg">Seconds</p>
      </div>
    </div>
  );

  return (
    <div>
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <h2 className="text-xl font-semibold">Today's Hot Deals</h2>
          <Countdown date={Date.now() + remainingTime} renderer={renderer} />
        </div>
        <div>
          <Link
            to="/your-route"
            className="px-3 py-2 mt-2 text-white bg-[#22C55E] border-2 border-green-700 rounded-md"
          >
            View All
          </Link>
        </div>
      </div>
      <section>
        {/* //products */}
        <div class="grid grid-cols-1 gap-3 mt-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 place-items-center">
          {products.map((product, index) => (
            <div
              key={index}
              class="h-[429px] w-[307px] rounded-2xl bg-[#e3fff3]"
            >
              <div class="w-[307px] h-[218px] flex justify-center rounded-t-2xl border bg-white items-center relative">
                <img class="w-[175px]" src={product.image} alt="" />
                <div class="absolute flex justify-between w-full px-4 top-6">
                  <div class="flex items-center justify-center">
                    <p class="border bg-[#a5ffd9] text-center px-2">In Stock</p>
                  </div>

                  <div class="border-2 bg-[#a5ffd9] border-[#34d08d] flex items-center justify-center rounded-full w-14 h-14">
                    <p class="text-center">10 % Save</p>
                  </div>
                </div>
              </div>
              <div class="px-3 mt-3 space-y-2">
                <h2 class="text-2xl font-semibold">
                  {product.name}
                  <span className="text-lg font-light ml-2 text-gray-400 ">
                    ({product.category})
                  </span>
                </h2>

                <h2 class="text-xl">
                  <i class="text-yellow-400 fa-solid fa-star"></i> 5.0
                  <span class="text-gray-400">(135 Reviews)</span>
                </h2>
                <h2 class="text-3xl flex items-center font-bold">
                  {product.price} <TbCurrencyTaka />
                </h2>

                <div class="flex justify-center mx-4">
                  <button class="w-full btn bg-slate-50 hover:bg-primary hover:text-white">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HotDeals;
