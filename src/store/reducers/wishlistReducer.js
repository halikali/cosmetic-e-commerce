const initialState = {
  wishlist: [],
};
const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_WISHLIST":
      return {
        ...state,
        wishlist: !state.wishlist.some(
          (product) => product.id === action.payload.id
        )
          ? [...state.wishlist, action.payload]
          : state.wishlist
              .map((product) => product.id !== action.payload.id && product)
              .filter(Boolean),
      };

    case "REMOVE_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (product) => product !== action.payload
        ),
      };
    default:
      return state;
  }
};
export default wishlistReducer;
