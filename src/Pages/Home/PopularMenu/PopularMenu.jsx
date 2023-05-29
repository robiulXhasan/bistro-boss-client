import React, { useEffect, useState } from "react";
import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu, loading] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");

  return (
    <div>
      {loading ? (
      <div className="text-center">  <progress className="progress w-56 "></progress></div>
       
      ) : (
        <div className="w-11/12 md:w-10/12 mx-auto ">
          <SectionHeading heading="From our menu" subHeading="Check it out"></SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {popularItems.map((item) => (
              <MenuItems key={item._id} item={item}></MenuItems>
            ))}
          </div>
          <div className="text-center">
            <button className="btn btn-outline mt-10  my-4 border-0 border-b-4">
              View Full Menu
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopularMenu;
