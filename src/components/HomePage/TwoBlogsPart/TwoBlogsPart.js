import React from "react";
import BlogOneBackground from "../../../assets/Blogs1.png";
import BlogTwoBackground from "../../../assets/Blogs2.jpg";

import "./styles.scss";
const TwoBlogsPart = () => {
  return (
    <section className="two-blogs-part-section margin-all">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <img src={BlogOneBackground} alt="..." class="img-thumbnail" />
          </div>
          <div className="col-md-6 blogs-col">
            <div class="card blogs-card position-relative">
              <div class="card-body">
                <h5 class="card-subtitle pb-3">NEW COLLECTION</h5>
                <h2 class="card-title pb-3">PINK QUEEN</h2>
                <p class="card-text">
                  Name were we at hope. Remainder household direction zealously
                  the unwilling bed sex. Lose and gay ham sake met that. Stood
                  her place one ten spoke yet. Head case knew ever set why over.
                  <br />
                  <br />
                  Style too own civil out along. Perfectly offending attempted
                  add arranging age gentleman concluded. Get who uncommonly our
                  expression ten increasing considered occasional travelling.
                  Ever read tell year give may men call its. Piqued son turned
                  fat income played end wicket.
                </p>
              </div>
              <button type="button" class="btn btn-dark blog-button d-block">
                READ MORE
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 blogs-col  ">
            <div class="card blogs-card">
              <div class="card-body">
                <h5 class="card-subtitle pb-3">ABOUT</h5>
                <h2 class="card-title pb-3">OUR SHOP</h2>
                <p class="card-text">
                  Name were we at hope. Remainder household direction zealously
                  the unwilling bed sex. Lose and gay ham sake met that. Stood
                  her place one ten spoke yet. Head case knew ever set why over.
                  <br />
                  <br />
                  Style too own civil out along. Perfectly offending attempted
                  add arranging age gentleman concluded. Get who uncommonly our
                  expression ten increasing considered occasional travelling.
                  Ever read tell year give may men call its. Piqued son turned
                  fat income played end wicket.
                </p>
              </div>
              <button type="button" class="btn btn-dark blog-button d-block">
                READ MORE
              </button>
            </div>
          </div>
          <div className="col-md-6 ">
            <img src={BlogTwoBackground} alt="..." class="img-thumbnail" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoBlogsPart;
