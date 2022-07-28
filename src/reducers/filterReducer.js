import data from "../components/Home/product.json";
import myFilter from "../components/Product/data/filter.json";
import type from "../types/type.js";
const {
  ADD_FILTER_PRODUCT,
  REMOVE_FILTER_PRODUCT,
  ADD_BRAND_FILTER,
  REMOVE_BRAND_FILTER,
  ADD_PRICE_FILTER,
  REMOVE_PRICE_FILTER,
  ADD_RATING_FILTER,
  REMOVE_RATING_FILTER,
} = type;
let filters = [
  {
    id: Date.now().toString(36) + Math.random().toString(36),
    type: "price",
    fname: "Price 0 99999999999999",
  },
  {
    id: Date.now().toString(36) + Math.random().toString(36),
    type: "rating",
    fname: "Rating  1",
  },
];
let maxPrice = 99999999999999,
  minPrice = 0,
  minRating = 1;
let myBrands = myFilter.brand;

const filterReducer = (
  state = {
    products: data,
    filters: filters,
  },

  action
) => {
  switch (action.type) {
    case ADD_FILTER_PRODUCT:
      if (action.payload.defaultAddress) {
        state = state.map((obj) => {
          return { ...obj, defaultAddress: false };
        });
      }
      state.push(action.payload);
      return state;
    case REMOVE_FILTER_PRODUCT:
      console.log("i m ok", action.payload);
      let myfilterArray;
      if (action.payload.type === "rating") {
        minRating = 1;
        myfilterArray = filters.map((obj) => {
          if (obj.type === "rating") {
            console.log("Ia m my rating", obj);
            return { ...obj, fname: "Rating  1" };
          }
          return obj;
        });
      } else if (action.payload.type === "price") {
        minPrice = 0;
        maxPrice = 99999999999999;
        myfilterArray = filters.map((obj) => {
          if (obj.type === "price") {
            return { ...obj, fname: "Price 0 99999999999999" };
          }
          return obj;
        });
      } else if (action.payload.type === "brand") {
        myBrands = myBrands.map((obj) => {
          if (obj.id === action.payload.id) {
            return { ...obj, check: false };
          }
          return obj;
        });
        myfilterArray = filters.filter((e) => {
          return e.id !== action.payload.id;
        });
      } else {
        return state;
      }
      let bexist = false;
      console.log("I am check", myBrands);
      myBrands.map((obj) => {
        if (obj.check) {
          bexist = true;
        }
      });
      let myfilteredProducts = data.filter((e) => {
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
      console.log("I am deletion", minRating);
      return { ...state, products: myfilteredProducts, filters: myfilterArray };
    case ADD_BRAND_FILTER:
      if (action.payload.type === "brand") {
        if (action.payload.check) {
          myBrands = myBrands.map((obj) => {
            if (obj.id === action.payload.id) return { ...obj, check: true };
            return obj;
          });
          let myfilter = {
            id: action.payload.id,
            type: "brand",
            fname: action.payload.bname,
          };
          filters.push(myfilter);
        } else {
          myBrands = myBrands.map((obj) => {
            if (obj.id === action.payload.id) return { ...obj, check: false };
            return obj;
          });
          filters = filters.filter((e) => {
            return e.id !== action.payload.id;
          });
          state = { ...state, filters: filters };
        }
      } else if (action.payload.type === "rating") {
        minRating = action.payload.rating;
        filters = filters.map((obj) => {
          if (obj.type === "rating") {
            return { ...obj, fname: "Rating " + minRating };
          }
          return obj;
        });
        state = { ...state, filters: filters };
      } else if (action.payload.type === "price") {
        minPrice = action.payload.minPrice;
        maxPrice = action.payload.maxPrice;
        filters = filters.map((obj) => {
          if (obj.type === "price") {
            return { ...obj, fname: "Price " + minPrice + " to " + maxPrice };
          }
          return obj;
        });
        state = { ...state, filters: filters };
        console.log("me price", minPrice, maxPrice);
      }
      let brandexist = false;
      myBrands.map((obj) => {
        if (obj.check) {
          brandexist = true;
        }
      });
      console.log("my Brands price", minPrice, maxPrice);
      let filteredProducts = data.filter((e) => {
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
      return { ...state, products: filteredProducts };

    case REMOVE_BRAND_FILTER:
      state = state.map((data) => {
        if (data.id === action.payload) {
          return { ...data, defaultAddress: true };
        } else {
          return { ...data, defaultAddress: false };
        }
      });
      return state;
    default:
      return state;
  }
};

export default filterReducer;
