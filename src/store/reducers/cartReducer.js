const initialState = {
  cardItems: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        cardItems: [...state.cardItems, action.payload],
      };
      break;
    case "REMOVE_PRODUCT":
      return {
        ...state,
        ...state.cardItems.filter((cardItem) => cardItem !== action.payload),
      };
      break;
    default:
      return state;
  }
};
export default cartReducer;
