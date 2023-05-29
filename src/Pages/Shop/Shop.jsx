import React from "react";
import PageCover from "../Shared/PageCover/PageCover";
import shopBg from "../../assets/shop/banner2.jpg";

const Shop = () => {
  return (
    <div>
      <PageCover img={shopBg} title="Our shop" subTitle="Would you like to try a dish?"></PageCover>
    </div>
  );
};

export default Shop;
