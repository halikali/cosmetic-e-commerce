import React from "react";
import "./style.scss";
import { useLocation } from "react-router";
const Details = () => {
  const location = useLocation();
  const detail = location.state;
  console.log(location.state);
  function dangerDescription() {
    return { __html: detail.description };
  }
  function dangerName() {
    return { __html: detail.name };
  }
  const hoverHandler = (event) => {
    console.log(event.target.firstChild);
    /* !event.target.firstChild.classList.contains("hover-p") &&
      event.target.firstChild.classList.add("hover-p");
    console.log(event.target.firstChild.classList); */
  };
  return (
    <>
      <div style={{ backgroundColor: "red", height: "400px" }}></div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <img
              src={detail.api_featured_image}
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
                  COLOR PALETTE
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
                <div dangerouslySetInnerHTML={dangerDescription()} />
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <p>
                  {detail.tag_list && detail.tag_list.length <= 1
                    ? "TAG : "
                    : "TAGS : "}
                  {detail.tag_list.length > 0 &&
                    detail.tag_list.map((item, i) => (
                      <span className="text-capitalize">
                        {item}
                        {detail.tag_list.length !== i + 1 && " - "}
                      </span>
                    ))}
                </p>
                <p>
                  BRAND :{" "}
                  <span className="text-capitalize">{detail.brand}</span>
                </p>
              </div>
              <div
                class="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                {detail.product_colors &&
                  detail.product_colors.map((color) => (
                    <div
                      onMouseOver={hoverHandler}
                      style={{
                        backgroundColor: `${color.hex_value}`,
                        height: "50px",
                        width: "50px",
                        borderRadius: "50%",
                        float: "left",
                        marginLeft: "15px",
                      }}
                    >
                      <p id="color-name">{color.colour_name}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            {/* <p>{detail.name}</p> */}
            <div className="h2" dangerouslySetInnerHTML={dangerName()} />
            <p className="h5 text-muted text-capitalize">{detail.category}</p>
            <p className="display-5">
              <span>$</span>{" "}
              {detail.price == 0.0 ? `${detail.name.length}.0` : detail.price}
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
