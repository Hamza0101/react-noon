import React from "react";
import AddressCard from "../components/Address/AddressCard";
import Sidebar from "../components/Address/Sidebar";
import Footer from "../components/Footer";
import Topbar from "../components/Home/Topbar";
import { useState } from "react";
import data from "../data/address.json";
import { useLocation } from "react-router-dom";

export default function ViewAddress(route, props) {
  const location = useLocation();
  let temp = props.address;
  if (location.state) temp = location.state.myUpdate;
  console.log("I am temp", location.state);
  const [updated, setupdated] = useState(temp);
  const [address, setAddress] = useState(data);

  const handleDefault = (data) => {
    setupdated(data);
    console.log("I m setUpdate", data);
  };

  return (
    <div className="bg-light ">
      <Topbar />
      <div className="row container-fluid">
        <div className=" bg-white">
          <Sidebar />
        </div>
        <div className="col-9">
          <AddressCard
            updated={updated ? updated : address}
            addAddress={props.addAddress}
            handleDefault={handleDefault}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
