import React from "react";
import AddressCard from "../components/Address/AddressCard";
import Sidebar from "../components/Address/Sidebar";
import Footer from "../components/Footer";
import SocialBar from "../components/Home/SocialBar";
import Topbar from "../components/Home/Topbar";

export default function Address() {
  return (
    <div className="">
      <Topbar />
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-2 bg-white">
          <Sidebar />
        </div>
        <div className="col-10">
          <AddressCard />
        </div>
      </div>

      <Footer />
    </div>
  );
}
