import React from "react";
import featuredImg from "../../../assets/home/featured.jpg";
import SectionHeading from "../../Shared/SectionHeading/SectionHeading";

const FeaturedItem = () => {
  return (
    <div
      style={{ backgroundImage: `url(${featuredImg})`, backgroundPosition: "center" }}
      className="mb-10 mt-20 pt-5 py-20 bg-black bg-opacity-60 bg-blend-overlay text-white bg-fixed"
    >
      <SectionHeading heading="Featured item" subHeading="Check it out"></SectionHeading>
      <div className="w-11/12 md:w-10/12 mx-auto md:flex gap-10 items-center text-white">
        <img className="md:w-1/2" src={featuredImg} alt="" />
        <div>
          <h4>March 20, 2023</h4>
          <h2 className="uppercase">WHERE CAN I GET SOME?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere,
            deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium
            tempore consequatur consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline text-white my-4 border-0 border-b-4">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
