import React from "react";
import banners from "./banner.json";

export default function ImgCard() {
  return (
    <div className="container-fluid">
      <div className="row bg-light">
        <div className="d-flex flex-row">
          {banners.secondaryBanner.length > 0 ? (
            <>
              {banners.secondaryBanner.map((banners, index) => {
                return (
                  <div className="p-2">
                    <img className="p-2 w-100 h-100" src={banners.url} alt="" />
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <h1>No banner avialable!</h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
