import React from "react";
import "../../styles/address.css";
// import { Component } from "react";
// import BootstrapSwitchButton from "bootstrap-switch-button-react";
import Switch from "react-switch";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";

export default function AddAddress(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [label, setLabel] = useState("");
  const [defaultAddress, setDefaultAddress] = useState(false);
  const [checked, setChecked] = useState(false);
  console.log("I am Address", props.address);

  let navigate = useNavigate();

  const toggle = (checked) => {
    setChecked(checked);
  };
  const addAddress = () => {
    let updatedAddress;
    let myAddress = {
      id: Date.now().toString(36) + Math.random().toString(36),
      firstName: firstName,
      lastName: lastName,
      phoneNo: phoneNo,
      fullAddress: fullAddress,
      label: label,
      defaultAddress: checked,
    };
    if (checked) {
      let myUpdate = props.address.map((obj) => {
        console.log("you are finding me", obj);
        return { ...obj, defaultAddress: false };
      });
      myUpdate.push(myAddress);
      // props.address = myUpdate;
      //  console.log("final", address);
      // props.address.push(myAddress);
      navigate(`/address`, { state: { myUpdate } });
    } else {
      // let myUpdate = props.address.map((obj) => {
      //   console.log("you are finding me", obj);
      //   return obj;
      // });
      // myUpdate.push(myAddress);
      // props.address = myUpdate;
      props.address.push(myAddress);
      let myUpdate = props.address;
      navigate(`/address`, { state: { myUpdate } });
    }

    console.log("i am not", updatedAddress);

    // props.addAddress(updatedAddress);
    // props.addAddress(myAddress);
    // console.log("Not okay", props.address);
    // navigate(`/address`, { state: { updatedAddress } });
    // console.log(props.address);
  };
  return (
    <div className="m-2 ml-2 container">
      <h4>
        <strong>Add new address</strong>
      </h4>
      <p className="text-black-50">
        <strong>
          {" "}
          Enter your address and contact details so we can deliver to you qickly
          and efficiently
        </strong>
      </p>
      {/* <div className="d-flex bg-white w-25 m-2">
        <div className="p-1 bg-pink ml-3 mt-2">
          <p className="text-black">Save as Gift address</p>
        </div>
        <div className="p-1 mt-2">
          <Switch
            checked={checked}
            onChange={(checked) => {
              toggle(checked);
            }}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={15}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 1px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={15}
            width={36}
            className="react-switch"
            id="material-switch"
          />
        </div>
      </div> */}
      <div className="m-2 bg-white row ">
        <div className="col-6">
          <h5 className="p-4">
            <strong>Location Details</strong>
            <img
              src="https://z.nooncdn.com/s/app/com/common/images/flags/ae.svg"
              alt=""
              className="mx-2"
            />
          </h5>
          <div class="pl-4">
            <p>
              {" "}
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="w-25 h-25"
              />
              H6 Dubai,Civic Center
            </p>
            <label>
              <strong>Full Adress</strong>
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="eg, Appartment Name, Building Name, Street No"
              value={fullAddress}
              onChange={(e) => {
                setFullAddress(e.target.value);
              }}
            />

            <label className="my-2">
              <strong>Address Lable</strong>(optional)
            </label>
            <div className="my-2">
              <input
                class="form-check-input mx-2"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value={label}
                onChange={(e) => {
                  setLabel("work");
                  console.log(label);
                }}
              />
              <label class="form-check-label mx-4" for="flexRadioDefault1">
                Home
              </label>
              <input
                class="form-check-input mx-2"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value={label}
                onChange={(e) => {
                  setLabel("home");
                  console.log(label);
                }}
              />
              <label class="form-check-label mx-4" for="flexRadioDefault1">
                Work
              </label>
            </div>
            <div className="row p-2">
              <Switch
                checked={checked}
                onChange={(checked) => {
                  toggle(checked);
                  setDefaultAddress(!checked);
                  console.log("i am default", defaultAddress);
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

              <p className="mx-3">Set as default address</p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <h5 className="p-4">
            <strong>Your Contact Details</strong>
          </h5>

          <div className="">
            <label>
              <strong>Phone No.</strong>
            </label>
            <PhoneInput
              className="w-100"
              country={"us"}
              value={phoneNo}
              onChange={(phone) => {
                setPhoneNo(phone);
                console.log(phoneNo);
              }}
            />
            <label className="my-2">
              <strong>First Name</strong>
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Alex"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <label className="my-2">
              <strong>Last Name</strong>
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="John"
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value);
              }}
            />
          </div>
        </div>
        <button
          className="btn-primary btn-lg ml-auto my-3 mr-3"
          onClick={() => {
            addAddress();
          }}
        >
          Save Address
        </button>
      </div>
    </div>
  );
}
