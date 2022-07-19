import React from "react";

export default function Sidebar() {
  return (
    <div className="container-fluid side-bar">
      <div className="container " style={{ height: "100vh" }}>
        <h5 className="my-3 ">
          <strong>Halla Tester!</strong>
        </h5>
        <p>test@gmail.com</p>
        <div>
          <li className="liItem my-3">
            <strong className="text-black-50">
              <img
                src="https://z.nooncdn.com/s/app/com/noon/icons/free_returns_usp.svg"
                alt=""
              />{" "}
              Order
            </strong>
          </li>
          <li className="liItem my-3">
            <strong className="text-black-50">
              {" "}
              <img
                src="https://z.nooncdn.com/s/app/com/noon/icons/free_returns_usp.svg"
                alt=""
              />{" "}
              Return
            </strong>
          </li>
          <li className="liItem my-3">
            <u>
              {" "}
              <strong className="text-black-">
                {" "}
                <img
                  src="https://z.nooncdn.com/s/app/com/noon/icons/free_returns_usp.svg"
                  alt=""
                />{" "}
                Address
              </strong>
            </u>
          </li>

          <li className="liItem my-3">
            <strong className="text-black-50">
              {" "}
              <img
                src="https://z.nooncdn.com/s/app/com/noon/icons/free_returns_usp.svg"
                alt=""
              />{" "}
              Warranty
            </strong>
          </li>
          <li className="liItem my-3">
            <strong className="text-black-50">
              {" "}
              <img
                src="https://z.nooncdn.com/s/app/com/noon/icons/free_returns_usp.svg"
                alt=""
              />{" "}
              Noon
            </strong>
          </li>
          <li className="liItem my-3">
            <strong className="text-black-50">
              {" "}
              <img
                src="https://z.nooncdn.com/s/app/com/noon/icons/free_returns_usp.svg"
                alt=""
              />{" "}
              Profile
            </strong>
          </li>
          <li className="liItem my-3">
            <strong className="text-black-50">
              {" "}
              <img
                src="https://z.nooncdn.com/s/app/com/noon/icons/free_returns_usp.svg"
                alt=""
              />{" "}
              Preferences
            </strong>
          </li>
        </div>
      </div>

      <strong className="text-black-50 m-4 my-20 ">Sign out</strong>
    </div>
  );
}
