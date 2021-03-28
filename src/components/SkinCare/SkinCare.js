import React from "react";
import "./style.scss";
import skinCarePhotos from "../../assets/skinCarePhotos.png";
import skinCarePhotos2 from "../../assets/skinCarePhotos2.png";
const SkinCare = () => {
  return (
    <section>
      <div class="container-fluid">
        <div class="row mt-5">
          <div class="col-lg-6 col-md-12 col-sm-12 padding-0">
            <div class="card">
              <div class="row g-0">
                <div class="col-md-6 ">
                  <div class="card-body">
                    <h5 class="card-title">
                      best of <br />
                      <span>skıncare</span>
                    </h5>
                    <p class="card-text">
                      <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic outlined example"
                      >
                        <button type="button" class="btn btn-outline-dark">
                          EXPLORE
                        </button>
                      </div>
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <img src={skinCarePhotos} alt="skin care photoo" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mt-4 col-md-12 col-sm-12 padding-0">
            <div class="card ">
              <div class="row g-0">
                <div class="col-md-6">
                  <div class="card-body">
                    <h5 class="card-title">
                      top brand <br />
                      <span>makeup</span>
                    </h5>
                    <p class="card-text">
                      <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic outlined example"
                      >
                        <button type="button" class="btn btn-outline-dark">
                          EXPLORE
                        </button>
                      </div>
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <img src={skinCarePhotos2} alt="skin care photoo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkinCare;
