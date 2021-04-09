import React from "react";
import "./styles.scss";
import Face from "../../../assets/Face.png";
import Eyes from "../../../assets/eyes.png";
const News = () => {
  return (
    <section className="news-container margin-all">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="h5 font-marcellus">OUR LATEST</p>
            <br />
            <p className="h2">NEWS</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-6 col-12">
            <div className="card">
              <img className="card-img-top" src={Face} alt="Face" />
              <div className="card-body">
                <h5 className="card-title font-marcellus">
                  NEW TRENDS IN 2021{" "}
                </h5>
                <p className="card-text mt-4">
                  For country now sister engage had seaseon better had
                  waited.Occasional mrs interested far expression.
                </p>
                <h6 class="card-subtitle mb-2 text-muted mt-3">
                  Cosmetic - Fashion
                </h6>
                <a href="/" class="btn  btn-outline-dark mt-5">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="card">
              <img className="card-img-top" src={Eyes} alt="Eyes" />
              <div className="card-body">
                <h5 className="card-title font-marcellus">GALLERY POST </h5>
                <p className="card-text mt-4">
                  For country now sister engage had seaseon better had
                  waited.Occasional mrs interested far expression.
                </p>
                <h6 className="card-subtitle mb-2 text-muted mt-3">
                  Cosmetic - Fashion
                </h6>
                <a href="/" class="btn  btn-outline-dark mt-5">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
