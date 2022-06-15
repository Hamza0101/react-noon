import CustomCarousel from '../../components/Home/carousal/CustomCarousal'
import React from 'react'
import CustomNavbar from '../../components/Home/navbar/CustomNavbar'
import Topbar from '../../components/Home/topbar/Topbar';
import './home.css';
import CategoryCard from '../../components/Home/categoryCard/CategoryCard';
import ImgCard from '../../components/ImgCard';
import Banner from '../../components/Banner';
import ProductCard from '../../components/Home/productCard/ProductCard';
import DealCard from '../../components/Home/dealCard/DealCard';
import FatherDaycard from '../../components/Home/FatherDayCard/FatherDaycard';
import SponserCard from '../../components/Home/sponser/SponserCard';
import ClearanceDeal from '../../components/Home/ClearanceDeal/ClearanceDeal';
import Gift from '../../components/Home/gift/Gift';
import SocialBar from '../../components/Home/socialBar/SocialBar';
import Footer from '../../components/Footer';


export default function Home() {
    return (
        <div className='main bg-light'>
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
            <ClearanceDeal />
            <ProductCard />
            <CustomCarousel />
            <ProductCard />
            <SponserCard />
            <Gift />
            <ProductCard />
            <DealCard />
            <div className='row'>

                <img className='w-100' src="https://k.nooncdn.com/cms/pages/20220310/bb8ec300f66b4fc78e65c2eb8a25eda5/en_plp.jpg" alt="" />
            </div>


            <div className="bg-light">
            <div className='container m-4 '>
                <h4>
                    <strong>We're Always Here To Help</strong>
                </h4>
                    <p>Reach out to us through any of these support channels</p>

                <div className='d-flex flex-row-reverse'>

                    <div className='p-2'>
                    <p className=''> Email Support</p>
                    <span>
                   
                    <h5> 
                        {/* <img className='w-25' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQdDGcuQMtKZABlhnpcgmSmhoyDQusTlYNWA&usqp=CAU" alt="" />  */}
                    <strong>care@noon.com</strong>
                    </h5>
                    </span>
                    </div>
                    <div className='p-2'>
                    <p className=''> Help Center</p>
                    <h5> <strong>help.noon.com</strong></h5>
                    </div>
                </div>
                <p>
                    
                </p>
            </div>
            </div>

            <div className='row footerUi bg-light text-black-50 footer-text-size'>

            <div className='d-flex flex-row container-fluid'>
                <div className='p-2'>
                <ul> <strong className='text-dark'> ELECTRONICS</strong>
                    <li className='m-2 text-sm'>Mobile</li>
                    <li className='m-2 text-sm'>Tablets</li>
                    <li className='m-2 text-sm'>Home Appliance</li>
                    <li className='m-2 text-sm'>Camera and Accessories</li>
                    <li className='m-2 text-sm'>Televisions</li>
                    <li className='m-2 text-sm'>Heaphones</li>
                    <li className='m-2 text-sm'>Video Game</li>

                </ul>
                </div>
                <div className='p-2'>
                <ul> <strong className='text-dark'> FASHION</strong>
                    <li className='m-2 text-sm'>Women's Fashion</li>
                    <li className='m-2 text-sm'>Men's Fashion</li>
                    <li className='m-2 text-sm'>Girl's Fashion</li>
                    <li className='m-2 text-sm'>Watches</li>
                    <li className='m-2 text-sm'>Boy's Fashion</li>
                    <li className='m-2 text-sm'>Jewelery</li>
                    <li className='m-2 text-sm'>Women's Eyewear</li>
                    

                </ul>
                </div>
                <div className='p-2'>
                <ul> <strong className='text-dark'> HOME AND KITCHEN</strong>
                    <li className='m-2 text-sm'>Bath</li>
                    <li className='m-2 text-sm'>Home Decor</li>
                    <li className='m-2 text-sm'>Kitchen and Dinning</li>
                    <li className='m-2 text-sm'>Tools and Home improvement</li>
                    <li className='m-2 text-sm'>audio and Video</li>
                    <li className='m-2 text-sm'>Furniture</li>
                    <li className='m-2 text-sm'>Pet Supplies</li>
                 
                </ul>
                </div>
                <div className='p-2'>
                <ul> <strong className='text-dark'> BEAUTY</strong>
                    <li className='m-2 text-sm'>Fragrance</li>
                    <li className='m-2 text-sm'>Make Up</li>
                    <li className='m-2 text-sm'>Hair Care</li>
                    <li className='m-2 text-sm'>Skin Care</li>
                    <li className='m-2 text-sm'>Bath and Body</li>
                    <li className='m-2 text-sm'>Electronic Beauty Tools</li>
                    <li className='m-2 text-sm'>Men's GroomingS</li>
                  

                </ul>
                </div>
                <div className='p-2'>
                <ul> <strong className='text-dark'> BABY AND TOYS</strong>
                    <li className='m-2 text-sm'>Diapering</li>
                    <li className='m-2 text-sm'>Baby Transport</li>
                    <li className='m-2 text-sm'>Nursing & Feeding</li>
                    <li className='m-2 text-sm'>Baby and Kids Fashion</li>
                    <li className='m-2 text-sm'>Baby & Todler Toys</li>
                    <li className='m-2 text-sm'>Tri Cycle </li>
                    <li className='m-2 text-sm'>Outdoor Play</li>
                   
                </ul>
                </div>
                <div className='p-2'>
                <ul> <strong className='text-dark'> TOP BRANDS</strong>
                    <li className='m-2 text-sm'>Pampers</li>
                    <li className='m-2 text-sm'>Apple</li>
                    <li className='m-2 text-sm'>Blackberry</li>
                    <li className='m-2 text-sm'>Oppo</li>
                    <li className='m-2 text-sm'>Samsung</li>
                    <li className='m-2 text-sm'>Dell</li>
                    <li className='m-2 text-sm'>HP</li>
                 

                </ul>
                </div>
                <div className='p-2'>
                <ul> <strong className='text-dark'> DAILY GROCERIES</strong>
                    <li className='m-2 text-sm'>Fresh Food</li>
                    <li className='m-2 text-sm'>Milk</li>
                    <li className='m-2 text-sm'>Meat</li>
                    <li className='m-2 text-sm'>Chicken</li>
                    <li className='m-2 text-sm'>Vegetables</li>
                    <li className='m-2 text-sm'>Breakfast</li>
                    <li className='m-2 text-sm'>Lunch</li>


                </ul>
                </div>
                </div>
                </div>
            <SocialBar />
            <Footer/>

        </div>
    )
}
