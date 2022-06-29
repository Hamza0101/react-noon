import React from "react";
import data from "./data/filter.json";

export default function Filteration(filterName, props) {
  return (
    <div>
      <div className="">
        <strong className="m-2"> {props.filter} </strong>
        <ul className="p-2">
          {data.filterName.length > 0 ? (
            <>
              {data.map((data, index) => {
                return (
                  <li className="d-flex justify-content-between">
                    <div className="mr-5">
                      <input type="checkbox" name="Apple" id="" />
                      <label className="m-2 text-black-50" htmlFor="">
                        {data.attr}
                      </label>
                    </div>
                    <p className="p-2 text-black-50"> (313)</p>
                  </li>
                );
              })}
            </>
          ) : (
            <>
              <h1>No Filter avialable!</h1>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
