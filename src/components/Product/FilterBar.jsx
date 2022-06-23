import React from "react";

export default function FilterBar() {
  return (
    <div>
      <div className="d-flex  justify-content-between">
        <div className="m-2">
          <h6>
            {" "}
            <button className="btn-link border-info h-25">
              Mobile Screen Size{" "}
              <img
                className="w-25 w-25 img-fluid"
                src="https://img.icons8.com/material-outlined/2x/delete-sign.png"
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
