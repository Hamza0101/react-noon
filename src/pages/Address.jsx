import React from "react";
import AddAddress from "../components/Address/AddAddress";
import AddressCard from "../components/Address/AddressCard";
import Sidebar from "../components/Address/Sidebar";
import Footer from "../components/Footer";
import SocialBar from "../components/Home/SocialBar";
import Topbar from "../components/Home/Topbar";
// import data from "../data/address.json";
// import { useLocation } from "react-router-dom";

import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Address(props) {
  let location = useLocation();
  console.log("I am location", location.state);
  let address = location.state;
  let navigate = useNavigate();
  // const [address, setAddress] = useState(data);
  // const updateAddress = (data) => {
  //   let myUpdate = address.map((obj) => {
  //     console.log("you are finding me", obj);
  //     return { ...obj, defaultAddress: false };
  //   });
  //   myUpdate.push(data);
  //   setAddress(myUpdate);
  //   console.log("final", address);
  // };
  // const addAddress = (data) => {
  //   console.log("I am the one", address);
  //   setAddress(data);
  // };
  // const { address } = location.address;
  // console.log("I am route", location.address);

  const getAddress = () => {
    // setAddress(address);
  };
  // useEffect(getAddress, [address]);
  return (
    <div className="">
      <Topbar />
      <div className="row">
        <div className="col-2 bg-white">
          <Sidebar />
        </div>
        <div className="col-10">
          {/* <AddressCard /> */}
          <AddAddress
            address={address.myData}
            // addAddress={addAddress}
            // setAddress={setAddress}
            // updateAddress={updateAddress}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}