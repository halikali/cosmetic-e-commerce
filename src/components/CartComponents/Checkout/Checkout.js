import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";
const Checkout = () => {
  const subtotal = useSelector((state) => state.subtotalReducer.subtotal);
  const flatRate = 30;
  return (
    <div>
      <div class="card">
        <div class="card-body ">
          <p class="card-text d-flex justify-content-between">
            <span>subtotal:</span>
            <span className="fw-bold">${subtotal}</span>{" "}
          </p>
          <div className="card-subtitle text-uppercase mb-3 d-flex justify-content-between">
            shipping
          </div>
          <div class="form-check form-switch mb-3 d-flex justify-content-between">
            <div>
              <input
                class="form-check-input mr-2 "
                type="radio"
                id="flexSwitchCheckChecked"
              />
              <label className="form-check-label" for="flexSwitchCheckChecked">
                Flat rate :
              </label>
            </div>
            <span className="fw-bold"> ${flatRate}</span>
          </div>
          <p className="mb-3 d-flex justify-content-between">
            Shipping to Turkey.
          </p>
          <div className="mb-3 d-flex justify-content-between align-items-center">
            Total <span className="fw-bold fs-4">${flatRate + subtotal}</span>
          </div>
          <button className="btn btn-outline-dark btn-lg text-center p-x-4 checkout">
            {" "}
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
