import React from "react";

export default function AddressCard() {
  return (
    <div className="m-2">
      <h4>
        <strong>Addresses</strong>
      </h4>
      <p className="text-black-50">
        <strong>
          {" "}
          Manage your saved address fast and easy checkout accross our
          marketplaces
        </strong>
      </p>
      <button className="btn-primary btn-lg">Add New Address</button>
      <div className="my-4">
        <h5>
          <strong>Default Address</strong>
        </h5>
        <div className="container bg-white">
          <div className="d-flex ">
            <div className="p-2">
              <strong>Home</strong>
            </div>
            <div className="p-2 ml-auto">
              <button className="btn-link border-0 bg-white text-black-50 ">
                <u>Edit</u>
              </button>
            </div>
            <div className="p-2">
              <button className="btn-link border-0 bg-white text-black-50 ">
                <u>Delete</u>
              </button>
            </div>
            <div className="p-2">
              <div class="custom-control custom-switch">
                <label class="custom-control-label" for="customSwitches">
                  Default Address
                </label>
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customSwitches"
                />
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="p-2">
              <p>Name</p>
            </div>
            <div className="p-2">
              <p>Test Developer</p>
            </div>
          </div>
          <div className="d-flex">
            <div className="p-2">
              <p>Address</p>
            </div>
            <div className="p-2">
              <p>No Address,575WE 47-Dubai</p>
              <p>Dubai,UAE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
