import React from "react";
import "./styles.scss";
import SubscribeLogo from "../../../assets/subscribe.jpg";
const Subscribe = () => {
  return (
    <section className="subscribe-section margin-all">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row ">
              <div className="col-6 ">
                <i className="fas fa-envelope letter-icon"></i>
              </div>
              <div className="col-6">
                <p>
                  SUBSCRIBE
                  <br />
                  TO OUR <br />
                  NEWSLETTER
                </p>
              </div>
              <div className="col-12">
                <p className="text-muted">
                  Get latest news, offers and discounts.
                </p>
              </div>
              <div className="col-12">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                    aria-label="Your Email"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-dark" type="button">
                      subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={SubscribeLogo}
              class="img-fluid "
              alt="Subscribe imagee"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
