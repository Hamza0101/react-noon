import React from "react";
import "../../pages/Home/home.css";
// import data from "./data/filtser.json";
import BrandItem from "./BrandItem";

export default function Brands(props) {
  return (
    <div className="container">
      <strong className="m-2">
        {" "}
        Brand <button className="btn-link border-0 bg-light"> Clear</button>
      </strong>
      <input type="search" className="m-2" placeholder="Search" />
      <ul className="p-2">
        {props.brandData.length > 0 ? (
          <>
            {props.brandData.map((data, index) => {
              return (
                <BrandItem
                  brand={data}
                  filterBrand={props.filterBrand}
                  setBrandFilter={props.setBrandFilter}
                  brandFilter={props.brandFilter}
                  handleBrand={props.handleBrand}
                />
              );
            })}
          </>
        ) : (
          <>
            <h1>No Filter avialable!</h1>
          </>
        )}
      </ul>
      <button className="btn-link bg-light border-0"> see all</button>
    </div>
  );
}
