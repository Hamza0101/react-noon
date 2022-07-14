import * as React from "react";
import "./customSlider.css";
import { useState } from "react";

export default function CustomSlider(props) {
  // const [slideVal, setSlideVal] = useState(1);

  return (
    <div className="conntainer mt-4">
      <div className="container">
        <h6 className="text-black">
          <strong>Product Rating</strong>
        </h6>
        <div className="slidecontainer ">
          <p>
            <span id="demo" className="text-primary m-2">
              {props.ratingval} Stars or More
            </span>
          </p>
          <input
            type="range"
            min="1"
            max="5"
            step={0.1}
            value={props.ratingval}
            onChange={(e) => {
              // setSlideVal(e.target.value);
              props.handleSlider(e.target.value);
            }}
            className="slider"
            id="myRange"
          />
          <div className="d-flex ">
            <div>
              <p className="text-black-50 p-2">1 star</p>
            </div>
            <div className="p-2 ml-auto ">
              <p className="text-black-50 ">5 start</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
