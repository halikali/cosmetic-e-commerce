import "./Footer.scss";

export default function Footer() {
  return (
    <>
      <footer>
        <section className="mt-5 ">
          <div className="row text-center d-flex justify-content-center pt-5 margin-0">
            <div className="col-md-1">
              <h6 className="text-uppercase font-weight-bold">
                <a href="/" className="text-decoration" target="_blank">
                  About us
                </a>
              </h6>
            </div>
            <div className="col-md-1">
              <h6 className="text-uppercase font-weight-bold">
                <a href="/" className="text-decoration" target="_blank">
                  Our Team
                </a>
              </h6>
            </div>

            <div className="col-md-1">
              <h6 className="text-uppercase font-weight-bold">
                <a href="/" className="text-decoration" target="_blank">
                  FAQ
                </a>
              </h6>
            </div>

            <div className="col-md-1">
              <h6 className="text-uppercase font-weight-bold">
                <a href="/" className="text-decoration" target="_blank">
                  Contact
                </a>
              </h6>
            </div>
          </div>
        </section>
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-md-4 col-lg-3 col-xl-2 mx-auto mt-4 text-white text-left">
                <p>
                  <i className="fas fa-phone-alt mr-3 "></i> +90 123 456 78 90
                </p>
                <p>
                  <i className="fas fa-home mr-3"></i>{" "}
                  <a
                    className="text-decoration"
                    href="https://www.google.com/maps/d/u/0/viewer?msa=0&ll=39.36347632413211%2C33.28857400000002&spn=12.628823%2C19.753418&mid=1KQoDxwsnGEmp91GYADKmJNd4KUA&z=6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Turkey
                  </a>
                </p>
                <p>
                  <i className="fas fa-envelope "></i>
                  <a
                    rel="noreferrer"
                    className="text-decoration px-2 "
                    href="mailto:info@gmail.com"
                    target="_blank"
                  >
                    info@gmail.com
                  </a>
                </p>
                <p>
                  <i></i> Mon-Fri: 10.00 - 18.00
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto footer-company-margin">
                <h4 className="text-uppercase mb-4">
                  <a className="text-company" href="/" target="_blank">
                    Company
                  </a>
                </h4>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mt-4">
                <p className="footer-text text-right">
                  Style too own civil out along. Perfectly offending attempted
                  add arranging age gentleman. Get who uncommonly our expression
                  ten increasing considered.
                </p>
                <div className="footer-read-more">
                  <a className="text-decoration" href="/">
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="p-3 pt-5">
            <div className="row d-flex align-items-center">
              <div className="col-4 col-lg-6 col-xl-6 text-center">
                <div className="p-3">
                  <p className="text-decoration footer-text-theme">
                    © 2021 Company Theme. All rights reserved.
                  </p>
                </div>
              </div>
              <div className="col-8 col-lg-6 ml-lg-0 text-center">
                <a
                  href="/"
                  className="text-decoration footer-margin-right"
                  role="button"
                >
                  Privacy Policy{" "}
                </a>

                <a
                  href="/"
                  className="text-decoration footer-margin-right"
                  role="button"
                >
                  Terms{" "}
                </a>
                <a
                  href="/"
                  className="text-decoration footer-margin-right"
                  role="button"
                >
                  FAQ{" "}
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}
