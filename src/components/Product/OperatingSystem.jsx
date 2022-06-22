import React from "react";

export default function NetworkType() {
  return (
    <div>
      <div className="">
        <strong className="m-2"> Operating System </strong>
        <ul className="p-2">
          <li className="d-flex justify-content-between">
            <div className="mr-5">
              <input type="checkbox" name="Apple" id="" />
              <label className="m-2 text-black-50" htmlFor="">
                Android
              </label>
            </div>
            <p className="p-2 text-black-50"> (313)</p>
          </li>
          <li className="d-flex justify-content-between">
            <div className="mr-5">
              <input type="checkbox" name="Apple" id="" />
              <label className="m-2 text-black-50" htmlFor="">
                IOS
              </label>
            </div>
            <p className="p-2 text-black-50"> (313)</p>
          </li>
          <li className="d-flex justify-content-between">
            <div className="mr-5">
              <input type="checkbox" name="Apple" id="" />
              <label className="m-2 text-black-50" htmlFor="">
                HarmonyOS
              </label>
            </div>
            <p className="p-2 text-black-50"> (313)</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
