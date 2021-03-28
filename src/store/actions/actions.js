export const getProducts = () => {
  return (dispatch) => {
    dispatch({ type: "GET_PRODUCTS_REQUEST" });
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: data }))
      .catch((error) =>
        dispatch({ type: "GET_PRODUCTS_ERROR", payload: error })
      );
  };
};
