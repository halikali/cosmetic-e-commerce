import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.scss";
const Product = () => {
  const products = useSelector((state) => state.productsReducer.data);
  return (
    <div className="row product-section">
      {products &&
        products.map((product) => (
          <div className="card col-md-4 position-relative">
            <img
              className="card-img-top"
              src={product.api_featured_image}
              alt={product.name}
            />
            <div className="card-body">
              <Link
                to={{ pathname: "/details", state: product }}
                className="link"
              >
                <h5 className="card-title">{product.name}</h5>
              </Link>
              <textarea
                id="w3review"
                name="w3review"
                maxLength="30"
                value={product.description && product.description}
                readOnly
                rows="2"
                style={{
                  overflow: "hidden",
                  border: "none",
                  outline: "none",
                  resize: "none",
                  padding: "6px",
                }}
              />

              <p className="card-text">
                <span>$</span>{" "}
                {
                  (product.price =
                    product.price == 0.0
                      ? `${product.name.length}.0`
                      : `${product.price}`)
                }
              </p>
            </div>
          </div>
        ))}{" "}
    </div>
  );
};

export default Product;
