import React from "react";
import Product from "./Product";

export default function Products(props) {
  return (
    <div>
      <h3> Products</h3>
      <>
        <div className="filter container m-5">
          <div className="row">
            <h6 className="col-2">Filter by</h6>
            <select
              type="text"
              className="col-2"
              placeholder="Price $USD"
              id="category"
            >
              <option>Category</option>
              <option>Laptop</option>
              <option>Mobile</option>
              <option>LCD</option>
            </select>
            <select
              type="text"
              className="col-2 ml-3"
              placeholder="Price $USD"
              id="brand"
            >
              <option>Brand</option>
              <option>Samsung</option>
              <option>Haier</option>
              <option>Apple</option>
            </select>
          </div>
        </div>

        {props.products.map((product) => {
          return (
            <Product
              key={product.pid}
              product={product}
              onDelete={props.onDelete}
            />
          );
        })}
      </>
    </div>
  );
}
