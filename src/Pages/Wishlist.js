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
      <div className="row">
        <div className="col-8">
          {wishlist.length > 0 && (
            <div className="row">
              <p className="col-3">product</p>
              <p className="col-5"></p>
              <p className="col-2">NAME </p>
              <p className="col-2">PRICE </p>
            </div>
          )}
        </div>
      </div>

      <div className="card col-12">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {wishlist.length <= 0 ? (
              <p>wishlist is empty</p>
            ) : (
              wishlist.map((product, i) => (
                <div key={i} className="row">
                  <div className="col-3">
                    <img
                      src={product.api_featured_image}
                      class="rounded float-left"
                      alt={product.name}
                      style={{ width: "100px" }}
                    />
                  </div>
                  <div className="col-5">
                    <p className="card-text"> {product.name}</p>
                  </div>
                  <div className="col-4">$ {product.price}</div>
                </div>
              ))
            )}
          </li>
        </ul>
      </div>
      {/* {wishlist &&
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
        ))} */}
    </>
  );
};
export default Wishlist;
