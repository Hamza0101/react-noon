import React from "react";
import "./review.css";

export default function Reviews() {
  return (
    <div className="container-fluid">
      <div>Overall Rating</div>
      <span className="heading">User Rating</span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star"></span>
      <p>4.1 average based on 254 reviews.</p>
      <hr></hr>

      <div className="row w-25 h-25">
        <div className="side">
          <div>
            <p>
              5{" "}
              <img
                src="data:image/png;base64,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"
                className="star-size"
                alt=""
              />
            </p>
          </div>
        </div>
        <div className="middle">
          <div className="bar-container">
            <div className="bar-5 rounded" style={{ width: 90 + "%" }}></div>
          </div>
        </div>
        <div className="side right">
          <div>(150)</div>
        </div>
        <div className="side">
          <div>
            4 <span className="fa fa-star checked"></span>
          </div>
        </div>
        <div className="middle">
          <div className="bar-container">
            <div className="bar-4 rounded" style={{ width: 90 + "%" }}></div>
          </div>
        </div>
        <div className="side right">
          <div>63</div>
        </div>
        <div className="side">
          <div>
            3 <span className="fa fa-star checked"></span>
          </div>
        </div>
        <div className="middle ">
          <div className="bar-container">
            <div className="bar-3 rounded" style={{ width: 90 + "%" }}></div>
          </div>
        </div>
        <div className="side right">
          <div>15</div>
        </div>
        <div className="side">
          <div>
            2 <span className="fa fa-star checked"></span>
          </div>
        </div>
        <div className="middle  rounded-cricle">
          <div className="bar-container">
            <div className="bar-2 rounded" style={{ width: 90 + "%" }}></div>
          </div>
        </div>
        <div className="side right">
          <div>6</div>
        </div>
        <div className="side">
          <div>
            1 <span className="fa fa-star checked"></span>
          </div>
        </div>
        <div className="middle  rounded-cricle">
          <div className="bar-container">
            <div className="bar-1 rounded" style={{ width: 60 + "%" }}></div>
          </div>
        </div>
        <div className="side right">
          <div>20</div>
        </div>
      </div>
    </div>
  );
}
