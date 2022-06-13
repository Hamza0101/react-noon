import React from 'react'
import './header.css';

export default function Header() {
    return (
        <div>



            <nav className="navbar navbar-expand-lg bg-color my-2">
                <img className='noon-logo' src='https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg' />
                <img className='m-3' src='https://z.nooncdn.com/s/app/com/common/images/flags/ae.svg' />
                <span>
                    <p className='my-2 text-size'>Deliver to </p>
                    <p className='text-size font-weight-bold'>Dubai</p>
                </span>
                <form className=" form-inline col-8">
                    <input className="form-control mr-sm-2 col-12 h-75" type="search" placeholder="What are you looking for? " aria-label="Search" />
                </form>
                <p>العربية |  </p>
                <span>
                    <p className=' text-size h-6 m-2 '>Hala Muhammad! </p>
                    <p className=' text-size font-weight-bold m-2'>My Account</p>
                </span><p>| </p><p className='text-size font-weight-bold ml-2'>Cart</p>
                <span className="glyphicon glyphicon-shopping-cart"></span>
            </nav>









            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Ecommerce</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Product</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Cart</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Address</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}
