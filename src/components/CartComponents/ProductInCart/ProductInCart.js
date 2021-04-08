import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  subtractFromCart,
} from "../../../store/actions/actions";

import "./style.scss";
const ProductInCart = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  const dispatch = useDispatch();

  const increaseHandler = (item, amount) => {
    dispatch(addToCart(item, amount));
  };
  const decreaseHandler = (item) => {
    dispatch(subtractFromCart(item));
  };
  const removeHandler = (item) => {
    dispatch(removeFromCart(item));
  };
  return (
    <>
      <div className="row">
        <div className="col-12">
          {cartItems.length > 0 && (
            <div className="row">
              <p className="col-3">PRODUCT</p>
              <p className="col-5"></p>
              <p className="col-2">QUENTITY </p>
              <p className="col-2">SUBTOTAL </p>
            </div>
          )}
        </div>
      </div>

      <div className="card col-12">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {cartItems.length <= 0 ? (
              <p>cart is empty</p>
            ) : (
              cartItems.map((cartItem, i) => (
                <div key={i} className="row">
                  <div className="col-1 cartCentering">
                    <button
                      class="btn btn-sm btn-outline-dark"
                      style={{ cursor: "pointer" }}
                      onClick={() => removeHandler(cartItem)}
                    >
                      &#10006;
                    </button>
                  </div>
                  <div className="col-3 cartCentering">
                    <img
                      src={cartItem.api_featured_image}
                      class="rounded float-left"
                      alt={cartItem.name}
                      style={{ width: "100px" }}
                    />
                  </div>
                  <div className="col-4 cartCentering">
                    <p className="card-text"> {cartItem.name}</p>
                  </div>
                  <div className="col-4 cartCentering">
                    <div className="row">
                      <div className="col-1 cartCentering">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-dark"
                          onClick={() => decreaseHandler(cartItem)}
                        >
                          -
                        </button>
                      </div>
                      <div className="col-3 cartCentering">
                        <span className="display-6">{cartItem.count}</span>
                      </div>
                      <div className="col-1 cartCentering">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-dark"
                          onClick={() => increaseHandler(cartItem, 1)}
                        >
                          +
                        </button>
                      </div>
                      <div className="col-5 cartCentering">
                        <p className="card-title h3">
                          $ {cartItem.price * cartItem.count}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProductInCart;
