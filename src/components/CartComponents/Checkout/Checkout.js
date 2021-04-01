import React from "react";
import TopComponent from "../../TopComponent/TopComponent";
import "./style.scss";
const Checkout = () => {
  return (
    <div>
      <div class="card">
        <div class="card-body ">
          <p class="card-text d-flex justify-content-between">
            <span>subtotal:</span>
            <span className="fw-bold">$120.00</span>{" "}
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
            <span className="fw-bold"> $30.00</span>
          </div>
          <p className="mb-3 d-flex justify-content-between">
            Shipping to Turkey.
          </p>
          <div className="mb-3 d-flex justify-content-between align-items-center">
            Total <span className="fw-bold fs-4">$70.00</span>
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
