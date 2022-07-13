import React from "react";
import { useState } from "react";

export default function BrandItem(props) {
  const [checked, setChecked] = useState(true);
  const handleCheck = (e) => {
    setChecked(!checked);
    // console.log("checked things", myCheck);
    props.handleBrand(checked, props.brand.id);
    // props.setBrandFilter(myCheck);
    // console.log(checked);
    // const myCheck = {
    //   id: props.brand.id,
    //   check: checked,
    // };
    // if (props.brandFilter) {
    //   if (props.brandFilter[props.brand.id]) {
    //     props.setBrandFilter(
    //       (props.brandFilter[props.brand.id].check = checked)
    //     );
    //   }
    //   props.setBrandFilter([...props.brandFilter, myCheck]);
    // } else {
    //   props.setBrandFilter(myCheck);
    // }
    // console.log("br and filter", props.brandFilter);
  };
  return (
    <>
      {/* {console.log("brandata", props.data.bname)} */}
      <li className="d-flex justify-content-between">
        <div className="mr-5">
          <input
            type="checkbox"
            name={props.brand.bname}
            id={props.brand.id}
            onClick={(e) => {
              handleCheck(e);
            }}
            value={props.brand.check}
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
