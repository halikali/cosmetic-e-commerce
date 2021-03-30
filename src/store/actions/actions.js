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
