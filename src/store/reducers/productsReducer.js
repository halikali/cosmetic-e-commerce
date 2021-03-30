const initialState = {
  data: [],
  isLoading: false,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };

    case "GET_PRODUCTS_ERROR":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default productsReducer;
