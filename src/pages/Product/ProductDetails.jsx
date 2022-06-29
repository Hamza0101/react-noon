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
      <div className="row">
        <div className="col-4">
          <div className="card">
            <img
              className="card-img-top"
              src={product[1].url}
              alt="Card image cap"
            />
          </div>{" "}
        </div>
        <div className="col-4">
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
            <div className="bg-pink">
              <p>
                {" "}
                <img
                  src="https://z.nooncdn.com/s/app/com/noon/icons/vip_credit_card.svg"
                  alt=""
                />
                <strong className="m-2">Earn AED 228.15</strong>cashback with
                the Mashreq Noon VIP Credit Card.{" "}
                <button className="btn-link bg-white border-0">
                  Apply Now
                </button>
              </p>
            </div>
            <div>
              <p>
                <img
                  src="https://z.nooncdn.com/s/app/com/noon/icons/emi.svg"
                  alt=""
                />
                Monthly payment plans from AED 761
                <button className="btn-link border-0 bg-white">
                  View more details
                </button>
              </p>
            </div>
            <div className="d-flex">
              <div className="p-2">
                <p>Order in 6 hrs 56 mins</p>
                <strong>Free delivery by Tomorrow, Jun 29</strong>
              </div>
              <div>
                <img
                  src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg"
                  alt=""
                />
                <img
                  src="https://z.nooncdn.com/s/app/com/noon/icons/help.svg"
                  alt=""
                  className="ml-2"
                />
              </div>
            </div>
            <div>
              <strong>Quantity</strong>
              <div className="d-flex">
                <div className="p-2">
                  <div class="dropdown">
                    <button
                      class="btn btn-outline-info dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <strong>1</strong>
                      {"  "} |
                    </button>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a class="dropdown-item" href="#">
                        1
                      </a>
                      <a class="dropdown-item" href="#">
                        2
                      </a>
                      <a class="dropdown-item" href="#">
                        3
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <button className="btn-lg btn-primary w-100">
                    Add To Cart
                  </button>
                </div>
              </div>
              <div>
                <p className="text-black-50">
                  Version:{" "}
                  <strong className="text-dark">International Version</strong>
                </p>
                <div>
                  <button className="btn-outline-dark">
                    <strong className="">Physical Dual Sim</strong>
                  </button>
                  <button className="btn-outline-dark ml-3">
                    <strong>UAE Version </strong>
                  </button>
                  <button className="btn-outline-dark ml-3">
                    <strong>International Version </strong>
                  </button>
                  <button className="btn-outline-dark m-3">
                    <strong>KSA Version </strong>
                  </button>
                  <button className="btn-outline-dark m-3">
                    <strong>USA Version </strong>
                  </button>
                </div>
              </div>
              <div>
                <p className="text-black-50 m-2">
                  Internal Memory: <strong className="text-dark">256</strong>
                </p>
                <div>
                  <button className="btn-outline-dark">
                    <strong className="">128 GB</strong>
                  </button>
                  <button className="btn-outline-dark ml-3">
                    <strong>256 GB </strong>
                  </button>
                  <button className="btn-outline-dark ml-3">
                    <strong>512 GB </strong>
                  </button>
                  <button className="btn-outline-dark m-3">
                    <strong>1 TB </strong>
                  </button>
                </div>
              </div>
            </div>
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
            <div className="d-flex m-2">
              <div>
                <img
                  src="https://z.nooncdn.com/nr/seller_badges/badge_low_returns_seller.png"
                  alt=""
                  className=""
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
              <div>
                <h1 className="text-success m-3">86%</h1>
                <p>
                  <strong className=""> product as Descibed</strong>
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://z.nooncdn.com/s/app/com/noon/icons/free_returns_usp.svg"
                alt=""
              />
              <strong> FREE RETURNS </strong>
              <p className="text-black-50 ml-4 pl-3">
                Get free returns on eligible items
              </p>
            </div>
            <div>
              <img
                src="https://z.nooncdn.com/s/app/com/noon/icons/trusted_shipping_usp_v2.svg"
                alt=""
              />
              <strong> TRUSTED SHIPPING </strong>
              <p className="text-black-50 ml-4 pl-3">
                Free shipping when you spend AED 50 and above on express items
              </p>
            </div>
            <div>
              <img
                src="https://z.nooncdn.com/s/app/com/noon/icons/contactless_delivery_usp.svg"
                alt=""
              />
              <strong>CONTACTLESS DELIVERY </strong>
              <p className="text-black-50 ml-4 pl-3">
                Your delivery will be left at your door, valid on prepaid orders
                only.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <h5>
          <strong>How about these?</strong>
        </h5>
        <ProductCard />
      </div>
      <Support />
      <BottomList />
      <SocialBar />
      <Footer />
    </div>
  );
}
