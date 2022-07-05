import CustomCarousel from "../../components/Home/CustomCarousal";
import React from "react";
import CustomNavbar from "../../components/Home/CustomNavbar";
import Topbar from "../../components/Home/Topbar";
import "./home.css";
import CategoryCard from "../../components/Home/CategoryCard";
import ImgCard from "../../components/Home/ImgCard";
import Banner from "../../components/Banner";
import ProductCard from "../../components/Home/ProductCard";
import DealCard from "../../components/Home/DealCard";
import FatherDaycard from "../../components/Home/FatherDaycard";
import SponserCard from "../../components/Home/SponserCard";
import ClearanceDeal from "../../components/Home/ClearanceDeal";
import Gift from "../../components/Home/Gift";
import SocialBar from "../../components/Home/SocialBar";
import Footer from "../../components/Footer";
import Support from "../../components/Home/Support";
import BottomList from "../../components/Home/BottomList";

export default function Home() {
  return (
    <div className=" bg-light">
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
      <div className="row container-fluid">
        <img
          className="w-100"
          src="https://k.nooncdn.com/cms/pages/20220310/bb8ec300f66b4fc78e65c2eb8a25eda5/en_plp.jpg"
          alt=""
        />
      </div>

      <Support />

      <BottomList />
      <SocialBar />
      <Footer />
    </div>
  );
}
