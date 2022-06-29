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
      <div className="row container-fluid m-2">
        <div className="col-1">
          <div className="card m-2">
            <img
              className="card-img-top"
              src="https://z.nooncdn.com/products/tr:n-t_80/v1648570072/N50840187A_1.jpg"
              alt="Card image cap"
            />
          </div>{" "}
          <div className="card m-2">
            <img
              className="card-img-top"
              src="https://z.nooncdn.com/products/tr:n-t_80/v1637671982/N50840187A_2.jpg"
              alt="Card image cap"
            />
          </div>{" "}
          <div className="card m-2">
            <img
              className="card-img-top"
              src="https://z.nooncdn.com/products/tr:n-t_80/v1637671983/N50840187A_3.jpg"
              alt="Card image cap"
            />
          </div>{" "}
          <div className="card m-2">
            <img
              className="card-img-top"
              src="https://z.nooncdn.com/products/tr:n-t_80/v1637671982/N50840187A_4.jpg"
              alt="Card image cap"
            />
          </div>{" "}
        </div>

        <div className="col-3">
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
                className="footer-logo w-25"
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
              <div className="row">
                <div className="p-2 col-2">
                  <div className="dropdown">
                    <button
                      className="btn btn-outline-info dropdown-toggle"
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
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        1
                      </a>
                      <a className="dropdown-item" href="#">
                        2
                      </a>
                      <a className="dropdown-item" href="#">
                        3
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-2 col-10">
                  <button className="btn-lg btn-primary w-100 ">
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
                  <button className="btn-outline-dark m-2">
                    <strong className="">Dual Sim</strong>
                  </button>
                  <button className="btn-outline-dark m-2">
                    <strong>UAE Version </strong>
                  </button>
                  <button className="btn-outline-dark m-2">
                    <strong>International Version </strong>
                  </button>
                  <button className="btn-outline-dark m-2">
                    <strong>KSA Version </strong>
                  </button>
                  <button className="btn-outline-dark m-2">
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

              <div>
                <p className="text-black-50 m-2">
                  Color Name: <strong className="text-dark">Blue</strong>
                </p>
                <div>
                  <button className="btn-light">
                    <img
                      src="https://z.nooncdn.com/products/tr:n-t_80/v1654522001/N51315009A_1.jpg"
                      alt=""
                    />
                  </button>
                  <button className="btn-light ml-3">
                    <img
                      src="https://z.nooncdn.com/products/tr:n-t_80/v1654522001/N51315010A_1.jpg"
                      alt=""
                    />
                  </button>
                  <button className="btn-light ml-3">
                    <img
                      src="https://z.nooncdn.com/products/tr:n-t_80/v1654522002/N51315176A_1.jpg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <div className="bg-grey mt-4">
                <h6>
                  <strong>Frequently Bought Together</strong>
                </h6>
                <div className="row">
                  <div className="card col-4">
                    <div className="custom-control custom-checkbox ">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="ck1a"
                      />
                      <label class="custom-control-label" for="ck1a">
                        <img
                          src="https://z.nooncdn.com/products/tr:n-t_80/v1648570072/N50840185A_1.jpg"
                          alt="#"
                          class="img-fluid"
                        />
                      </label>
                    </div>
                    <div className="card-title text-center">
                      <strong>AED 49.00</strong>
                    </div>
                    <div className=" text-center">
                      <p className="footer-text-size">USB-C 20 watt charger</p>
                    </div>
                  </div>

                  <div className="card col-4">
                    <div className="custom-control custom-checkbox image-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="ck1a"
                      />
                      <label class="custom-control-label" for="ck1a">
                        <img
                          src="https://z.nooncdn.com/products/tr:n-t_80/v1648570072/N50840185A_1.jpg"
                          alt="#"
                          class="img-fluid"
                        />
                      </label>
                    </div>
                    <div className="card-title text-center">
                      <strong>AED 49.00</strong>
                    </div>
                    <div className=" text-center">
                      <p className="footer-text-size">USB-C 20 watt charger</p>
                    </div>
                  </div>
                  <div className="card col-4">
                    <div className="custom-control custom-checkbox image-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="ck1a"
                      />
                      <label class="custom-control-label" for="ck1a">
                        <img
                          src="https://z.nooncdn.com/products/tr:n-t_80/v1648570072/N50840185A_1.jpg"
                          alt="#"
                          class="img-fluid"
                        />
                      </label>
                    </div>
                    <div className="card-title text-center">
                      <strong>AED 49.00</strong>
                    </div>
                    <div className=" text-center">
                      <p className="footer-text-size">USB-C 20 watt charger</p>
                    </div>
                  </div>
                  <button className="btn-lg btn-outline-primary w-100">
                    {" "}
                    <strong className="footer-text-size">
                      Buy 4 Together for AED 55292.00
                    </strong>
                  </button>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-1">
                  <img
                    src="https://z.nooncdn.com/s/app/com/noon/icons/other_offers.svg"
                    alt=""
                  />
                </div>
                <div className="col-11">
                  <p>
                    10 other offers from other sellers{" "}
                    <strong>AED 4569.00</strong>
                    <button className="btn-link bg-light border-0">
                      View All Offers
                    </button>
                  </p>
                </div>
              </div>
              <div className="row">
                <img
                  src="https://k.nooncdn.com/cms/pages/20220620/99d3da14449d437759a6247dcd963cbe/en_mb_uae-PDP.png"
                  alt=""
                  className="w-100"
                />
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
                className="mt-2"
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
              <div className="">
                <img
                  src="https://z.nooncdn.com/nr/seller_badges/badge_low_returns_seller.png"
                  alt=""
                  className=""
                />
                <p className=" text-center w-75">
                  <strong>Low return Seller</strong>
                </p>
              </div>
              <div>
                <img
                  src="https://z.nooncdn.com/nr/seller_badges/badge_great_recent_rating.png"
                  alt=""
                  className=""
                />
                <p className=" text-center w-75">
                  <strong> Great Recent Rating</strong>
                </p>
              </div>
              <div>
                <h1 className="text-success m-4">86%</h1>
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
