import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFilter } from "../../actions/actionFilters";

export default function FilterBar(props) {
  let dispatch = useDispatch();
  const filterBar = useSelector((state) => state.filterReducer.filters);
  const RemoveFilter = (data) => {
    dispatch(removeFilter(data));
  };

  return (
    <div>
      <div className="d-flex  justify-content-between">
        <div className="m-2">
          Filter By: {"  "}
          {filterBar.length > 0 ? (
            <>
              {filterBar.map((data, index) => {
                return (
                  <>
                    {data.fname === "Rating  1" ||
                    data.fname === "Price 0 99999999999999" ? (
                      ""
                    ) : (
                      <button
                        className="btn-outline-primary "
                        onClick={() => {
                          // RemoveFilter(data);

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
