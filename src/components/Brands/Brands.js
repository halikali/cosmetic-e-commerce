import React from "react";
import LorealLogo from "../../assets/lorealLogo.png";
import MacLogo from "../../assets/macLogo.png";
import SchwarzkopLogo from "../../assets/schwarzkopLogo.png";
import FableManeLogo from "../../assets/FableManeLogo.png";
import AerinLogo from "../../assets/AerinLogo.png";
import "./styles.scss";
const Brands = () => {
  return (
    <section className="brands-section">
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-sm-4 col-4">
            <img src={LorealLogo} alt="..." class="img-thumbnail " />
          </div>
          <div className="col-md-2 col-sm-4 col-4">
            <img src={MacLogo} alt="..." class="img-thumbnail " />
          </div>
          <div className="col-md-2 col-sm-4 col-4">
            <img src={SchwarzkopLogo} alt="..." class="img-thumbnail " />
          </div>
          <div className="col-md-2 col-sm-4 col-4">
            <img src={FableManeLogo} alt="..." class="img-thumbnail " />
          </div>
          <div className="col-md-2  col-sm-4 col-4">
            <img src={AerinLogo} alt="..." class="img-thumbnail " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
