import React from "react";
import ExempleImg from "../../assets/Blogs1.png";
import TopComponent from "../TopComponent/TopComponent";
import "./style.scss";
const Contact = () => {
  return (
    <>
      <TopComponent text="CONTACT" />
      <div className="container mt-5 contact">
        <div className="row mb-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-left">İSTANBUL</h5>
                <div className="row">
                  <div className="col-6">
                    <p className="sub-title text-left">PHONES</p>
                    <p className="text-left">212-371-8555</p>
                    <p className="text-left">212-371-8500</p>
                  </div>
                  <div className="col-6">
                    <p className="card-text">
                      <p className="sub-title text-left">ADDRESS</p>
                      <p className="text-left">İstanbul/Turkey</p>
                    </p>
                  </div>
                  <div className="col-6">
                    <p className="sub-title text-left">EMAIL</p>
                    <p className="text-left">istanbul@luchiana.com</p>
                  </div>
                  <div className="col-6">
                    <p className="card-text">
                      <p className="sub-title text-left">SOCIAL NETWORKS</p>
                      <div className="social-icon">
                        <i className="fab fa-facebook-f text-left"></i>
                        <i className="fab fa-instagram text-left"></i>
                        <i className="fab fa-twitter text-left"></i>
                        <i className="fab fa-youtube text-left"></i>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.79327609294!2d28.872096522217586!3d41.005495809353945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1617495437220!5m2!1str!2str"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-6">
            <img
              src={ExempleImg}
              alt="..."
              class="img-thumbnail"
              style={{ width: "60%" }}
            />
          </div>
          <div className="col-md-6 ">
            <h6 className="h5 text-center"> SEND YOUR QUESTION</h6>
            <form className="question">
              <div className="form-group text-left mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="nameHelp"
                  placeholder="Your Name"
                  autoComplete="off"
                />
              </div>
              <div className="form-group text-left mb-2">
                <input
                  type="email"
                  className="form-control "
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group mb-5">
                <label for="exampleFormControlTextarea1"></label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-outline-dark mt-5"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
