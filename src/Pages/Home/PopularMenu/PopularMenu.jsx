import React, { useEffect, useState } from "react";
import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  console.log(menu);
  return (
    <div className="w-11/12 md:w-10/12 mx-auto" >
      <SectionHeading heading="From our menu" subHeading="Check it out"></SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {menu.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
