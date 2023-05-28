import React, { useEffect, useState } from "react";
import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";

import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Review from "./Review";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <SectionHeading heading="Testimonials" subHeading="What our client's say"></SectionHeading>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="text-center py-5 md:py-10 px-5 md:px-20 space-y-3">
                <Rating
                  className="mx-auto"
                  style={{ maxWidth: 150 }}
                  value={review.rating}
                  readOnly
                />

                <FaQuoteLeft className="mx-auto text-5xl" />

                <p>{review.details}</p>
                <h3 className="text-xl text-[#CD9003] uppercase">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
