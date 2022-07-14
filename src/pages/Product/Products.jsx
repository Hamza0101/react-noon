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
  const [filteredBrandProducts, setFilteredBrandProducts] = useState([]);
  let brandExist = false;
  let filteration, filterArray;
  let brandProducts = [];
  const [minPrice, setMinPrice] = useState(0);
  const [ratingval, setRatingVal] = useState(1);
  const [maxPrice, setMaxPrice] = useState(9999999);
  const [categoryFilter, setCategoryFilter] = useState(false);
  let myarray;
  let minFilter = minPrice,
    maxFilter = maxPrice,
    ratingFilter = ratingval;

  const [brandFilter, setBrandFilter] = useState(brands);
  const handleFilter = (data) => {
    setFilterBar(
      filterBar.filter((e) => {
        return e.id !== data.id;
      })
    );
    if (data.type === "brand") {
      let mybrand = brandFilter.map((obj) => {
        if (obj.id === data.id) {
          return { ...obj, check: false };
        }

        return obj;
      });
      setBrands(mybrand);

      handleBrand(false, data.id);
    } else if (data.type === "price") {
      setMinPrice(0);
      setMaxPrice(9999999999999);
      handleGo(0, 99999999999999);
    } else {
      setRatingVal(1);
      handleSlider(1);
    }
  };

  const handleCategory = (cname) => {
    setCategoryFilter(cname);
    let filteredProduct = data.filter((e) => {
      return e.category === cname;
    });
    setProducts(filteredProduct);
  };

  const handleBrand = (checked, bid) => {
    if (checked === false) {
      myarray = filterBar.filter((e) => {
        return e.id !== bid;
      });
      setFilterBar(myarray);
    }
    if (bid != -1) {
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
    }

    filteration = brandFilter.map((obj) => {
      if (obj.id === bid) {
        return { ...obj, check: checked };
      }

      return obj;
    });
    setBrandFilter(filteration);
    setBrands(filteration);
    filterArray = filteration.filter((e) => {
      return e.check === true;
    });
    setBrands(filteration);
    // setBrands(filter.brand);

    // setBrandFilter(filteration);
    console.log("I am filterBar===", filteration);

    data.filter((a) => {
      if (
        a.price > minPrice &&
        a.price < maxPrice &&
        (categoryFilter ? a.category === categoryFilter : !categoryFilter) &&
        a.rating >= ratingval &&
        filterArray.filter((e) => {
          return e.id === a.bid;
        }).length
      ) {
        brandProducts.push(a);
      }
    });

    // handleFilterBar();
    let handleCheck = false;
    filterBar.map((obj) => {
      if (obj.type === "brand") {
        handleCheck = true;
      }
    });

    if (filterArray.length) {
      if (brandProducts.length) {
        setProducts(brandProducts);
      } else {
        setProducts([]);
      }
      // setFilteredBrandProducts(brandProducts);
      // handleFilterBar();
    } else {
      let filteredProduct = data.filter((e) => {
        return (
          e.price > minPrice &&
          e.price < maxPrice &&
          (categoryFilter ? e.category === categoryFilter : !categoryFilter) &&
          e.rating >= ratingval
        );
      });
      setProducts(filteredProduct);

      // setProducts(data);
      // handleFilterBar();
    }

    // setProducts(filteredProduct);
  };
  const handleSlider = (value1) => {
    setRatingVal(value1);
    const d = new Date();
    let time = d.getTime();
    const myfilter = {
      id: time,
      type: "rating",
      rating: value1,
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
      if (ratingFilter) {
        filterBar.push(myfilter);
      }
    } else {
      const applied = filterBar.map((obj) => {
        if (obj.type === "rating") {
          return { ...obj, fname: myfilter.fname };
        }

        return obj;
      });
      console.log("I am applied", applied);
      setFilterBar(applied);
    }
    console.log("min", minPrice, "max", maxPrice, "rating", ratingval);
    let filteredProduct = data.filter((e) => {
      return (
        e.price > minPrice &&
        e.price < maxPrice &&
        (categoryFilter ? e.category === categoryFilter : !categoryFilter) &&
        e.rating >= value1
      );
    });
    let handleCheck = false;
    filterBar.map((obj) => {
      if (obj.type === "brand") {
        handleCheck = true;
      }
    });
    if (handleCheck) {
      handleBrand(false, -1);
    } else {
      setProducts(filteredProduct);
    }
  };

  const handleGo = (value1, value2) => {
    setMinPrice(value1);
    setMaxPrice(value2);

    // setMinPrice(value1);
    // setMaxPrice(value2);
    const d = new Date();
    let time = d.getTime();
    const myfilter = {
      type: "price",
      id: time,
      minPrice: value1,
      maxPrice: value2,
      fname: "Price " + value1 + " " + value2,
    };
    filterBar.map((e) => {
      if (e.type === "rating") {
        setRatingExist(true);
        return e;
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
        return (
          e.price > value1 &&
          e.price < value2 &&
          (categoryFilter ? e.category === categoryFilter : !categoryFilter) &&
          e.rating >= ratingval
        );
      });
      let handleCheck = false;
      filterBar.map((obj) => {
        if (obj.type === "brand") {
          handleCheck = true;
        }
      });
      if (handleCheck) {
        handleBrand(false, -1);
      } else {
        setProducts(filteredProduct);
      }
      // handleBrand();
    }
  };
  const getproduct = () => {
    setProducts(products);
    setBrands(brandFilter);
  };
  useEffect(getproduct, [products], [brandFilter]);
  return (
    <div className="bg-light">
      <Topbar />
      <CustomNavbar />
      <div className="row m-2">
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
