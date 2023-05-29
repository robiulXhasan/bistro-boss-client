import React from "react";
import PageCover from "../Shared/PageCover/PageCover";
import bannerImg from "../../assets/menu/banner3.jpg";
import OfferSection from "./MenuCategory";
import useMenu from "../../Hooks/useMenu";
import MenuCategory from "./MenuCategory";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";
import saladBg from "../../assets/menu/salad-bg.jpg";
import SectionHeading from "../Shared/SectionHeading/SectionHeading";

const Menu = () => {
  const [menu] = useMenu();
  const offerItems = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <PageCover
        img={bannerImg}
        title="Our Menu"
        subTitle="WOULD YOY LIKE TO TRY A DISH"
      ></PageCover>
      <SectionHeading heading="Today's Offer" subHeading="Don't miss"></SectionHeading>
      <MenuCategory items={offerItems}></MenuCategory>
      <MenuCategory
        items={dessert}
        coverImg={dessertBg}
        title="Desserts"
        subTitle="WOULD YOY LIKE TO TRY A DISH"
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        coverImg={pizzaBg}
        title="Pizzas"
        subTitle="WOULD YOY LIKE TO TRY A DISH"
      ></MenuCategory>
      <MenuCategory
        items={salad}
        coverImg={saladBg}
        title="Salads"
        subTitle="WOULD YOY LIKE TO TRY A DISH"
      ></MenuCategory>
      <MenuCategory
        items={soup}
        coverImg={soupBg}
        title="Soups"
        subTitle="WOULD YOY LIKE TO TRY A DISH"
      ></MenuCategory>
    </div>
  );
};

export default Menu;
