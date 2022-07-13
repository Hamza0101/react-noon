import React from "react";

export default function ResultBar() {
  return (
    <div>
      <div className="d-flex  justify-content-between">
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
            <div class="dropdown">
              <strong className="text-black-50 m-2">Sort By</strong>
              <button
                class="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Recommended
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  Discounted
                </a>
                <a class="dropdown-item" href="#">
                  Gifts
                </a>
                <a class="dropdown-item" href="#">
                  Grocery
                </a>
              </div>
            </div>
          </h6>
        </div>
        <div className="m-2">
          <h6>
            {" "}
            <div class="dropdown">
              <strong className="text-black-50 m-2">Display</strong>
              <button
                class="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                50 per page
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  25 per page
                </a>
                <a class="dropdown-item" href="#">
                  75 per page
                </a>
                <a class="dropdown-item" href="#">
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
