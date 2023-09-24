import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
        <SectionTitle
            subHeading ={"form 11.00 to 10 pm"}
            heading ={"Order Online"}>
        </SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h2 className="text-white uppercase text-center -mt-16 text-4xl">
            Salads
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h2 className="text-white uppercase text-center -mt-16 text-4xl">
            Pizza
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h2 className="text-white uppercase text-center -mt-16 text-4xl">
            soups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h2 className="text-white uppercase text-center -mt-16 text-4xl">
            dessert
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h2 className="text-white uppercase text-center -mt-16 text-4xl">
            yummy
          </h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
