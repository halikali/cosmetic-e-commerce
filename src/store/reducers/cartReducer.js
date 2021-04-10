const initialState = {
  cartItems: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        cartItems: state.cartItems.some(
          (cartItem) => cartItem.id === action.payload.item.id
        )
          ? state.cartItems.map((item) =>
              item.id === action.payload.item.id
                ? { ...item, count: item.count + action.payload.amount }
                : item
            )
          : [
              ...state.cartItems,
              {
                ...action.payload.item,
                count: action.payload.amount,
              },
            ],
      };

    case "SUBTRACT_PRODUCT":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, count: item.count !== 0 ? item.count - 1 : 0 }
            : item
        ),
      };

    case "REMOVE_PRODUCT":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
export default cartReducer;
