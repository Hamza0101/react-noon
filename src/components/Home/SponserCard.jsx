import React from "react";
import sponser from "./sponser.json";

export default function SponserCard() {
  return (
    <div className="container-fluid">
      <div className="row bg-light">
        <div className="d-flex flex-row">
          {sponser.length > 0 ? (
            <>
              {sponser.map((sponser, index) => {
                return (
                  <div className="p-2">
                    <img className="p-2 w-100 h-100" src={sponser.url} alt="" />
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <h1>No Sponser avialable!</h1>
            </>
          )}

          {/* <h6 className="float-right mr-5 text-dark">Sponsored</h6> */}
        </div>
      </div>
    </div>
  );
}
