import React from "react";
import { useState } from "react";

export default function BrandItem(props) {
  const [checked, setChecked] = useState(false);
  const handleCheck = (e) => {
    // console.log("checked things", myCheck);
    if (props.brand.id !== 0)
      props.brandFilter[props.brand.id - 1].check = true;
    else {
      console.log(
        "i am false ok:",
        props.brandFilter[props.brand.id - 1].check
      );
      // props.brandFilter[props.brand.id].check = false;
    }
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
    props.handleBrand();
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
            value={checked}
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
