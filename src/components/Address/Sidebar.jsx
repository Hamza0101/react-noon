import React from "react";

export default function Sidebar() {
  return (
    <div className="container-fluid">
      <div className="h-100">
        <h4>
          <strong>Halla Tester!</strong>
        </h4>
        <p>testDeveloper@gmail.com</p>
        <ul>
          <li className="liItem m-2 mt-2">
            <strong className="text-black-50">Order</strong>
          </li>
          <li className="liItem m-2 mt-2">
            <strong className="text-black-50">Return</strong>
          </li>
          <li className="liItem m-2">
            <u>
              {" "}
              <strong className="text-black-">Address</strong>
            </u>
          </li>
          <li className="liItem m-2">
            <strong className="text-black-50">Saved Card</strong>
          </li>
          <li className="liItem m-2">
            <strong className="text-black-50">Warranty Claims</strong>
          </li>
          <li className="liItem m-2">
            <strong className="text-black-50">Noon Credits</strong>
          </li>
          <li className="liItem m-2">
            <strong className="text-black-50">Profile</strong>
          </li>
          <li className="liItem m-2">
            <strong className="text-black-50">Preferences</strong>
          </li>
          <li className="liItem m-2">
            <strong className="text-black-50">Gift Cards</strong>
          </li>
        </ul>
      </div>

      <strong className="text-black-50 m-4 my-10 ">Sign out</strong>
    </div>
  );
}
