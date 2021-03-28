import "./App.css";
import Footer from "./components/Footer/Footer";
import InstagramAndImages from "./components/InstagramAndImages/InstagramAndImages";
import Brands from "./components/Brands/Brands";
import FaceEyesLips from "./components/FaceEyesLips/FaceEyesLips";
import NaturalQualityCashback from "./components/NaturalQualityCashback/NaturalQualityCashback";
import News from "./components/News/News";
import ShipSupportMoney from "./components/shipSupportMoney/ShipSupportMoney";
import SkinCare from "./components/SkinCare/SkinCare";
import Subscribe from "./components/Subscribe/Subscribe";
import TwoBlogsPart from "./components/TwoBlogsPart/TwoBlogsPart";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
