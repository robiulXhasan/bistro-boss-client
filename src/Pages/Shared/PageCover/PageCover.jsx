import React from "react";
import { Parallax, Background } from "react-parallax";

const PageCover = ({ img, title, subTitle, badge }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      height={200}
      bgImageAlt="Our Menu"
      strength={-200}
    >
      <div
        className={`hero p-10  pb-5 ${
          badge ? "md:p-32 " : "md:px-[8%] pt-20 md:py-40 "
        }  md:h-[500px]`}
      >
        <div style={{ background: "rgba(21, 21, 21, 0.6)" }} className="hero-overlay "></div>
        <div className="hero-content text-center">
          <div className="text-white space-y-3 md:p-20">
            <h1 className="text-4xl uppercase text-center font-bold">{title}</h1>
            <p className="text-center">{subTitle}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default PageCover;
