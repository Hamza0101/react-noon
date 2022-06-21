import React from "react";
import category from "./category.json";

export default function CategoryCard() {
  return (
    <div>
      <div className="row my-3 m-2 bg-light   ">
        {category.length > 0 ? (
          <>
            {category.map((category, index) => {
              return (
                <div className=" border-0 text-center bg-light  my-3 col-1">
                  <img className="rounded w-100 my-2" src={category.url} />
                </div>
              );
            })}
          </>
        ) : (
          <>
            <h1>No Category avialable!</h1>
          </>
        )}
      </div>
    </div>
  );
}
