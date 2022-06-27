import * as React from "react";
import "./customSlider.css";
import { useState } from "react";
// function valuetext(value: number) {
//   return `${value}°C`;
// }

export default function CustomSlider(props) {
  const [slideVal, setSlideVal] = useState(3);
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");

  // output.innerHTML = slider.value;

  // slider.oninput = function () {
  //   output.innerHTML = { slideVal };
  // };

  return (
    <div className="p-2">
      <div className="slidecontainer">
        <input
          type="range"
          min="1"
          max="5"
          value={slideVal}
          onChange={(e) => {
            setSlideVal(e.target.value);
            props.handleSlider(slideVal);
          }}
          className="slider"
          id="myRange"
        />
        {/* {console.log("i am slider", this.value)} */}
        <p>
          Value: <span id="demo">{slideVal}</span>
        </p>
      </div>
    </div>
  );
}
