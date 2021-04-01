import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TopComponent from "../../TopComponent/TopComponent";
import "./style.scss";
const ProductInCart = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const reduceItems = (Items) => {
    let NewCartItems = Items.reduce((ar, obj) => {
      let bool = false;
      if (!ar) {
        ar = [];
      }
      ar.forEach((a) => {
        if (a.id === obj.id) {
          a.count++;
          bool = true;
        }
      });
      if (!bool) {
        obj.count = 1;
        ar.push(obj);
      }
      return ar;
    }, []);
    return NewCartItems;
  };
  const [reducedCartItems, SetReducedCartItems] = useState(
    reduceItems(cartItems)
  );
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(reducedCartItems, "cart sayfasi icinde reduced veriler");
  }, [reducedCartItems, count]);

  console.log(cartItems, "shoptan gelen veriler");
  //ekleme ve cikartma butonlari yarim kaldi
  const increaseHandler = (item) => {
    console.log(item, "item");
    //console.log(reduceItems([...reducedCartItems, item]));
    setCount(count + 1);
    console.log(reduceItems([...reducedCartItems, item]), "inc");
    SetReducedCartItems(reduceItems([...reducedCartItems, item]));
  };
  const decreaseHandler = (item) => {
    console.log(reduceItems([...reducedCartItems, item]));
    setCount(count + 1);
  };

  return (
    <div className="row">
      <TopComponent text="CART" />
      <div className="row">
        <div className="col-8">
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

      <div className="card col-md-8">
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
                      <div className="col-2">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-dark"
                          onClick={() => decreaseHandler(reducedCartItem)}
                        >
                          -
                        </button>
                      </div>
                      <div className="col-1">
                        <p className="display-6"> {reducedCartItem.count}</p>
                      </div>
                      <div className="col-2">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-dark"
                          onClick={() => increaseHandler(reducedCartItem)}
                        >
                          +
                        </button>
                      </div>
                      <div className="col-6 ">
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
    </div>
  );
};

export default ProductInCart;
