import React from "react";

export default function BrandItem(props) {
  return (
    <>
      {/* {console.log("brandata", props.data.bname)} */}
      <li className="d-flex justify-content-between">
        <div className="mr-5">
          <input type="checkbox" name="Apple" id={props.brand.id} />
          <label className="m-2 text-black-50" htmlFor="">
            {props.brand.bname}
          </label>
        </div>
        <p className="p-2 text-black-50"> (313)</p>
      </li>
    </>
  );
}
