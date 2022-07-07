import React from "react";
// import AddAddress from "../components/Address/AddAddress";
import AddressCard from "../components/Address/AddressCard";
import Sidebar from "../components/Address/Sidebar";
import Footer from "../components/Footer";
// import SocialBar from "../components/Home/SocialBar";
import Topbar from "../components/Home/Topbar";
import { useEffect } from "react";
import { useState } from "react";
import data from "../data/address.json";
import { useLocation } from "react-router-dom";

export default function ViewAddress(route, props) {
  const location = useLocation();
  const [myArray, setArray] = useState([]);
  let temp = props.address;
  if (location.state) temp = location.state.myUpdate;
  console.log("I am temp", location.state);
  const [updated, setupdated] = useState(temp);

  //  location.state let updated = ;

  const [address, setAddress] = useState(data);

  const handleDefault = (data) => {
    // setRendre(false);
    // updated = data;
    setupdated(data);
    console.log("I m setUpdate", data);
    // setArray(updated);
  };

  // const updateAddress = (data) => {
  //   setAddress(data);
  // };
  // const addAddress = (data) => {
  //   setAddress([...address, data]);
  // };
  // setAddress(updated);
  // console.log("I am route", route.params);

  const getAddress = () => {
    setAddress(updated);
  };
  // useEffect(getAddress, [updated]);
  return (
    <div className="">
      <Topbar />
      <div className="row">
        <div className="col-2 bg-white">
          <Sidebar />
        </div>
        <div className="col-10">
          <AddressCard
            updated={updated ? updated : address}
            addAddress={props.addAddress}
            handleDefault={handleDefault}
          />
          {/* <AddAddress address={props.address} addAddress={props.addAddress} /> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}
