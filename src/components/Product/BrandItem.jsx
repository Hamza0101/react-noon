import React from "react";
import { useState } from "react";

export default function BrandItem(props) {
  const [checked, setChecked] = useState(true);
  const handleCheck = (e) => {
    setChecked(!checked);
    props.handleBrand(checked, props.brand.id);
  };
  return (
    <>
      <li className="d-flex justify-content-between">
        <div className="mr-5">
          <input
            type="checkbox"
            name={props.brand.bname}
            id={props.brand.id}
            onClick={(e) => {
              handleCheck(e);
            }}
            checked={props.brand.check}
          />
          <label className="m-2 text-black-50" htmlFor="">
            {props.brand.bname}
          </label>
        </div>
        <p className="p-2 text-black-50"> (313)</p>
      </li>
    </>
  );
}
