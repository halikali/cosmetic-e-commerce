import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
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
  useEffect(() => {
    console.log(reducedCartItems, "cart sayfasi icinde reduced veriler");
  }, [reducedCartItems]);

  console.log(cartItems, "shoptan gelen veriler");
  //ekleme ve cikartma butonlari yarim kaldi
  const increaseHandler = (item) => {
    console.log(item, "item");
    //console.log(reduceItems([...reducedCartItems, item]));
    console.log(reduceItems([...reducedCartItems, item]), "inc");
    SetReducedCartItems(reduceItems([...reducedCartItems, item]));
  };
  const decreaseHandler = (item) => {};
  return (
    <>
      <div style={{ backgroundColor: "red", height: "500px" }}></div>
      {cartItems.length > 0 ? (
        <>
          {reducedCartItems.map((reducedCartItem, i) => (
            <div
              key={i}
              style={{
                marginBottom: "30px",
                border: "1px solid black",
                width: "max-content",
                margin: "auto",
              }}
            >
              <img
                style={{ width: "100px" }}
                src={reducedCartItem.api_featured_image}
              ></img>

              <p>
                {reducedCartItem.name}
                {" - "}
                {reducedCartItem.count}
                {" adet"}
              </p>
              <button onClick={() => increaseHandler(reducedCartItem)}>
                +
              </button>
              <button onClick={() => decreaseHandler(reducedCartItem)}>
                -
              </button>
            </div>
          ))}
        </>
      ) : (
        <>sepetinizde urun bulunmamaktadir</>
      )}{" "}
    </>
  );
};
export default Cart;
