import React from "react";
import banner from "./banner.json";

export default function ClearanceDeal() {
  return (
    <div className="container-fluid">
      <div className="row bg-color">
        <img
          className="w-100"
          src="https://k.nooncdn.com/cms/pages/20220520/5899f4bc150087a9868d8f3dd49cc150/en_dk_uae-title-01.png"
          alt=""
        />
        <div className="d-flex flex-row">
          {banner.clearanceDealBanner.length > 0 ? (
            <>
              {banner.clearanceDealBanner.map((banner, index) => {
                return (
                  <div className="p-2">
                    <img className="p-2 w-100 h-100" src={banner.url} alt="" />
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <h1>No Banner avialable!</h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
