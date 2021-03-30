import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./style.scss";
const Product = () => {
  const products = useSelector((state) => state.productsReducer.data);

  return (
    <div className="row product-section margin-bottom">
      {products &&
        products.map((product) => (
          <div className="card col-md-4 position-relative">
            <img
              className="card-img-top"
              src={product.api_featured_image}
              alt={product.name}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">
                <span>$</span> {product.price}{" "}
              </p>
            </div>
          </div>
        ))}{" "}
    </div>
  );
};

export default Product;
