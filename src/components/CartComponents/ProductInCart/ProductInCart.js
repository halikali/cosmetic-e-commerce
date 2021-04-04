import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { sendSubtotal } from "../../../store/actions/actions";

import "./style.scss";
const ProductInCart = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const [newCartItems, setNewCardtItems] = useState(cartItems);

  const reduceItems = (arr) => {
    let result = [
      ...arr
        .reduce((mp, o) => {
          const key = JSON.stringify([o.price, o.name, o.api_featured_image]);
          if (!mp.has(key)) mp.set(key, { ...o, count: 0 });
          mp.get(key).count++;
          return mp;
        }, new Map())
        .values(),
    ];
    return result;
  };
  const [reducedCartItems, SetReducedCartItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendSubtotal(newCartItems.reduce((a, b) => +a + +b.price, 0)));
    SetReducedCartItems(reduceItems(newCartItems));
    console.warn(newCartItems);
    //console.log(newCartItems, "newCartItems");
    // console.log(reduceItems(newCartItems), "reduceItems(newCartItems)");
  }, [newCartItems]);

  //  console.log(cartItems, "shoptan gelen veriler");
  //ekleme ve cikartma butonlari yarim kaldi
  const increaseHandler = (item) => {
    let newItem = item;
    newItem.count = 1;
    let copyCartItem = newCartItems;
    SetReducedCartItems(reduceItems(newCartItems));
    setNewCardtItems([...copyCartItem, newItem]);
  };
  const decreaseHandler = (item) => {
    let newItem = item;
    newItem.count = 1;
    let copyCartItem = newCartItems;
    let idx = copyCartItem.findIndex((p) => p.id === newItem.id);
    copyCartItem.splice(idx, 1);

    SetReducedCartItems(reduceItems(newCartItems));
    setNewCardtItems(copyCartItem);
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          {cartItems.length > 0 && (
            <div className="row">
              <p className="col-3">product</p>
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
              reducedCartItems.map((reducedCartItem, i) => (
                <div key={i} className="row">
                  <div className="col-3">
                    <img
                      src={reducedCartItem.api_featured_image}
                      class="rounded float-left"
                      alt={reducedCartItem.name}
                      style={{ width: "100px" }}
                    />
                  </div>
                  <div className="col-5">
                    <p className="card-text"> {reducedCartItem.name}</p>
                  </div>
                  <div className="col-4">
                    <div className="row">
                      <div className="col-1">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-dark"
                          onClick={() => decreaseHandler(reducedCartItem)}
                        >
                          -
                        </button>
                      </div>
                      <div className="col-3">
                        <p className="display-6 text-center">
                          {" "}
                          {reducedCartItem.count}
                        </p>
                      </div>
                      <div className="col-1">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-dark"
                          onClick={() => increaseHandler(reducedCartItem)}
                        >
                          +
                        </button>
                      </div>
                      <div className="col-5">
                        {/* <button type="button" class="btn btn-lg btn-outline-dark">
                      Add to Cart
                    </button> */}
                        <p className="card-title h3">
                          $ {reducedCartItem.price * reducedCartItem.count}
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
      {/* <>
        TOTAL:{" "}
        {reducedCartItems.reduce(
          (acc, current) => acc + current.count * current.price,
          0
        )}
      </> */}
    </>
  );
};

export default ProductInCart;
