import React from "react";

const MenuItems = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex gap-4 justify-between">
      <img
        style={{ borderRadius: "0 210px 210px 210px" }}
        className="h-[104px] w-auto"
        src={image}
        alt=""
      />
      <div className="ms-2">
        <h1 className="text-xl font-medium">{name} ------------------</h1>
        <p>{recipe}</p>
      </div>
      <p className="text-[#BB8506] font-medium ">${price}</p>
    </div>
  );
};

export default MenuItems;
