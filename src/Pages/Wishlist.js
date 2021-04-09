import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TopComponent from "../components/TopComponent/TopComponent";
import { addToCart, removeWishlist } from "../store/actions/actions";

const Wishlist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [productAmount, setProductAmount] = useState(1);
  const wishlist = useSelector((state) => state.wishlistReducer.wishlist);
  const dispatch = useDispatch();
  const removeWishlistHandler = (product) => {
    dispatch(removeWishlist(product));
  };

  const cartHandler = (item, amount) => {
    dispatch(addToCart(item, amount));
  };
  return (
    <>
      <TopComponent text="WISHLIST" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            {wishlist.length > 0 && (
              <div className="row">
                <p className="col-4">product</p>
                <p className="col-6">NAME </p>
                <p className="col-1"> </p>
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="card col-12">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                {wishlist.length <= 0 ? (
                  <p>wishlist is empty</p>
                ) : (
                  wishlist.map((product, i) => (
                    <div key={i} className="row">
                      <div className="col-1 cartCentering">
                        <button
                          class="btn btn-sm btn-outline-dark"
                          style={{ cursor: "pointer" }}
                          onClick={() => removeWishlistHandler(product)}
                        >
                          &#10006;
                        </button>
                      </div>
                      <div className="col-2 cartCentering">
                        <img
                          src={product.api_featured_image}
                          class="rounded float-left img-thumbnail"
                          alt={product.name}
                        />
                      </div>
                      <div className="col-3 cartCentering">
                        <p className="card-text"> {product.name}</p>
                      </div>

                      <div className="col-6 cartCentering">
                        <div className="row" style={{ width: "100%" }}>
                          <div className="col-4 cartCentering padding-0">
                            <p className="card-title h3">$ {product.price}</p>
                          </div>
                          <div className="col-8 padding-0 ">
                            <i
                              class="fas fa-shopping-cart"
                              onClick={() =>
                                cartHandler(product, productAmount)
                              }
                              style={{ fontSize: "40px" }}
                            ></i>
                            {/* <button
                              
                              type="button"
                              className="btn btn-lg btn-outline-dark"
                            >
                              Add to Cart
                            </button> */}
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
      </div>
    </>
  );
};
export default Wishlist;
