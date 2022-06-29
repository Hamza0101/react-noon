import React, { Component } from "react";
import "./dealcard.css";
import banner from "./banner.json";

export default class DealCard extends Component {
  render() {
    return (
      <div>
        <div className="row bg-color">
          <img
            src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mega-deal-title-01.png"
            alt=""
          />
          <div className="d-flex flex-row">
            {banner.length > 0 ? (
              <>
                {banner.map((banner, index) => {
                  return (
                    <div className="p-2">
                      <img
                        className="p-2 w-100 h-100"
                        src={banner.discountBanners.url}
                        alt=""
                      />
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <h1></h1>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}
