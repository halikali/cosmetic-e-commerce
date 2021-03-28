import React from "react";
import { useSelector } from "react-redux";

const Product = () => {
  const products = useSelector((state) => state.productsReducer.data);

  return (
    <div>
      <div style={{ backgroundColor: "red", height: "500px" }}></div>
      {products &&
        products.map((product) => (
          <div className="card">
            <img
              className="card-img-top"
              src={product.image_link}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}{" "}
    </div>
  );
};

export default Product;
