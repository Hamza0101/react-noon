import React, { Component } from 'react'
import "./footer.css"

export default class Footer extends Component {
  render() {
    return (
      <div className="row container-fluid bg-light">
      <footer className='bg-light text-black float-start footerUi'>
        <div className='row'>
          <h6 className='ml-5 m-2'>&copy;2022 noon All Right Reserved</h6>
          <img className=' footer-logo ml-5 m-2' src="https://z.nooncdn.com/s/app/com/noon/images/mastercard-color.svg" alt="" />
          <img className=' footer-logo m-2' src="https://z.nooncdn.com/s/app/com/noon/images/visa-color.svg" alt="" />
          <img className='footer-logo m-2' src="https://z.nooncdn.com/s/app/com/noon/images/cash-color.svg" alt="" />
          <img clasName='footer-logo m-2' src="https://z.nooncdn.com/s/app/com/noon/images/amex-color.svg" alt="" />

          <nav className="navbar navbar-expand-sm w-50 navbar-light ml-5">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">

                <li className="nav-item footer-text-size">
                  <a className="nav-link" href="#">Careers</a>
                </li>
                <li className="nav-item footer-text-size">
                  <a className="nav-link" href="#">Warranty policy</a>
                </li>
                <li className="nav-item footer-text-size">
                  <a className="nav-link" href="#">Sell with us</a>
                </li>
                <li className="nav-item footer-text-size">
                  <a className="nav-link" href="#">Terms of Use</a>
                </li>
                <li className="nav-item footer-text-size">
                  <a className="nav-link" href="#">Terms of Sale</a>
                </li>
                <li className="nav-item footer-text-size">
                  <a className="nav-link" href="#">Privacy policy</a>
                </li>
                <li className="nav-item footer-text-size">
                  <a className="nav-link" href="#">ConsumerPrice</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </footer>
      </div>
    )
  }
}
