import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import TopComponent from "../../TopComponent/TopComponent";
import "./style.scss";
const ProductInCart = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const reduceItems = (Items, type) => {
    let NewCartItems = Items.reduce((ar, obj) => {
      let bool = false;
      if (!ar) {
        ar = [];
      }
      ar.forEach((a) => {
        if (a.id === obj.id) {
          type === "inc" && a.count++;
          type === "dec" && a.count >= 1 && a.count--;
          bool = true;
        }
      });
      if (!bool) {
        if (obj.count === undefined) {
          obj.count = 1;
        }
        ar.push(obj);
      }
      return ar;
    }, []);
    return NewCartItems;
  };
  const [reducedCartItems, SetReducedCartItems] = useState(
    reduceItems(cartItems, "inc")
  );
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(reducedCartItems, "useeffect ici");
  }, [reducedCartItems, count]);

  console.log(cartItems, "shoptan gelen veriler");
  //ekleme ve cikartma butonlari yarim kaldi
  const increaseHandler = (item) => {
    console.log(item, "item");
    //console.log(reduceItems([...reducedCartItems, item]));
    //setCount(count + 1);
    //console.log(reduceItems([...reducedCartItems, item]), "inc");
    SetReducedCartItems(reduceItems([...reducedCartItems, item], "inc"));
  };
  const decreaseHandler = (item) => {
    //  console.log(reduceItems([...reducedCartItems, item]));
    // setCount(count + 1);
    SetReducedCartItems(reduceItems([...reducedCartItems, item], "dec"));
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
