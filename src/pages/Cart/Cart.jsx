import React from "react";
import Navbar from "../../components/Home/CustomNavbar";
import Topbar from "../../components/Home/Topbar";
import SocialBar from "../../components/Home/SocialBar";
import Footer from "../../components/Footer";
import BottomList from "../../components/Home/BottomList";
import Support from "../../components/Home/Support";
import data from "../../data/cart.json";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { change_quantity } from "../../actions/actionCart";
import { useEffect } from "react";
export default function Cart() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);
  const [defaultItems, setDefaultItems] = useState(20);
  const [cartData, setCartData] = useState(data);
  let totalAmount = 0;
  cartData.map((obj, index) => {
    totalAmount += obj.price * obj.quantity;
  });
  const [cartTotal, setCartTotal] = useState(totalAmount);
  let quantity = 1;

  const HomePage = () => {
    navigate(`/`);
  };

  const removeItem = (data) => {
    const updatedCart = cartData.filter((obj, index) => {
      return obj.id !== data.id;
    });
    setCartData(updatedCart);
    let price = 0;
    updatedCart.map((obj, index) => {
      price += obj.price * obj.quantity;
    });
    totalAmount = price;
    setCartTotal(price);
  };

  const getTotal = () => {
    let totalAmount = 0;
    cart.map((obj, index) => {
      totalAmount += obj.price * obj.quantity;
    });
    setCartTotal(totalAmount);
  };
  useEffect(getTotal, [cart]);

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="w-100">
        <div className="row container-fluid">
          <div className="mt-2">
            <h4 className="ml-2">
              <strong>Cart</strong>
            </h4>
          </div>
          <div className="mt-2">
            <p>({cart.length} item)</p>
          </div>
        </div>

        <div className="row container-fluid">
          <div className="col-md-9 col-12 ">
            {" "}
            <img
              src="https://k.nooncdn.com/cms/pages/20220626/072c6ff79c997ca559ff50829e0e1b44/en_uae-cart-01.png"
              alt=""
              className="w-100"
            />
            <div className="row m-2 my-4">
              <div className="card col-12">
                {cart.map((cart, index) => {
                  totalAmount += cart.price * cart.quantity;
                  return (
                    <div className="row my-4" key={index}>
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
                            <p className="d-flex">
                              <div>
                                <img
                                  src="https://z.nooncdn.com/s/app/com/noon/icons/warranty.svg"
                                  alt=""
                                />
                                1 Year Warranty
                              </div>
                              <div className="p-2 ml-auto">
                                <div className="dropdown">
                                  {" "}
                                  <button
                                    className="btn btn-outline-info dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <strong>{cart.quantity}</strong>
                                    {"  "}
                                  </button>
                                  <div
                                    className="dropdown-menu "
                                    aria-labelledby="dropdownMenuButton"
                                    style={{ minWidth: "10px" }}
                                  >
                                    {Array.from(
                                      { length: defaultItems },
                                      (_, i) => (
                                        <span
                                          className="dropdown-item "
                                          role="button"
                                          onClick={() => {
                                            quantity = i + 1;
                                            let myData = {
                                              cartId: cart.id,
                                              quantity: quantity,
                                            };
                                            dispatch(change_quantity(myData));
                                          }}
                                        >
                                          {i + 1}
                                        </span>
                                      )
                                    )}
                                  </div>
                                </div>
                              </div>
                            </p>

                            <p className="d-flex">
                              <button
                                className="btn-link border-0 bg-white"
                                onClick={() => {
                                  removeItem(cart);
                                }}
                              >
                                <img
                                  src="https://z.nooncdn.com/s/app/com/noon/icons/trash.svg"
                                  alt=""
                                />{" "}
                                Remove
                              </button>
                              <img
                                src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg"
                                alt=""
                                className=" p-2 ml-auto"
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                className="btn-sm btn-outline-primary  m-2 "
                on
                onClick={() => {
                  HomePage();
                }}
              >
                Continue Shopping
              </button>
            </div>
          </div>
          <div className="col-md-3 col-12 border border-5 ">
            <h5 className="my-3">
              <strong>Order Summary</strong>
            </h5>
            <div className="m-3 ">
              <form className=" form-inline ">
                <div className="row">
                  <div className="d-flex">
                    <input
                      className="form-control w-75 "
                      type="search"
                      placeholder="Coupon Code Or Gift Card  "
                      aria-label="Search"
                    />
                    <button className="btn-primary h-100  ">
                      <strong className="mb-auto ">Apply</strong>
                    </button>
                  </div>
                </div>
              </form>
              <div className="row my-2">
                <h6>Subtotal({cart.length} Items)</h6>
                <h6 className="col-5 ml-auto">
                  <strong>AED {cartTotal}</strong>
                </h6>
              </div>
              <div className="row">
                <div>
                  <h6>
                    Shipping{" "}
                    <button className="btn-link border-0 "> Details</button>
                  </h6>
                </div>
                <div className="ml-auto col-3">
                  <h6 className="text-primary">
                    <strong>Free</strong>
                  </h6>
                </div>
              </div>
            </div>
            <hr className=""></hr>
            <div className="d-flex">
              <h6>
                <strong>Total</strong>
              </h6>
              (inclusive of VAT)
              <h5 className="ml-auto">
                <strong>AED {cartTotal}</strong>
              </h5>
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
            <button className="btn-link border-0 ml-4 ">
              view more details
            </button>

            <button
              className="btn-primary w-100 my-2"
              style={{ height: "45px" }}
            >
              CHECKOUT
            </button>

            <div className="row">
              <div className="d-flex">
                <div className="my-2 m-2">
                  <img
                    src="https://z.nooncdn.com/s/app/com/noon/icons/vip_credit_card.svg"
                    alt=""
                  />
                </div>
                <div className="my-2">
                  <p>
                    <strong className="text-success">
                      Earn AED 260.6 cashback
                    </strong>{" "}
                    with the Mashreq Noon VIP Credit Card.{" "}
                    <button className="btn-link  border-0">Apply Now</button>{" "}
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Support />
      <BottomList />
      <SocialBar />
      <Footer />
    </>
  );
}
