import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.scss";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { addToCart, addWishlist } from "../../../store/actions/actions";

const perPage = 18;
const next = <i class="fa fa-angle-double-right"></i>;
const previous = <i class="fa fa-angle-double-left"></i>;

const Product = () => {
  const [currentPage, setCurrentPage] = useState([]);
  const [whichPage, setWhichPage] = useState(1);
  const wishlist = useSelector((state) => state.wishlistReducer.wishlist);
  const products = useSelector((state) => state.productsReducer.data);

  const offset = currentPage * perPage;
  const productsForPages = products.map((product) => product);
  const currentPageProducts = productsForPages.slice(offset, offset + perPage);
  const pageCount = Math.ceil(products.length / perPage);

  function handlePageClick({ selected: selectedPage }) {
    setWhichPage(() => selectedPage);
    setCurrentPage(selectedPage);
    window.scrollTo(0, 0);
  }

  const dispatch = useDispatch();
  const addWishlistHandler = (product) => {
    dispatch(addWishlist(product));
  };
  const addCartHandler = (product) => {
    dispatch(addToCart(product, 1));
  };
  useEffect(() => {
    setCurrentPage(0);
    setWhichPage(0);
  }, [products]);
  function dangerDescription(product) {
    return { __html: product.description };
  }
  return (
    <div className="row product-section">
      {currentPageProducts &&
        currentPageProducts.map((product) => (
          <div className="card col-12 col-sm-6  col-lg-4 position-relative">
            <div className="hov">
              <div className="row">
                <button
                  className="btn btn-lg btn-outline-dark col-9"
                  onClick={() => addCartHandler(product)}
                >
                  Add To Cart
                </button>
                <button
                  onClick={() => addWishlistHandler(product)}
                  className="btn  btn-outline-dark col-3"
                >
                  <i
                    class="fas fa-heart icon"
                    style={{
                      zIndex: "1",
                      color:
                        wishlist.some((item) => item.id === product.id) &&
                        "#ce1212",
                    }}
                  ></i>
                </button>
              </div>
            </div>
            <img
              className="card-img-top"
              src={product.api_featured_image}
              alt={product.name}
            />

            <div className="card-body">
              <Link
                to={{
                  pathname: `/product/${product.name}-${product.id}`,
                  state: product,
                }}
                className="link"
              >
                <h5 className="card-title font-marcellus">{product.name}</h5>
              </Link>

              <p
                dangerouslySetInnerHTML={dangerDescription(product)}
                style={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  display: "block",
                  height: "50px",
                  padding: "5px 5px 0px 5px",
                  fontWeight: "100",
                }}
                className="text-muted card-text text-center"
              />

              <p className="card-text " style={{ fontWeight: "bold" }}>
                <span>$</span>
                {
                  (product.price =
                    product.price === 0.0
                      ? `${product.name.length}.0`
                      : `${product.price} `)
                }
              </p>
            </div>
          </div>
        ))}{" "}
      <ReactPaginate
        previousLabel={previous}
        nextLabel={next}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        forcePage={whichPage}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination-link"}
        nextLinkClassName={"pagination-link"}
        disabledClassName={"pagination-link-disabled"}
        activeClassName={"pagination-link-active"}
      />
    </div>
  );
};

export default Product;
