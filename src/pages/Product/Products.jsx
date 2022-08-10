import React from "react";
import Footer from "../../components/Footer";
import SocialBar from "../../components/Home/SocialBar";
import Topbar from "../../components/Home/Topbar";
import CustomNavbar from "../../components/Home/CustomNavbar";
import Filter from "../../components/Product/Filter";
import CustomTreeView from "../../components/Product/CustomTreeView";
import Brands from "../../components/Product/Brands";
import CustomSlider from "../../components/Product/CustomSlider";
import BottomList from "../../components/Home/BottomList";
import Support from "../../components/Home/Support";
import NetworkType from "../../components/Product/NetworkType";
import OperatingSystem from "../../components/Product/OperatingSystem";
import InternalMemory from "../../components/Product/InternalMemory";
import ResultBar from "../../components/Product/ResultBar";
import FilterBar from "../../components/Product/FilterBar";
import ProductItems from "../../components/Product/ProductItems";
import PriceFilter from "../../components/Product/PriceFilter";
import { useState } from "react";
import data from "../../components/Home/product.json";
import myProduct from "../../components/Home/product.json";
import filter from "../../components/Product/data/filter.json";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addBrandFilter, removeFilter } from "../../actions/actionFilters";

export default function Product() {
  let dispatch = useDispatch();
  const [filterSlide, setFilterSlide] = useState(0);
  const [products, setProducts] = useState(data);
  const [brands, setBrands] = useState(filter.brand);
  const [filterBar, setFilterBar] = useState([]);
  const [ratingExist, setRatingExist] = useState(false);
  const [pricingExist, setPricingExist] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [minRating, setMinRating] = useState(1);
  const [maxPrice, setMaxPrice] = useState(9999999);
  const [categoryFilter, setCategoryFilter] = useState(false);
  const [brandFilter, setBrandFilter] = useState(brands);
  const productsData = useSelector((state) => state.filterReducer.products);
  const filters = useSelector((state) => state.filterReducer.filters);

  // let maxPrice = 99999999999999,
  //   minPrice = 0,
  //   minRating = 1;
  let myBrands = filter.brand;
  let brandExist = false;
  let filteration, filterArray;
  let brandProducts = [];
  let myarray;
  let minFilter = minPrice,
    maxFilter = maxPrice;
  // ratingFilter = ratingval;

  const onClearBrand = () => {
    setBrands(filter.brand);
    setBrandFilter(filter.brand);
    setFilterBar(
      filterBar.filter((e) => {
        return e.type !== "brand";
      })
    );
    let filteredProduct = data.filter((e) => {
      return (
        e.price > minPrice &&
        e.price < maxPrice &&
        (categoryFilter ? e.category === categoryFilter : !categoryFilter) &&
        e.rating >= minRating
      );
    });
    setProducts(filteredProduct);
  };
  let state = {
    products: myProduct,
    filters: filters,
  };
  const removeFilters = (data) => {
    myBrands = brands;
    let myfilterArray;
    if (data.type === "rating") {
      setMinRating(1);
      myfilterArray = filters.map((obj) => {
        if (obj.type === "rating") {
          return { ...obj, fname: "Rating  1" };
        }
        return obj;
      });
    } else if (data.type === "price") {
      setMinPrice(0);
      setMaxPrice(99999999999999);
      myfilterArray = filters.map((obj) => {
        if (obj.type === "price") {
          return { ...obj, fname: "Price 0 99999999999999" };
        }
        return obj;
      });
    } else if (data.type === "brand") {
      myBrands = myBrands.map((obj) => {
        if (obj.id === data.id) {
          return { ...obj, check: false };
        }
        return obj;
      });
      myfilterArray = filters.filter((e) => {
        return e.id !== data.id;
      });
    } else {
      return state;
    }
    let bexist = false;

    myBrands.map((obj) => {
      if (obj.check) {
        bexist = true;
      }
    });
    let myfilteredProducts = myProduct.filter((e) => {
      return (
        e.price > minPrice &&
        e.price < maxPrice &&
        e.rating >= minRating &&
        (bexist
          ? myBrands.filter((a) => {
              return a.id === e.bid && a.check;
            }).length
          : true)
      );
    });

    state = {
      products: myfilteredProducts,
      filters: myfilterArray,
    };
    dispatch(addBrandFilter(state));
    // return { ...state, products: myfilteredProducts, filters: myfilterArray };
  };
  const applyFilter = (data) => {
    myBrands = brandFilter;
    let appliedfilters = filters;
    if (data.type === "brand") {
      if (data.check) {
        myBrands = myBrands.map((obj) => {
          if (obj.id === data.id) return { ...obj, check: true };
          return obj;
        });
        let myfilter = {
          id: data.id,
          type: "brand",
          fname: data.bname,
        };
        filters.push(myfilter);
      } else {
        myBrands = myBrands.map((obj) => {
          if (obj.id === data.id) return { ...obj, check: false };
          return obj;
        });
        appliedfilters = filters.filter((e) => {
          return e.id !== data.id;
        });
        state = {
          products: myProduct,
          filters: appliedfilters,
        };
        dispatch(addBrandFilter(state));
        // state = { ...state, filters: filters };
      }
    } else if (data.type === "rating") {
      setMinRating(data.rating);
      appliedfilters = filters.map((obj) => {
        if (obj.type === "rating") {
          return { ...obj, fname: "Rating " + minRating };
        }
        return obj;
      });
      state = {
        products: myProduct,
        filters: appliedfilters,
      };
      dispatch(addBrandFilter(state));
      // state = { ...state, filters: filters };
    } else if (data.type === "price") {
      setMinPrice(data.minPrice);
      setMaxPrice(data.maxPrice);
      appliedfilters = filters.map((obj) => {
        if (obj.type === "price") {
          return { ...obj, fname: "Price " + minPrice + " to " + maxPrice };
        }
        return obj;
      });
      state = {
        products: myProduct,
        filters: appliedfilters,
      };
      dispatch(addBrandFilter(state));
      // state = { ...state, filters: filters };
    }
    let brandexist = false;
    myBrands.map((obj) => {
      if (obj.check) {
        brandexist = true;
      }
    });

    let filteredProducts = myProduct.filter((e) => {
      return (
        e.price > minPrice &&
        e.price < maxPrice &&
        e.rating >= minRating &&
        (brandexist
          ? myBrands.filter((a) => {
              return a.id === e.bid && a.check;
            }).length
          : true)
      );
    });
    state = {
      products: filteredProducts,
      filters: appliedfilters,
    };
    dispatch(addBrandFilter(state));
    // return { ...state, products: filteredProducts };
  };
  const handleFilter = (data) => {
    // setFilterBar(
    //   filterBar.filter((e) => {
    //     return e.id !== data.id;
    //   })
    // );
    if (data.type === "brand") {
      let mybrand = brandFilter.map((obj) => {
        if (obj.id === data.id) {
          return { ...obj, check: false };
        }
        return obj;
      });
      setBrands(mybrand);
      setBrandFilter(mybrand);
      // handleBrand(false, data.id);
    } else if (data.type === "price") {
      setMinPrice(0);
      setMaxPrice(9999999999999);
      // handleGo(0, 99999999999999);
    } else {
      setMinRating(1);
      // handleSlider(1);
    }
    removeFilters(data);
  };

  const handleCategory = (cname) => {
    setCategoryFilter(cname);
    let filteredProduct = data.filter((e) => {
      return e.category === cname;
    });
    setProducts(filteredProduct);
  };

  const handleBrand = (checked, bid, myFilter) => {
    // if (checked === false) {
    //   myarray = filterBar.filter((e) => {
    //     return e.id !== bid;
    //   });
    //   setFilterBar(myarray);
    // }
    // if (bid != -1) {
    //   brandExist = false;
    //   const myfilter = {
    //     type: "brand",
    //     id: bid,
    //     fname: brands[bid - 1].bname,
    //   };

    //   filterBar.filter((e) => {
    //     if (e.type === "brand" && e.id === bid) {
    //       brandExist = true;
    //       return e;
    //     }
    //   });
    //   if (checked && !brandExist) {
    //     filterBar.push(myfilter);
    //   }
    // }

    filteration = brandFilter.map((obj) => {
      if (obj.id === bid) {
        return { ...obj, check: checked };
      }

      return obj;
    });
    setBrandFilter(filteration);
    setBrands(filteration);
    // filterArray = filteration.filter((e) => {
    //   return e.check === true;
    // });
    // setBrands(filteration);

    // data.filter((a) => {
    //   if (
    //     a.price > minPrice &&
    //     a.price < maxPrice &&
    //     (categoryFilter ? a.category === categoryFilter : !categoryFilter) &&
    //     a.rating >= ratingval &&
    //     filterArray.filter((e) => {
    //       return e.id === a.bid;
    //     }).length
    //   ) {
    //     brandProducts.push(a);
    //   }
    // });

    // let handleCheck = false;
    // filterBar.map((obj) => {
    //   if (obj.type === "brand") {
    //     handleCheck = true;
    //   }
    // });

    // if (filterArray.length) {
    //   if (brandProducts.length) {
    //     setProducts(brandProducts);
    //   } else {
    //     setProducts([]);
    //   }
    // } else {
    //   let filteredProduct = data.filter((e) => {
    //     return (
    //       e.price > minPrice &&
    //       e.price < maxPrice &&
    //       (categoryFilter ? e.category === categoryFilter : !categoryFilter) &&
    //       e.rating >= ratingval
    //     );
    //   });
    //   setProducts(filteredProduct);
    // }
    applyFilter(myFilter);
  };
  const handleSlider = (value1) => {
    setMinRating(value1);
    const d = new Date();
    let time = d.getTime();
    const myfilter = {
      id: time,
      type: "rating",
      rating: value1,
      fname: "Rating  " + value1,
    };
    applyFilter(myfilter);
    // dispatch(addBrandFilter(myfilter));
    // filterBar.filter((e) => {
    //   if (e.type === "rating") {
    //     setRatingExist(true);
    //     return e.type === "rating";
    //   }
    // });

    // if (!ratingExist) {
    //   setRatingExist(true);
    //   if (ratingFilter) {
    //     filterBar.push(myfilter);
    //   }
    // } else {
    //   const applied = filterBar.map((obj) => {
    //     if (obj.type === "rating") {
    //       return myfilter;
    //     }

    //     return obj;
    //   });
    //   setFilterBar(applied);
    // }
    // let filteredProduct = data.filter((e) => {
    //   return (
    //     e.price > minPrice &&
    //     e.price < maxPrice &&
    //     (categoryFilter ? e.category === categoryFilter : !categoryFilter) &&
    //     e.rating >= value1
    //   );
    // });
    // let handleCheck = false;
    // filterBar.map((obj) => {
    //   if (obj.type === "brand") {
    //     handleCheck = true;
    //   }
    // });
    // if (handleCheck) {
    //   handleBrand(false, -1);
    // } else {
    //   setProducts(filteredProduct);
    // }
  };

  const handleGo = (value1, value2) => {
    setMinPrice(value1);
    setMaxPrice(value2);
    let myFilter = {
      id: Date.now().toString(36) + Math.random().toString(36),
      type: "price",
      minPrice: minPrice,
      maxPrice: maxPrice,
    };
    applyFilter(myFilter);

    // const d = new Date();
    // let time = d.getTime();
    // const myfilter = {
    //   type: "price",
    //   id: time,
    //   minPrice: value1,
    //   maxPrice: value2,
    //   fname: "Price " + value1 + " " + value2,
    // };
    // filterBar.map((e) => {
    //   if (e.type === "price") {
    //     setRatingExist(true);
    //     return e;
    //   }
    // });

    // if (!pricingExist) {
    //   setPricingExist(true);
    //   filterBar.push(myfilter);
    // } else {
    //   const applied = filterBar.map((obj) => {
    //     if (obj.type === "price") {
    //       return myfilter;
    //     }

    //     return obj;
    //   });
    //   setFilterBar(applied);
    // }

    // if (value1 !== "" && value2 !== "") {
    //   let filteredProduct = data.filter((e) => {
    //     return (
    //       e.price > value1 &&
    //       e.price < value2 &&
    //       (categoryFilter ? e.category === categoryFilter : !categoryFilter) &&
    //       e.rating >= ratingval
    //     );
    //   });
    //   let handleCheck = false;
    //   filterBar.map((obj) => {
    //     if (obj.type === "brand") {
    //       handleCheck = true;
    //     }
    //   });
    //   if (handleCheck) {
    //     handleBrand(false, -1);
    //   } else {
    //     setProducts(filteredProduct);
    //   }
    // }
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
        <div className="col-lg-3">
          <Filter />
          <CustomTreeView handleCategory={handleCategory} />

          <Brands
            brandData={brands}
            handleBrand={handleBrand}
            setBrandFilter={setBrandFilter}
            brandFilter={brandFilter}
            onClearBrand={onClearBrand}
          />
          <PriceFilter
            handleGo={handleGo}
            val1={minPrice}
            val2={maxPrice}
            setVal1={setMinPrice}
            setVal2={setMaxPrice}
          />
          <CustomSlider
            filterSlide={filterSlide}
            handleSlider={handleSlider}
            ratingval={minRating}
          />
          <NetworkType />
          <OperatingSystem />
          <InternalMemory />
        </div>
        <div className="col-lg-9">
          <ResultBar />
          <FilterBar
            filterBar={filterBar}
            key={filterBar.id}
            handleFilter={handleFilter}
          />
          <ProductItems productData={productsData} />
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
