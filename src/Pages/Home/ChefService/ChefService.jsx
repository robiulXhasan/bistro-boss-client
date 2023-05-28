import React from "react";
import chefService from "../../../assets/home/chef-service.jpg";

const ChefService = () => {
  return (
    <div
      className="hero p-20 w-11/12 md:w-10/12 mx-auto my-20"
      style={{ backgroundImage: `url(${chefService})` }}
    >
      <div className="hero-overlay bg-white"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="text-black space-y-3">
          <h1 className="text-4xl uppercase text-center">Bistro Boss</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod quos molestiae delectus
            eveniet eum, qui placeat vitae temporibus eius quidem excepturi debitis provident quia,
            amet esse voluptate praesentium! Beatae, blanditiis consequuntur odio quisquam maxime
            accusantium laudantium amet facilis qui ex explicabo at incidunt vero dicta eligendi
            exercitationem hic. Architecto, minima.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChefService;
