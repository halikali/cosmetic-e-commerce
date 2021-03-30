export const getProducts = () => {
  return (dispatch) => {
    dispatch({ type: "GET_PRODUCTS_REQUEST" });
    fetch("http://localhost:5000/products?")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: data }))
      .catch((error) =>
        dispatch({ type: "GET_PRODUCTS_ERROR", payload: error })
      );
  };
};
