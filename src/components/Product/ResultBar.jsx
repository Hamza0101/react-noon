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
            <strong className="text-black-50 m-2">Sort By</strong>
            <button className="btn-light border-dark">
              Recommended{" "}
              <img
                src="https://z.nooncdn.com/s/app/com/noon/icons/dropdownArrow.svg"
                alt=""
              />
            </button>
          </h6>
        </div>
        <div className="m-2">
          <h6>
            {" "}
            <strong className="text-black-50 m-2">Display</strong>
            <button className="btn-light border-dark">
              50 Per Page{" "}
              <img
                src="https://z.nooncdn.com/s/app/com/noon/icons/dropdownArrow.svg"
                alt=""
              />
            </button>
          </h6>
        </div>
        <button className="float-end invisible">Rec</button>
      </div>
    </div>
  );
}
