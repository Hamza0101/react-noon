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
                    <button
                      className="btn-outline-primary "
                      onClick={() => {
                        props.handleFilter(data.fname);
                      }}
                    >
                      {data.fname} <strong className="h5">x</strong>
                    </button>
                    {"  "}
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
