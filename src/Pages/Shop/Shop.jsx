import React, { useState } from "react";
import PageCover from "../Shared/PageCover/PageCover";
import shopBg from "../../assets/shop/banner2.jpg";
import useMenu from "../../Hooks/useMenu";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryTabs from "./CategoryTabs";

const Shop = () => {
  const categories = ["Salads", "Pizzas", "Soups", "Desserts", "Drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <PageCover img={shopBg} title="Our shop" subTitle="Would you like to try a dish?"></PageCover>
      <div className=" mt-10 w-11/12 md:w-10/12 mx-auto">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="text-center ">
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>

          <TabPanel>
            <CategoryTabs items={salad}></CategoryTabs>
          </TabPanel>
          <TabPanel>
            <CategoryTabs items={pizza}></CategoryTabs>
          </TabPanel>
          <TabPanel>
            <CategoryTabs items={soup}></CategoryTabs>
          </TabPanel>
          <TabPanel>
            <CategoryTabs items={dessert}></CategoryTabs>
          </TabPanel>
          <TabPanel>
            <CategoryTabs items={drinks}></CategoryTabs>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
