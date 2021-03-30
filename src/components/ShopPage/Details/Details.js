import React from "react";
import "./style.scss";
import DenemeImg from "../../../assets/Face.png";
const Details = () => {
  return (
    <>
      <div style={{ backgroundColor: "red", height: "400px" }}></div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <img
              src={DenemeImg}
              class="img-thumbnail mb-5 "
              alt="..."
              style={{
                width: "460px",
                height: "380px",
              }}
            />
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  DESCRIPTION
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  ADDITIONAL INFORMATION
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  REVIEWS
                </button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <p>
                  She exposed painted fifteen are noisier mistake led waiting.
                  Surprise not wandered speedily husbands although yet end. Are
                  court tiled cease young built fat one man taken. We highest ye
                  friends is exposed equally in. Ignorant had too strictly
                  followed. Astonished as travelling assistance or unreserved oh
                  pianoforte ye. Five with seen put need tore add neat. Bringing
                  it is he returned received raptures.
                </p>
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <p>
                  CAPACITY : <span>40 ML</span>
                </p>
                <p>
                  BRAND : <span>fable&mane</span>
                </p>
              </div>
              <div
                class="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                ...
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <p className="h2">AIRBRUSH MATTE</p>
            <p className="h5 text-muted">
              Skin-perfecting bronzed filter for the face.
            </p>
            <p className="display-5">
              <span>$</span> 40{" "}
            </p>
            <div className="row">
              <div className="col-2">
                <button type="button" class="btn btn-sm btn-outline-dark">
                  -
                </button>
              </div>
              <div className="col-1">
                <p className="display-6"> 1</p>
              </div>
              <div className="col-2">
                <button type="button" class="btn btn-sm btn-outline-dark">
                  +
                </button>
              </div>
              <div className="col-6 ">
                <button type="button" class="btn btn-lg btn-outline-dark">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
