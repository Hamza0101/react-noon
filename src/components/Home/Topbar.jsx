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
  return (
    <div className="top-bg-color ">
      <div className="container-fluid row">
        <img
          className=" m-2 ml-4 noon-logo"
          src="https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
          onClick={HomePage}
          role="button"
        />
        <img
          className="m-2"
          src="https://z.nooncdn.com/s/app/com/common/images/flags/ae.svg"
        />
        <span>
          <p className="my-1 text-size">Deliver to </p>
          <p className="text-size font-weight-bold">Dubai</p>
        </span>
        <p className="m-1 ml-3">
          <img
            src="https://z.nooncdn.com/s/app/com/noon/icons/dropdownArrow.svg"
            alt=""
          />
        </p>

        <form className=" form-inline col-md-6  m-2">
          <input
            className="form-control mr-sm-2 w-100 h-75"
            type="search"
            placeholder="What are you looking for? "
            aria-label="Search"
          />
        </form>
        <p className="m-3">العربية |</p>
        <span>
          <p className=" text-size h-6 m-1 ">Hala Muhammad! </p>
          <p className=" text-size font-weight-bold m-2">My Account</p>
        </span>
        <p className="m-3">| </p>
        <p className="text-size font-weight-bold m-3">
          Cart{" "}
          <img
            src="https://z.nooncdn.com/s/app/com/noon/icons/cart.svg"
            alt=""
            onClick={viewCart}
            role="button"
          />
        </p>
      </div>
    </div>
  );
}
