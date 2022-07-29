import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBrandFilter, removeBrandFilter } from "../../actions/actionFilters";

export default function BrandItem(props) {
  let dispatch = useDispatch();
  const [checked, setChecked] = useState(true);
  const handleCheck = (e) => {
    setChecked(!checked);
    let myFilter = {
      id: props.brand.id,
      check: checked,
      type: "brand",
      bname: props.brand.bname,
    };

    props.handleBrand(checked, props.brand.id, myFilter);
  };
  return (
    <>
      <li className="d-flex justify-content-between">
        <div className="mr-5">
          <input
            aria-labelledby="myBrand"
            data-testid={`brandCheck${props.brand.id}`}
            type="checkbox"
            name={props.brand.bname}
            id={props.brand.id}
            onClick={(e) => {
              handleCheck(e);
            }}
            checked={props.brand.check}
          />
          <span className="form-control">
            <label
              className="m-2 text-black-50"
              id="myBrand"
              data-testid={`brand${props.brand.id}`}
            >
              <span>{props.brand.bname}</span>
            </label>
          </span>
        </div>
        <p className="p-2 text-black-50"> (313)</p>
      </li>
    </>
  );
}
