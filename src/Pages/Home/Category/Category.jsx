import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";


const Category = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto mb-10">
      <SectionHeading heading={"ORDER ONLINE"} subHeading={"From 11:00am to 10:00pm"} />
      <Swiper
        slidesPerView={2}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
          <img className="mx-auto" src={slide1} alt="" />
          <h3 className="md:text-3xl uppercase text-center text-black ">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="mx-auto" src={slide2} alt="" />
          <h3 className="md:text-3xl uppercase text-center text-black ">Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="mx-auto" src={slide3} alt="" />
          <h3 className="md:text-3xl uppercase text-center text-black ">Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="mx-auto" src={slide4} alt="" />
          <h3 className="md:text-3xl uppercase text-center text-black ">Desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="mx-auto" src={slide5} alt="" />
          <h3 className="md:text-3xl uppercase text-center text-black ">Salads</h3>
        </SwiperSlide>
      </Swiper>
     
    </div>
  );
};

export default Category;
