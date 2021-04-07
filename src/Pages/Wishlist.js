import { useDispatch, useSelector } from "react-redux";
import TopComponent from "../components/TopComponent/TopComponent";
import { removeWishlist } from "../store/actions/actions";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlistReducer.wishlist);
  const dispatch = useDispatch();
  const removeWishlistHandler = (product) => {
    dispatch(removeWishlist(product));
  };

  return (
    <>
      <TopComponent />
      {wishlist &&
        wishlist.map((product) => (
          <div
            className="wishlistContainer"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "15px 35vw",
            }}
          >
            <div style={{}}>{product.name}</div>
            <div>$ {product.price}</div>
            <button onClick={() => removeWishlistHandler(product)}>
              TRASH ICON
            </button>
          </div>
        ))}
    </>
  );
};
export default Wishlist;
