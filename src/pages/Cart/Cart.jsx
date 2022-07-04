import React from "react";
import Navbar from "../../components/Home/CustomNavbar";
import Topbar from "../../components/Home/Topbar";
import SocialBar from "../../components/Home/SocialBar";
import Footer from "../../components/Footer";
import BottomList from "../../components/Home/BottomList";
import Support from "../../components/Home/Support";
import data from "../../data/cart.json";
import { useState } from "react";
export default function Cart() {
  const [cartTotal, setCartTotal] = useState(0);
  const [items, setItems] = useState(1);
  let quantity = 1;
  let totalAmount = cartTotal;
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="m-2">
            <h4 className="ml-2">
              <strong>Cart</strong>
            </h4>
          </div>
          <div className="mt-2">
            <p>({data.cart.length} item)</p>
          </div>
        </div>

        <div className="row">
          <div className="col-9">
            {" "}
            <img
              src="https://k.nooncdn.com/cms/pages/20220626/072c6ff79c997ca559ff50829e0e1b44/en_uae-cart-01.png"
              alt=""
              className="w-100"
            />
            <div className="row m-2">
              <div className="card col-12">
                {data.cart.map((cart, index) => {
                  // console.log("I am Cart", cart.id);

                  return (
                    <div className="row" key={index}>
                      <div className="col-2">
                        <img
                          className="card-img-top"
                          src={cart.url}
                          alt="Card  cap"
                        />
                      </div>
                      <div className="col-9">
                        <div className="d-flex">
                          <h6 className="p-2">
                            <strong>{cart.pname}</strong>
                          </h6>
                          <p className="ml-auto">
                            {cart.currency}{" "}
                            <strong className="h4">{cart.price}</strong>
                          </p>
                        </div>
                        <div className="ml-2">
                          <p className="card-text">
                            {cart.pdetail}
                            <p className="mt-1"> Order in the next 57 mins</p>
                          </p>

                          <strong>Free delivery by Tomorrow, Jul 1</strong>
                          <p>
                            Sold By <strong>noon</strong>
                          </p>
                          <div>
                            <p>
                              <img
                                src="https://z.nooncdn.com/s/app/com/noon/icons/same_day_delivery.svg"
                                alt=""
                              />
                              Select Get it today on checkout to get it today
                            </p>
                            <p>
                              <img
                                src="https://z.nooncdn.com/s/app/com/noon/icons/warranty.svg"
                                alt=""
                              />
                              1 Year Warranty
                              <img
                                src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg"
                                alt=""
                                className="ml-auto"
                              />
                              <div className="p-2 col-2">
                                <div className="dropdown">
                                  {" "}
                                  console.log(quantity);
                                  <button
                                    className="btn btn-outline-info dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <strong>{items}</strong>
                                    {"  "}
                                  </button>
                                  <div
                                    className="dropdown-menu "
                                    aria-labelledby="dropdownMenuButton"
                                    style={{ minWidth: "10px" }}
                                  >
                                    <span
                                      className="dropdown-item "
                                      role="button"
                                      onClick={() => {
                                        quantity = 1;
                                        setItems(quantity);
                                        console.log(quantity);
                                        totalAmount += cart.price * quantity;
                                        console.log(totalAmount);
                                        setCartTotal(totalAmount);
                                        console.log(quantity);
                                      }}
                                    >
                                      1
                                    </span>
                                    <span
                                      className="dropdown-item"
                                      role="button"
                                      onClick={() => {
                                        quantity = 2;
                                        setItems(quantity);
                                        totalAmount += cart.price * quantity;
                                        console.log(totalAmount);
                                        setCartTotal(totalAmount);
                                        console.log(quantity);
                                      }}
                                    >
                                      2
                                    </span>
                                    <span
                                      className="dropdown-item"
                                      role="button"
                                      onClick={() => {
                                        quantity = 3;
                                        setItems(quantity);
                                        totalAmount += cart.price * quantity;
                                        console.log(totalAmount);
                                        setCartTotal(totalAmount);
                                        console.log(quantity);
                                      }}
                                    >
                                      3
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </p>

                            <p>
                              <button className="btn-link border-0">
                                <img
                                  src="https://z.nooncdn.com/s/app/com/noon/icons/trash.svg"
                                  alt=""
                                />{" "}
                                Remove
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button className="btn-lg btn-outline-primary w-25 m-2 ">
                Continue Shopping
              </button>
            </div>
          </div>
          <div className="col-3">
            {" "}
            <h5>Order Summary</h5>
            <form className=" form-inline">
              <div className="row">
                <div className="">
                  <input
                    className="form-control "
                    type="search"
                    placeholder="Coupon Code Or Gift Card  "
                    aria-label="Search"
                  />
                  <button className="btn-primary btn-lg  ">
                    <strong className="mb-auto ">Apply</strong>
                  </button>
                </div>
              </div>
            </form>
            <div className="row">
              <h6>Subtotal({data.cart.length} Items)</h6>
              <h6 className="col-5 ml-auto">
                <strong>AED {cartTotal}</strong>
              </h6>
            </div>
            <div className="row">
              <div>
                <h6>
                  Shipping{" "}
                  <button className="btn-link border-0 bg-white">
                    {" "}
                    Details
                  </button>
                </h6>
              </div>
              <div className="ml-auto col-3">
                <h6 className="text-primary">
                  <strong>Free</strong>
                </h6>
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <h4>
                <strong>Total</strong>
              </h4>
              <p className="mt-1">(inclusive of VAT)</p>
              <h4 className="ml-4">
                <strong>AED {cartTotal}</strong>
              </h4>
            </div>
            <div className="row">
              <div className="col-1">
                <img
                  src="https://z.nooncdn.com/s/app/com/noon/icons/emi.svg"
                  alt=""
                />
              </div>
              <div className="ml-2 ">
                <p>Monthly payment plans from AED 500</p>
              </div>
            </div>
            <button className="btn-link bg-white border-0 ml-4 ">
              view more details
            </button>
            <div className="row">
              <button className="btn-primary btn-lg w-100">CHECKOUT</button>
            </div>
            <div className="row mt-2">
              <div className="col-1 mt-2">
                <img
                  src="https://z.nooncdn.com/s/app/com/noon/icons/vip_credit_card.svg"
                  alt=""
                />
              </div>
              <div className="col-11">
                <p>
                  <strong className="text-success">
                    Earn AED 260.6 cashback
                  </strong>{" "}
                  with the Mashreq Noon VIP Credit Card.{" "}
                  <button className="btn-link bg-white border-0">
                    Apply Now
                  </button>
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
