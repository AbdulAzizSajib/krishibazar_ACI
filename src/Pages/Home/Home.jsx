import React from "react";
import Banner from "../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";
import HotDeals from "../../Components/HotDeals/HotDeals";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <HotDeals/>
    </div>
  );
};

export default Home;
