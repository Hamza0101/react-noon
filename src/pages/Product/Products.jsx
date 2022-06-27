import React from "react";
import Footer from "../../components/Footer";
import SocialBar from "../../components/Home/SocialBar";
import Topbar from "../../components/Home/Topbar";
import CustomNavbar from "../../components/Home/CustomNavbar";
import Banner from "../../components/Banner";
import Filter from "../../components/Product/Filter";
import CustomTreeView from "../../components/Product/CustomTreeView";
import Brands from "../../components/Product/Brands";
import CustomSlider from "../../components/Product/CustomSlider";
import BottomList from "../../components/Home/BottomList";
import ProductCard from "../../components/Home/ProductCard";
import Support from "../../components/Home/Support";
import NetworkType from "../../components/Product/NetworkType";
import OperatingSystem from "../../components/Product/OperatingSystem";
import InternalMemory from "../../components/Product/InternalMemory";
import ResultBar from "../../components/Product/ResultBar";
import FilterBar from "../../components/Product/FilterBar";
import ProductItems from "../../components/Product/ProductItems";
import PriceFilter from "../../components/Product/PriceFilter";
import Filteration from "../../components/Product/Filteration";
import { useState } from "react";
import data from "../../components/Home/product.json";
import filter from "../../components/Product/data/filter.json";
import { useEffect } from "react";

export default function Product() {
  const [filterSlide, setFilterSlide] = useState(0);
  const [products, setProducts] = useState(data);
  const [brands, setBrands] = useState(filter.brand);

  const [brandFilter, setBrandFilter] = useState(brands);

  console.log("iam _ brand  false", brands);
  const handleBrand = () => {
    let filtered;
    console.log("i am handle function", brandFilter);
    let filteredProduct = brandFilter.filter((e) => {
      if (e.check === true) {
        console.log("i am the first ", e);
        filtered = data.filter((a) => {
          return e.bname === a.bname;
        });
      }

      console.log("i am check", filtered);
      return filtered;
      // if (filtered) return filtered;
    });
    console.log("i am filtered ", filteredProduct);
    setProducts(filtered);

    // setProducts(filteredProduct);
  };
  const handleSlider = (value1) => {
    let filteredProduct = data.filter((e) => {
      return e.rating == value1;
    });
    setProducts(filteredProduct);
  };

  const handleGo = (value1, value2) => {
    if (value1 !== "" && value2 !== "") {
      let filteredProduct = data.filter((e) => {
        return e.price > value1 && e.price < value2;
      });
      setProducts(filteredProduct);
    }
  };
  const getproduct = () => {
    setProducts(products);
    setBrandFilter(filter.brand);
  };
  useEffect(getproduct, [products], [brandFilter]);
  return (
    <div className="bg-light">
      <Topbar />
      <CustomNavbar />
      <div className="row">
        <div className="col-3">
          <Filter />
          <CustomTreeView />
          {/* <Filteration filter={"Brand"} attr={"bname"} filtername={"brand"} /> */}
          <Brands
            brandData={brands}
            handleBrand={handleBrand}
            setBrandFilter={setBrandFilter}
            brandFilter={brandFilter}
          />
          <PriceFilter handleGo={handleGo} />
          <CustomSlider filterSlide={filterSlide} handleSlider={handleSlider} />
          <NetworkType />
          <OperatingSystem />
          <InternalMemory />
          {/* <Ram/> */}
        </div>
        <div className="col-9">
          {/* <Banner /> */}
          <ResultBar />
          {/* <FilterBar /> */}
          <ProductItems productData={products} />
        </div>
      </div>
      <Support />
      <BottomList />
      <SocialBar />
      <Footer />
    </div>
  );
}
