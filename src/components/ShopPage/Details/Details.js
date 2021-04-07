import React, { useEffect, useState } from "react";
import "./style.scss";
import { useLocation, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../store/actions/actions";
import TopComponent from "../../TopComponent/TopComponent";
const Details = (props) => {
  const [productAmount, setProductAmount] = useState(1);
  const items = useSelector((state) => state.cartReducer.cartItems);
  useEffect(() => {
    console.log(productAmount, "useeffect");
    console.log(items, "items");
  }, [productAmount, items]);
  const location = useLocation();
  const detail = location.state;
  console.log(location.state);
  //redux

  const dispatch = useDispatch();

  const cartHandler = (item, amount) => {
    for (let i = 0; i < amount; i++) {
      dispatch(addToCart(item));
    }
  };
  const increaseAmount = () => {
    setProductAmount(productAmount + 1);
  };
  const decreaseAmount = () => {
    productAmount <= 1
      ? setProductAmount(1)
      : setProductAmount(productAmount - 1);
  };

  function dangerDescription() {
    return { __html: detail.description };
  }
  function dangerName() {
    return { __html: detail.name };
  }
  const hoverHandler = (event) => {};
  const downHandler = (event) => {};

  return (
    <>
      <TopComponent text="PRODUCT" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <img
              src={detail.api_featured_image}
              className="img-thumbnail mb-5 "
              alt="..."
              style={{
                width: "460px",
                height: "380px",
              }}
            />
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation" key="1">
                <button
                  className="nav-link active"
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
              <li className="nav-item" role="presentation" key="2">
                <button
                  className="nav-link"
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
              <li className="nav-item" role="presentation" key="3">
                <button
                  className="nav-link"
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
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div dangerouslySetInnerHTML={dangerDescription()} />
              </div>
              <div
                className="tab-pane fade"
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
                      <span className="text-capitalize" key={item.name}>
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
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                {detail.product_colors &&
                  detail.product_colors.map((color) => (
                    <div
                      className="color-palette"
                      onMouseOver={hoverHandler}
                      onMouseLeave={downHandler}
                      key={color.name}
                      style={{
                        backgroundColor: `${color.hex_value}`,
                      }}
                    >
                      <p className="color-name">{color.colour_name}</p>
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
              <span>$</span> {detail.price}
            </p>
            <div className="row">
              <div className="col-2">
                <button
                  onClick={decreaseAmount}
                  type="button"
                  className="btn btn-sm btn-outline-dark"
                >
                  -
                </button>
              </div>
              <div className="col-1">
                <p className="display-6"> {productAmount}</p>
              </div>
              <div className="col-2">
                <button
                  onClick={increaseAmount}
                  type="button"
                  className="btn btn-sm btn-outline-dark"
                >
                  +
                </button>
              </div>
              <div className="col-6 ">
                <button
                  onClick={() => cartHandler(detail, productAmount)}
                  type="button"
                  className="btn btn-lg btn-outline-dark"
                >
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
