import React from "react";
import ItemCard from "../Shared/ItemCard/ItemCard";

const CategoryTabs = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
      {items.map((item) => (
        <ItemCard item={item} key={item._id}></ItemCard>
      ))}
    </div>
  );
};

export default CategoryTabs;
