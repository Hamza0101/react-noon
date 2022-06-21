import React from "react";
import banners from "./banner.json";
console.log(banners.discountBanners[1].url);

export default function ImgCard() {
  return (
    <div>
      <div className="row bg-light">
        <div className="d-flex flex-row">
          {banners.discountBanners.length > 0 ? (
            <>
              {banners.discountBanners.map((banners, index) => {
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
