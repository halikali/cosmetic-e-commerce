const initialState = {
  product: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "KEEP_PRODUCT":
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
