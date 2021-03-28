import React from "react";
import Face from "../../assets/Face.png";
import Lips from "../../assets/Lips.png";
import Eyes from "../../assets/eyes.png";
import "./styles.scss";
const FaceEyesLips = () => {
  return (
    <section className="face-eyes-lips-section margin-all">
      <div class="container-fluid">
        <div className="row">
          <div className="col-md-4 col-12 padding-0 mt-5 position-relative ">
            <p className="thumbnails-text">Face</p>
            <img src={Face} alt="..." class="img-thumbnail" />
          </div>
          <div className="col-md-4 col-12 padding-0 mt-4 position-relative ">
            <p className="thumbnails-text">Lips</p>
            <img src={Lips} alt="..." class="img-thumbnail" />
          </div>
          <div className="col-md-4 col-12 padding-0 mt-1 position-relative">
            <p className="thumbnails-text">Eyes</p>
            <img src={Eyes} alt="..." class="img-thumbnail" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaceEyesLips;
