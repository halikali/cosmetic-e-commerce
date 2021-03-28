import React from "react";
import Navbar from "../components/navbar/Navbar";
import Slider from "../components/Slider/Slider";
import Footer from "../components/Footer/Footer";
import InstagramAndImages from "../components/InstagramAndImages/InstagramAndImages";
import Brands from "../components/Brands/Brands";
import FaceEyesLips from "../components/FaceEyesLips/FaceEyesLips";
import NaturalQualityCashback from "../components/NaturalQualityCashback/NaturalQualityCashback";
import News from "../components/News/News";
import ShipSupportMoney from "../components/shipSupportMoney/ShipSupportMoney";
import SkinCare from "../components/SkinCare/SkinCare";
import Subscribe from "../components/Subscribe/Subscribe";
import TwoBlogsPart from "../components/TwoBlogsPart/TwoBlogsPart";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <SkinCare />
      <ShipSupportMoney />
      <TwoBlogsPart />
      <NaturalQualityCashback />
      <FaceEyesLips />
      <Subscribe />
      <News />
      <Brands />
      <InstagramAndImages />
      <Footer />
    </>
  );
};

export default Home;
