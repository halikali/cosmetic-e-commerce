import React from "react";
import DenemeImg from "../../../assets/Lips.png";
const ProductInCart = () => {
  return (
    <div className="row">
      <div
        style={{ backgroundColor: "red", width: "100%", height: "500px" }}
      ></div>
      <div className="row">
        <div className="col-8">
          <div className="row">
            <p className="col-3">product</p>
            <p className="col-5"></p>
            <p className="col-2">QUENTITY </p>
            <p className="col-2">SUBTOTAL </p>
          </div>
        </div>
      </div>

      <div className="card col-md-8">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="row">
              <div className="col-3">
                <img
                  src={DenemeImg}
                  class="rounded float-left"
                  alt="..."
                  style={{ width: "100px" }}
                />
              </div>
              <div className="col-5">
                <p className="card-text"> Dapibus ac facilisis in</p>
              </div>
              <div className="col-4">
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
                    {/* <button type="button" class="btn btn-lg btn-outline-dark">
                      Add to Cart
                    </button> */}
                    <p className="card-title h3">$ 4.000 </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-3">
                <img
                  src={DenemeImg}
                  class="rounded float-left"
                  alt="..."
                  style={{ width: "100px" }}
                />
              </div>
              <div className="col-5">
                <p className="card-text"> Dapibus ac facilisis in</p>
              </div>
              <div className="col-4">
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
                    {/* <button type="button" class="btn btn-lg btn-outline-dark">
                      Add to Cart
                    </button> */}
                    <p className="card-title h3">$ 4.000 </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-3">
                <img
                  src={DenemeImg}
                  class="rounded float-left"
                  alt="..."
                  style={{ width: "100px" }}
                />
              </div>
              <div className="col-5">
                <p className="card-text"> Dapibus ac facilisis in</p>
              </div>
              <div className="col-4 ">
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
                    {/* <button type="button" class="btn btn-lg btn-outline-dark">
                      Add to Cart
                    </button> */}
                    <p className="card-title h3">$ 4.000 </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductInCart;
