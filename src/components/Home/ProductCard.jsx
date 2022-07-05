import React from "react";
import { useNavigate } from "react-router-dom";

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

import products from "./product.json";

export default function ProductCard() {
  let navigate = useNavigate();
  const viewProduct = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="">
      {/* <h5 className="font-weight-bold m-2">Recommend for you</h5> */}
      <div className=" bg-white m-2">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          slidesPerGroup={5}
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
            {products.length > 0 ? (
              <>
                {products.map((product, index) => {
                  return (
                    <div className="card mr-4 m-2 col-3 border-0 footer-text-size text-left text-black-50">
                      <button className="btn-outline-primary invisible bg-white">
                        Get 100 AED OFF{" "}
                      </button>
                      <img
                        role="button"
                        className="card-img-top img-fluid"
                        src={product.url}
                        alt="Card image cap"
                        onClick={() => {
                          viewProduct(product.id);
                        }}
                      />
                      <div className="card-body">
                        <p className="card-text left-align">
                          {product.pdetail}
                        </p>
                        <h5 className="card-title">
                          {product.currency}
                          <strong className="text-dark">
                            {" "}
                            {product.price}
                          </strong>
                        </h5>
                        <p className="m-2">
                          {" "}
                          50% <strong>OFF</strong>
                        </p>
                        <p>
                          Arives<strong> WED, 22</strong>
                        </p>
                        <div className="d-flex ">
                          <div className=" ">
                            <img
                              className="w-100 h-50"
                              src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg"
                              alt=""
                            />
                          </div>

                          <div className="">
                            <img
                              className="w-25 h-50 ml-auto"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAACOCAMAAADQI8A6AAAAllBMVEX////+zgD/vg7///3+zAD/vQD7ywD+wAz///n/3lT/uwD+/PH+yAb+/O/+/vb+20b7667700X90hz77LX91Cr51lD9+uf54oj89dn4zSH/3U79wwr61375xkD53nf556L70zz+1zf88cH++Nb65JP72mX888v41nD52Yv546r63nD203T30Gb74Zn34J/568D5yVj9wy/fK3BrAAAExUlEQVR4nO2ZDXOqPBCFCUkAUQE/QGv9vi2vXq2t///PvZsERAQtijs4c3PamU47Fh/P2d0kYBhaWlpaWlpaWlpaWlpaWlpaWKLw9Tp6JRaQN597TTOkotRYMLZ4EYuAorskZNkWXC8gMMci5GXsMdpLwqQ9ryBljrTnJeQtidTyNZorgKT6wp6gaRKhbo8QS+CQXrdhFNHaAVTOUKZlBU33OqxVb8ChcMib0yiMwBlA5az6CscaNIxjtKFy+j5TOKTX9OwRleMnWcnqaVTOkpH+xEpxyLLZUpbm+CeaJmcPGOGEUDmtIct4Qqcpf2DGBB3C/Ak5k5g9DeEYnjRndWYOYWFzK9cAKmfV6pOcPYOG7KF0KczxSV6NNddaVE5reIHD1s3QtGXltMglTtjAaIa2WsvKucwKqmctl1b1jc+RvoUYyK1CVqBe+kKKvt9Q13e86M+HGMitSZGGsI9x5DnZqzHljdfB6DMcWkxWzqoEh1jWW/g5Wqz/PHn/k4VP29F4sBiFbxYTUu86aV0MnZxHTGIB1Thq0+yCdQvKi+Jg9Ddc9a2UQ7LANqdVmtUFFTAtw/822zhS87pGQUWQS8+yOtIQgdLvD4fD1cr3wRih0qxKmGwXZM72myCqsZ/+m/hhAYPvnyBOmlzPKqeOadqmaXLuursaWc0lTF94omxZSSp/MpFgfkUaJlikbIHzME97znKXPf/NIpX1fkbTrtP+3icrf4crfy5VJ6Ux3b1TbxjR0YUL93Ak/3GKyp3KLn+cB7ZY8ztSKdV7RlNzayZnRE2eTkZTa+hIHPDHGd0fUKZTVO7GMeqf4QVRHX/SqPj0OSuq+EAfD/OkUblfT7AmxSn0V2UaO02KPulmi7rO10M8aeFIb54BkxAZdPFAPTNZOLbJD7WmTREHrrW43x9Vxtw9PHtfKOZFcC+PKhxub2XgTwSij/ijmorzrfH8M4X8cIN7eFJvBng7+Dt4mPLG3GI9exPXrFw/LKubZ02cMq2r8SQ05jcWR6pKeSXjz5Y3dlHPfjT8nSZZGvgP/rnY61WlMfnMQz8XR29VaUx+jHBZQPFvtZNt1G07RscJfllKTztjYc8WHef2TpWd08AuBx0nvIWTnWGS1kLHuXUO7uRpYChj00TXKzkflEqrzv2KKoo7FYNSODEyzrXGYp0iDOBgt9aVxioJ6tRaaPZQ6nxWt0a2FubDWiofmhcb6r2kbBTODPPROjXGxT6/kpOSPUbFKa5Ycta4x6NbXjy4q9bl4U/BmNMomsIPsxCaOGJhiYpbqUUYeyoTiaZ20SF3h4cDOq/kjiga7u5FHnLYxXv3EojPEPvc6J5KhykYvk+KQx3s4j3neZ4j3sMtaCwrhVF3rWffzvmnp4bz/ZMH4nitBY3FsjnDXQGTf4F4tP49c8+AOObR5ouJlBTMceAZFwcFlZg3OANCbC1qzJMBzF370E7/WFT3cEyBxC1BLDk/6k3c4+HWWiQiO8xUk2GuWt2jqQZN17i1UMsE5RiybX7EW7XGEmYTGbdv5Sd3c6KNGNQmXmvFUBFyBFcbbXS8gyrDW7W86S6+Yzsl5uJuivyQv/rmV70S+ZB+x+WpgXmrSUtLS0tLS0tLS0tLS0tL65/R/yDDQh5O8wyIAAAAAElFTkSuQmCC"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="">
                              <strong className="">{product.rating}(3)</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <h1>No Banner avialable!</h1>
              </>
            )}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
