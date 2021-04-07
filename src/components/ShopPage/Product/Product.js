import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.scss";
import ReactPaginate from "react-paginate";

const perPage = 12;

const Product = () => {
  const [currentPage, setCurrentPage] = useState([]);
  const [whichPage, setWhichPage] = useState(0);

  const products = useSelector((state) => state.productsReducer.data);

  const offset = currentPage * perPage;
  const productsForPages = products.map((product) => product);
  const currentPageProducts = productsForPages.slice(offset, offset + perPage);
  const pageCount = Math.ceil(products.length / perPage);

  function handlePageClick({ selected: selectedPage }) {
    setWhichPage(() => selectedPage);
    setCurrentPage(whichPage);
  }

  useEffect(() => {
    setWhichPage(0);
  }, [products]);

  return (
    <div className="row product-section">
      {currentPageProducts &&
        currentPageProducts.map((product) => (
          <div className="card col-12 col-sm-6 col-lg-4 position-relative">
            <div className="hov">
              <div className="row">
                <button className="btn btn-lg btn-outline-dark col-9">
                  Add To Card
                </button>
                <button className="btn  btn-outline-dark col-3">
                  <i class="fas fa-heart icon"></i>
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
                to={{ pathname: "/details", state: product }}
                className="link"
              >
                <h5 className="card-title">{product.name}</h5>
              </Link>
              <textarea
                id="w3review"
                name="w3review"
                maxLength="30"
                value={product.description && product.description}
                readOnly
                rows="2"
                style={{
                  overflow: "hidden",
                  border: "none",
                  outline: "none",
                  resize: "none",
                  padding: "6px",
                }}
              />

              <p className="card-text">
                <span>$</span>{" "}
                {
                  (product.price =
                    product.price == 0.0
                      ? `${product.name.length}.0`
                      : `${product.price}`)
                }
              </p>
            </div>
          </div>
        ))}{" "}
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →    "}
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
