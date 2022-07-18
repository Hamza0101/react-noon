import React from "react";
import "./topbar.css";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  let navigate = useNavigate();
  const HomePage = () => {
    navigate(`/`);
  };
  const viewCart = () => {
    navigate(`/cart`);
  };

  const viewProducts = () => {
    navigate(`/products`);
  };
  const viewAddress = () => {
    navigate(`/address`);
  };
  return (
    <div className="top-bg-color ">
      <div className="px-3 small-noon">
        <p className="my-3  ">
          <strong className="bold-text-size">العربية </strong>|{" "}
        </p>
        <img
          className="mb-1 mx-1 small-noon"
          src="https://z.nooncdn.com/s/app/com/common/images/flags/ae.svg"
        />
        <div className=" small-noon">
          <p className="my-1 text-size">
            Deliver to <b className="d-flex">Dubai</b>
          </p>
          <img
            src="https://z.nooncdn.com/s/app/com/noon/icons/dropdownArrow.svg"
            alt=""
            className="ml-1"
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <div className="small-noon ml-auto">
          <span className="ml-auto">
            <p className=" text-size h-6 m-1 ">Hala Muhammad! </p>
            <p className=" text-size  m-2">My Account</p>
          </span>
          <p className="my-3 mx-1">| </p>
          <p className="  my-3 m-1">
            <strong className="bold-text-size"> Cart </strong>
            <img
              src="https://z.nooncdn.com/s/app/com/noon/icons/cart.svg"
              alt=""
              onClick={viewCart}
              role="button"
            />
          </p>
          <p className=" my-3">
            |
            <span className="mx-3" role="button" onClick={viewProducts}>
              <strong className="bold-text-size">Products</strong>
            </span>
          </p>

          <p className="my-3">
            |
            <span className="mx-3" role="button" onClick={viewAddress}>
              <strong className="bold-text-size">Address</strong>
            </span>
          </p>
        </div>
      </div>
      <div className="px-2 row">
        <div className="d-flex">
          <img
            className=" my-2 mx-2 ml-4 noon-logo"
            src="https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
            onClick={HomePage}
            role="button"
          />
          <img
            className="mb-1 mx-1 large-noon"
            src="https://z.nooncdn.com/s/app/com/common/images/flags/ae.svg"
          />
          <div className=" large-noon">
            <p className="my-1 text-size">
              Deliver to <b className="d-flex">Dubai</b>
            </p>
            <img
              src="https://z.nooncdn.com/s/app/com/noon/icons/dropdownArrow.svg"
              alt=""
              className="ml-1"
              style={{ width: "30px", height: "30px" }}
            />
          </div>
        </div>

        <form className=" form-inline col-8 col-lg-3  m-2">
          <input
            className="form-control mr-sm-2 w-100 h-75"
            type="search"
            placeholder="What are you looking for? "
            aria-label="Search"
          />
        </form>
        <div className="large-noon">
          <p className="my-3 ml-auto ">
            <strong className="bold-text-size">العربية </strong>|{" "}
          </p>
          <span>
            <p className=" text-size h-6 m-1 ">Hala Muhammad! </p>
            <p className=" text-size  m-2">My Account</p>
          </span>
          <p className="my-3 mx-1">| </p>
          <p className="  my-3 m-1">
            <strong className="bold-text-size"> Cart </strong>
            <img
              src="https://z.nooncdn.com/s/app/com/noon/icons/cart.svg"
              alt=""
              onClick={viewCart}
              role="button"
            />
          </p>
          <p className=" my-3">
            |
            <span className="mx-3" role="button" onClick={viewProducts}>
              <strong className="bold-text-size">Products</strong>
            </span>
          </p>

          <p className="my-3">
            |
            <span className="mx-3" role="button" onClick={viewAddress}>
              <strong className="bold-text-size">Address</strong>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
