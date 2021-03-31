import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  console.log(cartItems, "cart page");
  let reducedCartItems = cartItems.reduce((ar, obj) => {
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
  console.log(reducedCartItems);
  return (
    <>
      <div style={{ backgroundColor: "red", height: "500px" }}></div>
      {cartItems.length > 0 ? (
        <>
          {reducedCartItems.map((reducedCartItem) => (
            <div
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
              <button>+</button>
              <button>-</button>
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
