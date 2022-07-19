import React from "react";
import "./review.css";
import data from "../../data/review.json";
import { useState } from "react";

export default function Reviews(props) {
  const myReview = data.review.filter((e) => {
    return e.pid == props.pid;
  });

  const star5 = myReview.filter((e) => {
    return e.pid == props.pid && e.rating === 5;
  });
  const star4 = myReview.filter((e) => {
    return e.pid == props.pid && e.rating === 4;
  });

  const star3 = myReview.filter((e) => {
    return e.pid == props.pid && e.rating === 3;
  });

  const star2 = myReview.filter((e) => {
    return e.pid == props.pid && e.rating === 2;
  });

  const star1 = myReview.filter((e) => {
    return e.pid == props.pid && e.rating === 1;
  });

  return (
    <div className="container-fluid row">
      <div className="col-4">
        <div>Overall Rating</div>
        <span className="heading">User Rating</span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <p>4.1 average based on {myReview.length} reviews.</p>
      </div>
      <div className="row w-25 h-25">
        <div className="side">
          <div>
            5{" "}
            <span>
              <img
                src="data:image/png;base64,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"
                className="star-size"
                alt=""
              />
            </span>
          </div>
        </div>
        <hr></hr>
        <div className="middle">
          <div className="bar-container mt-2">
            <div
              className="bar-5 rounded"
              style={{ width: (star5.length / myReview.length) * 100 + "%" }}
            ></div>
          </div>
        </div>
        <div className="side right">
          <div>({star5.length})</div>
        </div>
        <div className="side">
          <div>
            <strong className="">4</strong>{" "}
            <span className="">
              {" "}
              <img
                src="data:image/png;base64,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"
                className="star-size"
                alt=""
              />
            </span>
          </div>
        </div>
        <div className="middle">
          <div className="bar-container mt-2">
            <div
              className="bar-4 rounded"
              style={{ width: (star4.length / myReview.length) * 100 + "%" }}
            ></div>
          </div>
        </div>
        <div className="side right">
          <div>({star4.length})</div>
        </div>
        <div className="side">
          <div>
            3{" "}
            <span className="">
              {" "}
              <img
                src="data:image/png;base64,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"
                className="star-size"
                alt=""
              />
            </span>
          </div>
        </div>
        <div className="middle ">
          <div className="bar-container mt-2">
            <div
              className="bar-3 rounded"
              style={{ width: (star3.length / myReview.length) * 100 + "%" }}
            ></div>
          </div>
        </div>
        <div className="side right">
          <div>({star3.length})</div>
        </div>
        <div className="side">
          <div>
            2{" "}
            <span className="">
              {" "}
              <img
                src="data:image/png;base64,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"
                className="star-size"
                alt=""
              />
            </span>
          </div>
        </div>
        <div className="middle  rounded-cricle">
          <div className="bar-container mt-2">
            <div
              className="bar-2 rounded"
              style={{ width: (star2.length / myReview.length) * 100 + "%" }}
            ></div>
          </div>
        </div>
        <div className="side right">
          <div>({star2.length})</div>
        </div>
        <div className="side">
          <div>
            1{" "}
            <span className="">
              {" "}
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAACGCAMAAADaWYkTAAAAolBMVEX/////vSn/sh3/tB7/uCf/tyT/vS//uyj/wTX/th//sBv/rhf/xTz/rBf/tDD/pwD/ryz/qyP/uzj/68//+fH/tiz/wD3/zXn/9ur/xVT//fn/y2v/7tX/9OT/sCb/4rD/x1z/5Lj/w0r/5sD/uhn/yXD/tQD/1I3/xWH/2qP/z4T/2Zv/3Kz/4Ln/uUr/0JT/xXf/vVn/sz//wGb/nwD/0p5IqfMHAAAGH0lEQVR4nO2c63qyOhCFFRAFGiABLKVAtdRjPdL2/m9tT0DqEVETSJ9nf+t3ja9rZg2QaFutf/p/KBINsJf76opG+NXbx5tohF/1+j3RCIWGal8diobIFQz6pD8IRGNkGrZJj7T/hjEvffVJ7b+IxqB665GnpyfS+wtReu/3gKXXfxcN0molbWoLGNNORKNAiNSMRRUfpcKWv2DMy86WJ/FRGqqFLWCM4OE7+LUl6xiRKM4H6f2y9MiHIw4leD2whRrzKi5KzkG35B0jzhgIUe9QAqOUqKR3LKKKmjGvJ7ZQY17FoNAQnUpUlM5tEWZM2D23BYzphgJYBuq5LWCMOmgeBWy5yCLCmNFFFAozaholvBCiIkpNGzMiXgmL17QxoVpSIloktVljpmqZLWCMOm0SJfootYUa89HkfsxzabfkHfPcHEqkXbGFGqM1Z8zzlW7JO6YxY2iIrqu5KIEtFSyNGeOPiVLBopCx3wgLhKgCBYxpJkqRUtUtWccoTUTpWam2BYxR6jUm8ENnOCGV3UKlEDIZOqHP/+EtcMPhZDR9IZqm3NAtmTFE0TTyMh1NhqHLhyhyhrP51BtrHcXLdYsrmTPF33e0sTedz4bOox3kRmEye34nRFV2FLcyXGaCVVRC3p9nSRjdcXgQJZ/zUVaObBHFU7rdBzkKdbsKXcjz1Kxwo/lnct0kP0wWkykZj7XdR1E6bd7qKLu1tfGYTCeLJDyZiVHkLCaD9z7pFOXodrlT7NXtUpvywnVI/30wWThRYdN815kArSh1Upww0bcrunteGPOpEZN/PW5VxyTaZF+liUa85gw5Vtc7QqFlEgUDKPsC5ZqNiakIQFFMMp6dJvpTMgXAKKYpfZ6Pl7VhNt7AHdM01pdm3cJo2hlwxVhcHrwzuVlnwBXprFf2MMSUs7nYgNqySeRSlFZrCA0sN8QCRZCuHmbQMjXiTJu+0RVXcmc8cEapW+CKd90VqqXmeVLtLJLnacsqlFbrTVZqh5E8Rb7pDDnp1A0Tw23CjQcHCfRMXCcK9MrNZxgJRLs2mG4MYb7jOMWpEYai3HWA4dAydeoQLdCdZykO4NcBQ5e9+1gnjOtwBlyJH9iyCmsoEy3QQ7tnkce7TFAg88GHat/kC0NRHt46i2inaZxINLoYw2aVTzxeMIDipUwbiq4ZcyoTrGMyflPSpzAauygK8zZrsJI4wMSmtOKwURYQ+EwyE4kMK6Rc9uzclW7qTCy6Ga84favWXcW6zCKdGwplkZhYJH4svmGzshi8jiocg9EXOTZ4ff1jYcQaE4oWlz3C361NHLPZIscxr/Nz1hjRIG35oLipaTCyGGbKJ0ihabO1C8j2+ByGJjpj64Jinc8XzCBGrCgyryCNdENilaHzCZIZ68wsemxyYbFMDiymxQMlsmwOLLbF44w4sTAziiRhi0eQ1ogLC7q4v32nNhjr7MJ4w44SbDF7pCHUeMt+w+vbmL11oXmxzX47xSVGnIK0tOIb3qn6T2Lrhv3cCt0QI/C/uo48grTFqJKEqooGYfbbqdS+ykJJYgtZcRUNslNWlMi2r0RaRxhIVkkrWQENRldoDNtmbV4HX2kXSoLSJR0cwTJFlKb8jzFmfS5ZIiyXk9gI/xQjLPjByC6nkTFiDdIalSxuUBL7+DRqZlOakpoi5iB9wQc9u7jsPEHr01HqA3ruzflrEP5iZEEYGWfKSKz5paHuz62M5tKLEBtKYNlny+Z9sim7vPgbfJEG2Rbb1TEEliNlJNjaXnvcCbcWzmiOX2pbbM9IM3D2SBnJV1U6na+c5vilqOLctUJwI3W0HFx50OqWOeGsAPv0xWy3U18Hq9HyYMu+dUosbQsfF4otSO5q34P5uL9nXi3zC8N+AaadsqiIdNYoKF3ct5i7SLNIoSLULFckx8IHA+Xn/o/l/hyMG2yxXJEWwLLrE7x+bDoEa7zrG2BhecDfUBaMYbXS0VYtGH4WrEFZWIKUYkqCvzdstx7R5psugzDD7VRg0yUsRpKchlqD7cevAhElWfHZ3QpXlObxT7W0vrf8fjyZbL8Znkt+Ur4/40zSn4dfG/L+9yWuiB8c/hNH/QcHH9uo40x1ggAAAABJRU5ErkJggg=="
                className="star-size"
                alt=""
              />
            </span>
          </div>
        </div>
        <div className="middle  rounded-cricle">
          <div className="bar-container mt-2">
            <div
              className="bar-1 rounded"
              style={{ width: (star1.length / myReview.length) * 100 + "%" }}
            ></div>
          </div>
        </div>
        <div className="side right">
          <div>({star1.length})</div>
        </div>
      </div>
    </div>
  );
}
