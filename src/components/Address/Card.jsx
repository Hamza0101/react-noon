import React from "react";
import Switch from "react-switch";
import { useState } from "react";

export default function Card(props) {
  const [checked, setChecked] = useState(props.data.defaultAddress);
  const toggle = (checked) => {
    setChecked(checked);
  };
  return (
    <div className="container bg-white">
      <div className="d-flex ">
        <div className="p-2">
          <strong>{props.data.label}</strong>
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
          <label>Default Address</label>
          {console.log("I am the check", props.data.defaultAddress)}
          <Switch
            checked={props.data.defaultAddress}
            disabled={props.data.defaultAddress}
            onChange={(checked) => {
              toggle(checked);

              props.handleDefaultAddress(props.data.id);
            }}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={15}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 3px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={15}
            width={28}
            className="react-switch"
            id="material-switch"
          />
        </div>
      </div>
      <div className="d-flex">
        <div className="p-2">
          <p>Name</p>
        </div>
        <div className="p-2">
          <p>{props.data.firstName + " " + props.data.lastName}</p>
        </div>
      </div>
      <div className="d-flex">
        <div className="p-2">
          <p>Address</p>
        </div>
        <div className="p-2">
          <p>{props.data.fullAddress}</p>
          {/* <p>Dubai,UAE</p> */}
        </div>
      </div>
      <div className="d-flex">
        <div className="p-2">
          <p>Phone</p>
        </div>
        <div className="p-2">
          <p>
            {props.data.phoneNo} <strong>Not Verified</strong>
          </p>
        </div>
      </div>
    </div>
  );
}