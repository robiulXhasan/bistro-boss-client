import React, { useContext } from "react";
import Swal from "sweetalert2";

import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../Hooks/useCart";

const ItemCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const [,refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const { name, recipe, image, price } = item;
  const addToCart = (item) => {
    const { name, recipe, image, price, _id } = item;
    const cartData = {
      name,
      recipe,
      image,
      price,
      itemId: _id,
      user: user?.email,
    };
    console.log(cartData);
    if (!user) {
      Swal.fire({
        text: "Please Sign in to add food!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sign in",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    } else {
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Added to Cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  return (
    <div className="card card-compact bg-[#F3F3F3] shadow border rounded-none">
      <figure>
        <img className="" src={image} alt="food" />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => addToCart(item)}
            className="btn btn-outline border-0 border-b-4 text-[#BB8506]"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
