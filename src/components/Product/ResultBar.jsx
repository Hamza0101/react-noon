import React from "react";

export default function ResultBar() {
  return (
    <div className="w-100">
      <div className="d-flex flex-md-row flex-sm-column flex-column">
        <div className="">
          <h5 className="">
            {" "}
            25 result for <strong>"mobiles"</strong>
            <div className=""></div>
          </h5>
        </div>
        <div className="m-2">
          <h6>
            {" "}
            <div className="dropdown">
              <strong className="text-black-50 m-2">Sort By</strong>
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Recommended
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Discounted
                </a>
                <a className="dropdown-item" href="#">
                  Gifts
                </a>
                <a className="dropdown-item" href="#">
                  Grocery
                </a>
              </div>
            </div>
          </h6>
        </div>
        <div className="m-2">
          <h6>
            {" "}
            <div className="dropdown">
              <strong className="text-black-50 m-2">Display</strong>
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                50 per page
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  25 per page
                </a>
                <a className="dropdown-item" href="#">
                  75 per page
                </a>
                <a className="dropdown-item" href="#">
                  100 per page
                </a>
              </div>
            </div>
          </h6>
        </div>
        <button className="float-end invisible">Rec</button>
      </div>
    </div>
  );
}
