const initialState = {
  cartItems: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
      break;
    case "REMOVE_PRODUCT":
      return {
        ...state,
        ...state.cartItems.filter((cartItem) => cartItem !== action.payload),
      };
      break;
    default:
      return state;
  }
};
export default cartReducer;
