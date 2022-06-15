import React from 'react'

export default function crousal() {
    return (
        <div className='row'>
            <div className='container-fluid'>
                <div id="carouselExampleControls " className="carousel slide " data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active align-content-center">
                            <img className="d-block w-100 h-5 ml-10" src="https://k.nooncdn.com/ads/banner-1008x1008/en_dk_uae-hero-01.1654856304.662519.png" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 " src="https://k.nooncdn.com/mpcms/EN0001/assets/c288cd71-b156-427a-8978-1103d55f6e97.png" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 " src="https://k.nooncdn.com/mpcms/EN0001/assets/cef7dae1-809a-4d60-a3ce-86096f0d4cd9.png" alt="Third slide" />
                        </div>
                        
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    
                </div>
               

            </div>
        </div>
    )
}
