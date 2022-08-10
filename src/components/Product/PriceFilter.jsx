import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBrandFilter } from "../../actions/actionFilters";
export default function PriceFilter(props) {
  const myMinPrice = useSelector((state) => state.filterReducer.minPrice);
  const myMaxPrice = useSelector((state) => state.filterReducer.maxPrice);
  let dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const applyPriceFilter = (minPrice, maxPrice) => {
    let myFilter = {
      id: Date.now().toString(36) + Math.random().toString(36),
      type: "price",
      minPrice: minPrice,
      maxPrice: maxPrice,
    };
    // dispatch(addBrandFilter(myFilter));
  };

  return (
    <div className="container mt-3">
      <h6 className="text-black">
        {""}
        <strong>Price (AED)</strong>{" "}
      </h6>
      <form onSubmit={handleSubmit} className="">
        <input
          className="w-25 m-2"
          type="number"
          value={props.val1}
          id="1"
          onChange={(e) => {
            props.setVal1(e.target.value);
          }}
        />{" "}
        <strong> TO </strong>
        <input
          data-testid="maxValue"
          className="w-25 m-2 "
          type="number"
          value={props.val2}
          id="2"
          onChange={(e) => {
            props.setVal2(e.target.value);
          }}
        />{" "}
        <button
          data-testid="goButton"
          className="btn-link bg-white border-0"
          onClick={() => {
            props.handleGo(props.val1, props.val2);
            applyPriceFilter(props.val1, props.val2);
          }}
        >
          {" "}
          <strong>GO</strong>
        </button>
      </form>
    </div>
  );
}
