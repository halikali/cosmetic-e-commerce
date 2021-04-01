import React from "react";
import TopComponent from "../../TopComponent/TopComponent";
import "./style.scss";
const Checkout = () => {
  return (
    <div>
      <TopComponent />
      <div class="card">
        <div class="card-body">
          <p class="card-text">
            subtotal : <span>$120.00</span>{" "}
          </p>
          <div className="card-subtitle">shipping</div>
          <div class="form-check form-switch col-4">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
            <label class="form-check-label" for="flexSwitchCheckChecked">
              Flat rate :
            </label>
            <span> $ 30.00</span>
            <p>Shipping to Turkey.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
