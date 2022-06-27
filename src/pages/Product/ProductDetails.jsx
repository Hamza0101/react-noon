import React from "react";
import Footer from "../../components/Footer";
import SocialBar from "../../components/Home/SocialBar";
import Topbar from "../../components/Home/Topbar";
import CustomNavbar from "../../components/Home/CustomNavbar";
import Banner from "../../components/Banner";
import Filter from "../../components/Product/Filter";
import CustomTreeView from "../../components/Product/CustomTreeView";
// import Brand from '../../components/Product/Brands'
import CustomSlider from "../../components/Product/CustomSlider";
import BottomList from "../../components/Home/BottomList";
import ProductCard from "../../components/Home/ProductCard";
import Support from "../../components/Home/Support";
import ProductItems from "../../components/Product/ProductItems";
import product from "../../components/Home/product.json";

export default function ProductDetails() {
  return (
    <div className="bg-light">
      <Topbar />
      <CustomNavbar />
      <div className="row container">
        <div className="col-3">
          <div className="card">
            <img
              className="card-img-top"
              src={product[1].url}
              alt="Card image cap"
            />
          </div>{" "}
        </div>
        <div className="col-5">
          <div className="card-body">
            <h4 className="card-title">{product[1].bname}</h4>
            <h5 className="card-title">{product[1].pdetail}</h5>
            <p className="card-text">
              Model Number : Iphone 13 Pro Max | 4.3
              <img
                className="w-25 h-25"
                src="https://z.nooncdn.com/s/app/com/noon/design-system/simpleicons/star-filled.svg"
                alt=""
              />{" "}
              287 ratings
            </p>
            <p className="card-text">
              Was: AED <del>5119.00</del>
            </p>
            <p className="card-text">
              Now: AED <strong>4589.00 </strong> Inclusive of VAT
            </p>
            <p>
              Saving: <strong>AED 530.00</strong> 10% Off
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="col-4">
          <div className="card-body">
            <p>
              {" "}
              <img
                src="https://z.nooncdn.com/s/app/com/noon/icons/free_returns.svg"
                alt=""
              />
              Enjoy hassle free returns with this offer.
            </p>
            <button className="btn-link border-0 bg-white">Learn More</button>
            <p className="m-2">
              <img
                src="https://z.nooncdn.com/s/app/com/noon/icons/warranty.svg"
                alt=""
              />
              <strong>No warranty</strong>
            </p>
            <p className="m-2">
              <img
                className="h-25 w-25"
                src="https://z.nooncdn.com/s/app/com/noon/icons/seller.svg"
                alt=""
              />
              Sold by{" "}
              <button className="btn-link border-0 bg-white">
                <strong>Mango phones</strong>
              </button>
              76% rating
            </p>
            <div className="d-flex">
              <div>
                <img
                  src="https://z.nooncdn.com/nr/seller_badges/badge_low_returns_seller.png"
                  alt=""
                />
                <p>
                  <strong className="w-50 text-center">
                    Low return Seller
                  </strong>
                </p>
              </div>
              <div>
                <img
                  src="https://z.nooncdn.com/nr/seller_badges/badge_great_recent_rating.png"
                  alt=""
                />
                <p>
                  <strong> Great Recent Rating</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Support />
      <BottomList />
      <SocialBar />
      <Footer />
    </div>
  );
}
