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
  const [filterBar, setFilterBar] = useState([]);
  const [ratingExist, setRatingExist] = useState(false);
  const [pricingExist, setPricingExist] = useState(false);
  let brandExist = false;
  let filteration;
  let brandProducts = [];
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(9999999);
  const [rating, setRating] = useState(1);

  const handleFilterBar = () => {
    console.log("I am brandfilter:", brandFilter);
    let allFiltered = data.filter((e) => {
      // console.log("i am brand", checkBrand);
      // console.log("I am price", e.price > minPrice && e.price < maxPrice);
      // console.log("i am rating", e.rating >= rating);
      // console.log("I am e:", e);
      let brandCheck = false;
      filterBar.filter((a) => {
        if (a.type == "brand" && a.bid === e.bid) {
          brandCheck = true;
          return a.bid == e.bid;
        }
      });
      if (e.price > minPrice && e.price < maxPrice && e.rating >= rating) {
        return e;
      }
    });

    console.log(
      "min",
      minPrice,
      "max",
      maxPrice,
      "rating",
      rating,
      "you are searching me",
      allFiltered
    );
    setProducts(allFiltered);
  };

  const [brandFilter, setBrandFilter] = useState(brands);
  const handleFilter = (data) => {
    if (data.type === "brand") {
      handleBrand(false, data.id);
    } else if (data.type === "price") {
      handleGo(0, 99999999999999);
    } else {
      handleSlider(1);
    }
    setFilterBar(
      filterBar.filter((e) => {
        return e.id !== data.id;
      })
    );
  };

  const handleCategory = (cname) => {
    let filteredProduct = data.filter((e) => {
      return e.category === cname;
    });
    setProducts(filteredProduct);
  };

  const handleBrand = (checked, bid) => {
    brandExist = false;
    const myfilter = {
      type: "brand",
      id: bid,
      fname: brands[bid - 1].bname,
    };

    filterBar.filter((e) => {
      if (e.type === "brand" && e.id === bid) {
        brandExist = true;
        return e;
      }
    });
    if (checked && !brandExist) {
      filterBar.push(myfilter);
    }

    filteration = brandFilter.map((obj) => {
      if (obj.id === bid) {
        return { ...obj, check: checked };
      }

      return obj;
    });
    setBrandFilter(filteration);

    // setBrandFilter(filteration);
    let filtered;

    let filteredProduct = filteration.filter((e) => {
      if (e.check === true) {
        filtered = data.filter((a) => {
          if (e.bname === a.bname) {
            brandProducts.push(a);
            return e.bname === a.bname;
          }
        });
      }

      return filtered;
      // if (filtered) return filtered;
    });

    // handleFilterBar();
    if (brandProducts.length) {
      // handleFilterBar();
      setProducts(brandProducts);
    } else {
      setProducts(data);
    }

    // setProducts(filteredProduct);
  };
  const handleSlider = (value1) => {
    setRating(value1);
    const d = new Date();
    let time = d.getTime();
    const myfilter = {
      id: time,
      type: "rating",
      fname: "Rating  " + value1,
    };
    filterBar.filter((e) => {
      if (e.type === "rating") {
        setRatingExist(true);
        return e.type === "rating";
      }
    });

    if (!ratingExist) {
      setRatingExist(true);
      filterBar.push(myfilter);
    } else {
      const applied = filterBar.map((obj) => {
        if (obj.type === "rating") {
          return { ...obj, fname: myfilter.fname };
        }

        return obj;
      });
      setFilterBar(applied);
    }
    let filteredProduct = data.filter((e) => {
      return e.rating >= value1;
    });
    // handleFilterBar();
    setProducts(filteredProduct);
  };

  const handleGo = (value1, value2) => {
    // setMinPrice(value1);
    // setMaxPrice(value2);
    const d = new Date();
    let time = d.getTime();
    const myfilter = {
      type: "price",
      id: time,
      fname: "Price " + value1 + " " + value2,
    };
    filterBar.filter((e) => {
      if (e.type === "price") {
        setRatingExist(true);
        return e.type === "price";
      }
    });

    if (!pricingExist) {
      setPricingExist(true);
      filterBar.push(myfilter);
    } else {
      const applied = filterBar.map((obj) => {
        if (obj.type === "price") {
          return { ...obj, fname: myfilter.fname };
        }

        return obj;
      });
      setFilterBar(applied);
    }
    // filterBar.push(myfilter);
    if (value1 !== "" && value2 !== "") {
      let filteredProduct = data.filter((e) => {
        return e.price > value1 && e.price < value2;
      });
      // handleFilterBar();
      setProducts(filteredProduct);
    }
  };
  const getproduct = () => {
    setProducts(products);
  };
  useEffect(getproduct, [products], [brandFilter]);
  return (
    <div className="bg-light">
      <Topbar />
      <CustomNavbar />
      <div className="row">
        <div className="col-3">
          <Filter />
          <CustomTreeView handleCategory={handleCategory} />
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
          <FilterBar filterBar={filterBar} handleFilter={handleFilter} />
          <ProductItems productData={products} />
          <div className="d-flex justify-content-center mr-4">
            <nav aria-label="Page navigation">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <Support />
      <BottomList />
      <SocialBar />
      <Footer />
    </div>
  );
}
