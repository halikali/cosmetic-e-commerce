import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";
const Product = () => {
  const products = useSelector((state) => state.productsReducer.data);
  return (
    <div className="row">
      {products &&
        products.map((product) => (
          <div className="card col-md-4">
            <img
              className="card-img-top"
              src={product.image_link}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">
                <span>{product.price_sign}</span> {product.price}{" "}
              </p>
            </div>
          </div>
        ))}{" "}
    </div>
  );
};

export default Product;
