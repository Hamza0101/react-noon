import React from "react";
import Navbar from "../../components/Home/CustomNavbar";
import Topbar from "../../components/Home/Topbar";
import SocialBar from "../../components/Home/SocialBar";
import Footer from "../../components/Footer";
import BottomList from "../../components/Home/BottomList";
import Support from "../../components/Home/Support";
export default function Cart() {
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
            <p>(4 item)</p>
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
                <div className="row">
                  <div className="col-2">
                    <img
                      className="card-img-top"
                      src="https://z.nooncdn.com/products/tr:n-t_120/v1654514111/N51362014A_1.jpg"
                      alt="Card  cap"
                    />
                  </div>
                  <div className="col-9">
                    <div className="d-flex">
                      <h6 className="p-2">
                        <strong>Lenovo</strong>
                      </h6>
                      <p className="ml-auto">
                        AED <strong className="h4">899</strong>
                      </p>
                    </div>
                    <div className="ml-2">
                      <p className="card-text">
                        IdeaPad 3 Chromebook 14M836 With 14-Inch FHD Display,
                        Mediatek MT8183 Processor / 4GB RAM / 64GB eMMC /
                        Integrated ARM Mali-G72 MP3 GPU / Chrome OS / English
                        Arctic Grey
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
                </div>
                <div className="">
                  <button className="btn-primary btn-lg h-75 w-100">
                    <strong className="mb-auto">Apply</strong>
                  </button>
                </div>
              </div>
            </form>
            <div className="row">
              <h6>Subtotal(2 Items)</h6>
              <h6 className="col-5 ml-auto">
                <strong>AED 5211.95</strong>
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
                <strong>AED 5211.95</strong>
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
