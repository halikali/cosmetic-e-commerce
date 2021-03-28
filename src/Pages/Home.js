import React from "react";
import Slider from "../components/HomePage/Slider/Slider";
import InstagramAndImages from "../components/HomePage/InstagramAndImages/InstagramAndImages";
import Brands from "../components/HomePage/Brands/Brands";
import FaceEyesLips from "../components/HomePage/FaceEyesLips/FaceEyesLips";
import NaturalQualityCashback from "../components/HomePage/NaturalQualityCashback/NaturalQualityCashback";
import News from "../components/HomePage/News/News";
import ShipSupportMoney from "../components/HomePage/shipSupportMoney/ShipSupportMoney";
import SkinCare from "../components/HomePage/SkinCare/SkinCare";
import Subscribe from "../components/HomePage/Subscribe/Subscribe";
import TwoBlogsPart from "../components/HomePage/TwoBlogsPart/TwoBlogsPart";

const Home = () => {
  return (
    <>
      <Slider />
      <ShipSupportMoney />
      <SkinCare />
      <TwoBlogsPart />
      <NaturalQualityCashback />
      <FaceEyesLips />
      <Subscribe />
      <News />
      <Brands />
      <InstagramAndImages />
    </>
  );
};

export default Home;
