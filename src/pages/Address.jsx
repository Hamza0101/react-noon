import React from "react";
import AddAddress from "../components/Address/AddAddress";
import Sidebar from "../components/Address/Sidebar";
import Footer from "../components/Footer";
import Topbar from "../components/Home/Topbar";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Address(props) {
  const params = useParams();
  let id = params.id;
  // let location = useLocation();

  return (
    <div className="bg-light">
      <Topbar />
      <div className="row container-fluid flex">
        <div className="bg-white">
          <Sidebar />
        </div>
        <div className="col-9 ">
          <AddAddress />
        </div>
      </div>

      <Footer />
    </div>
  );
}
