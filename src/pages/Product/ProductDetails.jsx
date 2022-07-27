import React from "react";
import Footer from "../../components/Footer";
import SocialBar from "../../components/Home/SocialBar";
import Topbar from "../../components/Home/Topbar";
import CustomNavbar from "../../components/Home/CustomNavbar";
import BottomList from "../../components/Home/BottomList";
import ProductCard from "../../components/Home/ProductCard";
import Support from "../../components/Home/Support";
import product from "../../components/Home/product.json";
import { Overview } from "./Overview";
import Specification from "./Specification";
import Reviews from "./Reviews";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import data from "./imageUrl.json";
import { add_to_cart } from "../../actions/actionCart";

export default function ProductDetails() {
  const params = useParams();
  const dispatch = useDispatch();
  const [prdUrl, setPrdUrl] = useState(product[params.id].url);
  const [activeBtn, setActiveBtn] = useState(1);
  const addToCart = () => {
    const myCart = {
      id: Date.now().toString(36) + Math.random().toString(36),
      pid: params.id,
      pname: product[params.id].pname,
      pdetail: product[params.id].pdetail,
      url: prdUrl,
      price: product[params.id].price,
      currency: "SAR",
      arival: product[params.id].arival,
      bname: product[params.id].bname,
      bid: product[params.id].bid,
      rating: product[params.id].bid,
      quantity: 1,
    };
    dispatch(add_to_cart(myCart));
  };
  return (
    <div className="bg-light">
      <Topbar />
      <CustomNavbar />
      <div className="row container-fluid m-2">
        <div className="col-md-1 col-2">
          {data.length > 0 ? (
            <>
              {data.map((data, index) => {
                return (
                  <div className="card m-2">
                    <img
                      className="card-img-top"
                      src={data.url}
                      alt="Card image cap"
                      role="button"
                      onClick={() => {
                        setPrdUrl(data.url);
                      }}
                    />
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <h1></h1>
            </>
          )}
        </div>

        <div className="col-md-3 col-9">
          <div className="card">
            <img className="card-img-top" src={prdUrl} alt="Card image cap" />
          </div>{" "}
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <h4 className="card-title" data-testid={`bname${params.id}`}>
              {product[params.id].bname}
            </h4>
            <h5 className="card-title" data-testid={`pdetail${params.id}`}>
              {product[params.id].pdetail}
            </h5>
            <p className="card-text" data-testid={`rating${params.id}`}>
              Model Number : Iphone 13 Pro Max | {product[params.id].rating}
              <img
                className="footer-logo w-25"
                src="https://z.nooncdn.com/s/app/com/noon/design-system/simpleicons/star-filled.svg"
                alt=""
              />{" "}
              287 ratings
            </p>
            <p className="card-text" data-testid={`currency${params.id}`}>
              Was: {product[params.id].currency} <del>5119.00</del>
            </p>
            <p className="card-text" data-testid={`currency${product.id}`}>
              Now: {product[params.id].currency} <strong>4589.00 </strong>{" "}
              Inclusive of VAT
            </p>
            <p data-testid={`currency${product.id}`}>
              Saving: <strong>{product[params.id].currency} 530.00</strong> 10%
              Off
            </p>
            <div className="bg-pink h-100">
              <p>
                {" "}
                <img
                  src="https://z.nooncdn.com/s/app/com/noon/icons/vip_credit_card.svg"
                  alt=""
                />
                <strong className="m-2">Earn AED 228.15</strong>cashback with
                the Mashreq Noon VIP Credit Card.{" "}
                <button className="btn-link bg-pink border-0">Apply Now</button>
              </p>
            </div>
            <div>
              <p>
                <img
                  src="https://z.nooncdn.com/s/app/com/noon/icons/emi.svg"
                  alt=""
                />
                Monthly payment plans from AED 761
                <button className="btn-link border-0 ">
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
                <div className="p-2 col-10 ">
                  <button
                    className=" btn-primary w-100 h-100"
                    data-testid="mybtn"
                    onClick={() => {
                      addToCart();
                    }}
                  >
                    <strong> Add To Cart</strong>{" "}
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
                <div className="bg-light">
                  <button className="btn-link border-1 border-light bg-white">
                    <img
                      src="https://z.nooncdn.com/products/tr:n-t_80/v1654522001/N51315009A_1.jpg"
                      alt=""
                    />
                  </button>
                  <button className="btn-link border-1 border-light bg-white ml-3">
                    <img
                      src="https://z.nooncdn.com/products/tr:n-t_80/v1654522001/N51315010A_1.jpg"
                      alt=""
                    />
                  </button>
                  <button className="btn-link border-1 border-light bg-white ml-3">
                    <img
                      src="https://z.nooncdn.com/products/tr:n-t_80/v1654522002/N51315176A_1.jpg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <div className=" my-4 ">
                <h6 className="my-4">
                  <strong>Frequently Bought Together</strong>
                </h6>
                <div className="row my-4 bg-white">
                  <div className=" col-3 m-2 my-3">
                    <div className="custom-control custom-checkbox ">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="ck1a"
                      />
                      <label className="custom-control-label" htmlFor="ck1a">
                        <img
                          src="https://z.nooncdn.com/products/tr:n-t_80/v1648570072/N50840185A_1.jpg"
                          alt="#"
                          className="img-fluid"
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

                  <div className=" col-3 mx-2 my-3">
                    <div className="custom-control custom-checkbox image-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="ck1a"
                      />
                      <label className="custom-control-label" htmlFor="ck1a">
                        <img
                          src="https://z.nooncdn.com/products/tr:n-t_80/v1648570072/N50840185A_1.jpg"
                          alt="#"
                          className="img-fluid"
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
                  <div className=" col-3 mx-2 my-3">
                    <div className="custom-control custom-checkbox image-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="ck1a"
                      />
                      <label className="custom-control-label" htmlFor="ck1a">
                        <img
                          src="https://z.nooncdn.com/products/tr:n-t_80/v1648570072/N50840185A_1.jpg"
                          alt="#"
                          className="img-fluid"
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
        <div className="col-md-4">
          <div className="card-body">
            <p>
              {" "}
              <img
                src="https://z.nooncdn.com/s/app/com/noon/icons/free_returns.svg"
                alt=""
              />
              Enjoy hassle free returns with this offer.
            </p>
            <button className="btn-link border-0 bg-light">Learn More</button>
            <div className="d-flex">
              <img
                src="https://z.nooncdn.com/s/app/com/noon/icons/warranty.svg"
                alt=""
              />
              <p className="m-2">
                <strong>No warranty</strong>
              </p>
            </div>
            <div className="d-flex">
              <div>
                <img
                  className="mt-2"
                  src="https://z.nooncdn.com/s/app/com/noon/icons/seller.svg"
                  alt=""
                />
              </div>
              <p className="m-2">
                Sold by{" "}
                <button className="btn-link border-0 bg-light">
                  <strong>Mango phones</strong>
                </button>
                76% rating
              </p>
            </div>

            <div className="d-flex my-2">
              <div className="p-2">
                <img
                  src="https://z.nooncdn.com/nr/seller_badges/badge_low_returns_seller.png"
                  alt=""
                  className=""
                />
                <p className=" text-center w-75">
                  <strong>Low return Seller</strong>
                </p>
              </div>
              <div className="my-2">
                <img
                  src="https://z.nooncdn.com/nr/seller_badges/badge_great_recent_rating.png"
                  alt=""
                  className=""
                />
                <p className=" text-center w-75">
                  <strong> Great Recent Rating</strong>
                </p>
              </div>
              <div className="">
                <h1 className="text-success my-4">86%</h1>
                <p className="w-100">
                  <strong className="text-center"> product as Described</strong>
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
      <div className="container-fluid row">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <span
                className="nav-item nav-link active border-primary "
                role="button"
                href=""
                onClick={() => {
                  setActiveBtn(1);
                }}
              >
                {activeBtn === 1 ? (
                  <h5 className="text-primary myBorder h-100 ">
                    <strong>OVERVIEW</strong>
                  </h5>
                ) : (
                  <h5 className="text-black-50">
                    <strong>OVERVIEW</strong>{" "}
                  </h5>
                )}{" "}
                <span className="sr-only "></span>
              </span>
              <span
                className="nav-item nav-link active"
                role="button"
                href=""
                onClick={() => {
                  setActiveBtn(2);
                }}
              >
                {activeBtn === 2 ? (
                  <h5 className="text-primary myBorder h-100">
                    <strong>SPECIFICATIONS</strong>
                  </h5>
                ) : (
                  <h5 className="text-black-50">
                    <strong>SPECIFICATIONS</strong>
                  </h5>
                )}

                <span className="sr-only"></span>
              </span>
              <span
                className="nav-item nav-link active"
                role="button"
                href=""
                onClick={() => {
                  setActiveBtn(3);
                }}
              >
                {activeBtn === 3 ? (
                  <h5 className="text-primary myBorder h-100 ">
                    <strong>REVIEWS</strong>
                  </h5>
                ) : (
                  <h5 className="text-black-50">
                    <strong>REVIEWS</strong>
                  </h5>
                )}

                <span className="sr-only"></span>
              </span>
            </div>
          </div>
        </nav>
      </div>

      <div>
        {activeBtn === 1 ? (
          <Overview />
        ) : activeBtn === 2 ? (
          <Specification />
        ) : (
          <Reviews pid={params.id} />
        )}
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
