import React from "react";
import banner from "./banner.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./crousal.css";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function crousal() {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {banner.primaryBanners.length > 0 ? (
          <>
            {banner.primaryBanners.map((banner, index) => {
              return (
                <SwiperSlide>
                  <img
                    className="d-block w-100 h-5 ml-10"
                    src={banner.url}
                    alt="First slide"
                  />
                </SwiperSlide>
              );
            })}
          </>
        ) : (
          <>
            <h1>No Banner avialable!</h1>
          </>
        )}
      </Swiper>
    </div>
  );
}
