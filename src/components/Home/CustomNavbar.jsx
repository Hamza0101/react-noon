import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();
  const viewProducts = () => {
    navigate(`/products`);
  };
  const viewAddress = () => {
    navigate(`/address`);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light font-weight-bold ">
        <li className="nav-item dropdown liItem ">
          <a
            className="nav-link dropdown-toggle navbar-brand text-size"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            ALL CATEGORIES
          </a>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a className="dropdown-item" href="#">
              Electronics & Mobile
            </a>
            <a className="dropdown-item" href="#">
              Beauty & Fragnances
            </a>
            <a className="dropdown-item" href="#">
              Sports
            </a>
          </div>
        </li>

        <div
          className="collapse navbar-collapse text-size "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav  mr-auto ">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                ELECTRONICS <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                MEN
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                WOMEN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                BEAUTY & FRAGNANCES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                BABY & TOYS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                GROCERY
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                BEST SELLER
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                SPORTS
              </a>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={viewProducts} role="button">
                PRODUCTS
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={viewAddress} role="button">
                ADDRESS
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
