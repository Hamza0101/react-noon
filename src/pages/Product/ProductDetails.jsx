import React from "react";
import Footer from "../../components/Footer";
import SocialBar from "../../components/Home/SocialBar";
import Topbar from "../../components/Home/Topbar";
import CustomNavbar from "../../components/Home/CustomNavbar";
import Banner from "../../components/Banner";
import Filter from "../../components/Product/Filter";
import CustomTreeView from "../../components/Product/CustomTreeView";
// import Brand from '../../components/Product/Brands'
import CustomSlider from "../../components/Product/CustomSlider";
import BottomList from "../../components/Home/BottomList";
import ProductCard from "../../components/Home/ProductCard";
import Support from "../../components/Home/Support";

export default function ProductDetails() {
  return (
    <div className="bg-light">
      <Topbar />
      <CustomNavbar />
      <div className="row">
        <div className="col-3"> product details</div>
        <div className="col-9">detailss</div>
      </div>
      <Support />
      <BottomList />
      <SocialBar />
      <Footer />
    </div>
  );
}
