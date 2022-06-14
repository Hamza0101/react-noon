import CustomCarousel from '../../components/carousal/CustomCarousal'
import React from 'react'
import CustomNavbar from '../../components/navbar/CustomNavbar'
import Topbar from '../../components/topbar/Topbar';
import './home.css';
import CategoryCard from '../../components/categoryCard/CategoryCard';
import ImgCard from '../../components/ImgCard';
import Banner from '../../components/Banner';
import ProductCard from '../../components/productCard/ProductCard';
import DealCard from '../../components/dealCard/DealCard';
import FatherDaycard from '../../components/FatherDayCard/FatherDaycard';
import SponserCard from '../../components/sponser/SponserCard';
import ClearanceDeal from '../../components/ClearanceDeal/ClearanceDeal';
import Gift from '../../components/gift/Gift';


export default function Home() {
    return (
        <div className='main w-100 bg-white'>
            <Topbar />
            <CustomNavbar />
            <Banner />
            <CustomCarousel />
            <CategoryCard />
            <ImgCard />
            <ProductCard />
            <DealCard />
            <FatherDaycard />
            <SponserCard />
            <ClearanceDeal/>
            <ProductCard />
            <CustomCarousel />
            <ProductCard />
            <SponserCard />
            <Gift />
            <ProductCard />
            <DealCard />
        </div>
    )
}
