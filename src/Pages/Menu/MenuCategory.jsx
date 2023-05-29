import React from "react";
import useMenu from "../../Hooks/useMenu";
import MenuItems from "../Shared/MenuItems/MenuItems";
import PageCover from "../Shared/PageCover/PageCover";

const MenuCategory = ({ items, title, coverImg }) => {
  const [loading] = useMenu();

  return (
    <div>
      {title && (
        <div className="my-10">
          <PageCover
            img={coverImg}
            title={title}
            badge="category menu"
            subTitle="WOULD YOY LIKE TO TRY A DISH"
          ></PageCover>
        </div>
      )}

      <div className="w-11/12 md:w-10/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {items.map((item) => (
            <MenuItems key={item._id} item={item}></MenuItems>
          ))}
        </div>
        <div className="text-center">
          <button className="btn btn-outline mt-10  my-4 border-0 border-b-4 uppercase">
            Order Your favourite food
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
