import React from "react";

export default function FilterBar(props) {
  return (
    <div>
      <div className="d-flex  justify-content-between">
        <div className="m-2">
          Filter By: {"  "}
          {props.filterBar.length > 0 ? (
            <>
              {props.filterBar.map((data, index) => {
                return (
                  <>
                    {console.log("I am fname", data.fname)}
                    {data.fname === "Rating  1" ||
                    data.fname === "Price 0 99999999999999" ? (
                      ""
                    ) : (
                      <button
                        className="btn-outline-primary "
                        onClick={() => {
                          props.handleFilter(data);
                        }}
                      >
                        {data.fname} <strong className="h5">x</strong>
                      </button>
                    )}
                  </>
                );
              })}
            </>
          ) : (
            <>{/* <h1></h1> */}</>
          )}
        </div>
      </div>
    </div>
  );
}
