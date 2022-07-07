import React from "react";

export default function Sidebar() {
  return (
    <div className="container-fluid">
      <div className="h-100">
        <h4>
          <strong>Halla Tester!</strong>
        </h4>
        <p>testDeveloper@gmail.com</p>
        <ul className="text-sm">
          <li className="liItem mt-2">
            <strong className="text-black-50">
              <img
                src="https://z.nooncdn.com/s/app/com/noon/icons/free_returns_usp.svg"
                alt=""
              />{" "}
              Order
            </strong>
          </li>
          <li className="liItem mt-2">
            <strong className="text-black-50">
              {" "}
              <img
                src="https://z.nooncdn.com/s/app/com/noon/icons/free_returns_usp.svg"
                alt=""
              />{" "}
              Return
            </strong>
          </li>
          <li className="liItem">
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
          <li className="liItem">
            <strong className="text-black-50">
              {" "}
              <img
                src="https://z.nooncdn.com/s/app/com/noon/icons/free_returns_usp.svg"
                alt=""
              />{" "}
              Saved Card
            </strong>
          </li>
          <li className="liItem">
            <strong className="text-black-50">
              {" "}
              <img
                src="https://z.nooncdn.com/s/app/com/noon/icons/free_returns_usp.svg"
                alt=""
              />{" "}
              Warranty
            </strong>
          </li>
          <li className="liItem">
            <strong className="text-black-50">
              {" "}
              <img
                src="https://z.nooncdn.com/s/app/com/noon/icons/free_returns_usp.svg"
                alt=""
              />{" "}
              Noon
            </strong>
          </li>
          <li className="liItem">
            <strong className="text-black-50">
              {" "}
              <img
                src="https://z.nooncdn.com/s/app/com/noon/icons/free_returns_usp.svg"
                alt=""
              />{" "}
              Profile
            </strong>
          </li>
          <li className="liItem">
            <strong className="text-black-50">
              {" "}
              <img
                src="https://z.nooncdn.com/s/app/com/noon/icons/free_returns_usp.svg"
                alt=""
              />{" "}
              Preferences
            </strong>
          </li>
          <li className="liItem">
            <strong className="text-black-50">
              {" "}
              <img
                src="https://z.nooncdn.com/s/app/com/noon/icons/free_returns_usp.svg"
                alt=""
              />{" "}
              Gift Cards
            </strong>
          </li>
        </ul>
      </div>

      <strong className="text-black-50 m-4 my-10 ">Sign out</strong>
    </div>
  );
}
