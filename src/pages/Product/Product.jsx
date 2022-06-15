import React from 'react'
import Footer from '../../components/Footer'
import SocialBar from '../../components/Home/socialBar/SocialBar'
import Topbar from '../../components/Home/topbar/Topbar'
import CustomNavbar from '../../components/Home/navbar/CustomNavbar'
import Banner from '../../components/Banner'
import Filter from '../../components/Product/Filter'

export default function Product() {
  return (
    <div>
        <Topbar/>
        <CustomNavbar />
        <div className="row">
          <div className='col-3'>
          <Filter />
          </div>
        <div className="col-9">

        <Banner />
        </div>
        </div>
        <SocialBar/>
        <Footer/>
    </div>
  )
}
