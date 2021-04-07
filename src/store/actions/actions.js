export const getProducts = (productTypes = "", productType) => {
  return (dispatch) => {
    dispatch({ type: "GET_PRODUCTS_REQUEST" });
    fetch(`http://localhost:5000/products?${productTypes}${productType}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: data }))
      .catch((error) =>
        dispatch({ type: "GET_PRODUCTS_ERROR", payload: error })
      );
  };
};

export const getProductsForPriceFilter = (firstValue = 0, secondValue = 2) => {
  return (dispatch) => {
    dispatch({ type: "GET_PRODUCTS_REQUEST" });
    fetch(
      `http://localhost:5000/products?price_gte=${firstValue}&price_lte=${secondValue}`
    )
      .then((response) => response.json())
      .then((data) => dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: data }))
      .catch((error) =>
        dispatch({ type: "GET_PRODUCTS_ERROR", payload: error })
      );
  };
};

export const getProductsByBrand = (productType, brand) => {
  return (dispatch) => {
    dispatch({ type: "GET_PRODUCTS_REQUEST" });
    fetch(
      `http://localhost:5000/products?product_type=${productType}&brand=${brand}`
    )
      .then((response) => response.json())
      .then((data) => dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: data }))
      .catch((error) =>
        dispatch({ type: "GET_PRODUCTS_ERROR", payload: error })
      );
  };
};

export const addToCart = (item) => ({
  type: "ADD_PRODUCT",
  payload: item,
});
export const removeFromCart = (item) => ({
  type: "REMOVE_PRODUCT",
  payload: item,
});
export const sendSubtotal = (price) => ({
  type: "SEND",
  payload: price,
});
export const addWishlist = (product) => ({
  type: "ADD_WISHLIST",
  payload: product,
});
export const removeWishlist = (product) => ({
  type: "REMOVE_WISHLIST",
  payload: product,
});

export const keepProduct = (product) => ({
  type: "KEEP_PRODUCT",
  payload: product,
});
