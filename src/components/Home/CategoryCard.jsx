import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import category from "./category.json";

export default function CategoryCard() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="row my-3 m-2 bg-light   ">
            {category.length > 0 ? (
              <>
                {category.map((category, index) => {
                  return (
                    <div className=" border-0 text-center bg-light  my-3 col-1 rounded-circle">
                      <img
                        className="rounded-circle w-100h-75 my-2"
                        src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80"
                      />
                    </div>
                    // <strong>Laptop</strong>
                  );
                })}
              </>
            ) : (
              <>
                <h1>No Category avialable!</h1>
              </>
            )}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
