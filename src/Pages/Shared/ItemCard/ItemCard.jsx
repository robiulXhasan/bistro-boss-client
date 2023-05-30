import React from "react";

const ItemCard = ({ item }) => {
  const { name, recipe, image, price } = item;

  return (
    <div className="card card-compact bg-[#F3F3F3] shadow border rounded-none">
      <figure>
        <img className="" src={image} alt="food" />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline border-0 border-b-4 text-[#BB8506]">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
