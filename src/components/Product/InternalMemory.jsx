import React from "react";

export default function InternalMemory() {
  return (
    <div>
      <div className="">
        <strong className="m-2"> Internal Memory </strong>
        <ul className="p-2">
          <li className="d-flex justify-content-between">
            <div className="mr-5">
              <input type="checkbox" name="Apple" id="" />
              <label className="m-2 text-black-50" htmlFor="">
                512 & more
              </label>
            </div>
            <p className="p-2 text-black-50"> (313)</p>
          </li>
          <li className="d-flex justify-content-between">
            <div className="mr-5">
              <input type="checkbox" name="Apple" id="" />
              <label className="m-2 text-black-50" htmlFor="">
                256
              </label>
            </div>
            <p className="p-2 text-black-50"> (313)</p>
          </li>
          <li className="d-flex justify-content-between">
            <div className="mr-5">
              <input type="checkbox" name="Apple" id="" />
              <label className="m-2 text-black-50" htmlFor="">
                128
              </label>
            </div>
            <p className="p-2 text-black-50"> (313)</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
