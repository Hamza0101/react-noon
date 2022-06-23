import React from "react";
import { useState } from "react";
export default function PriceFilter(props) {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <h5 className="m-2"> Price </h5>
      <form onSubmit={handleSubmit}>
        <input
          className="w-25"
          type="number"
          value={val1}
          id="1"
          onChange={(e) => {
            setVal1(e.target.value);
          }}
        />{" "}
        <strong> TO </strong>
        <input
          className="w-25"
          type="number"
          value={val2}
          id="2"
          onChange={(e) => {
            setVal2(e.target.value);
          }}
        />{" "}
        <button
          className="btn-link"
          onClick={() => {
            props.handleGo(val1, val2);
          }}
        >
          {" "}
          <strong>GO</strong>
        </button>
      </form>
    </div>
  );
}
