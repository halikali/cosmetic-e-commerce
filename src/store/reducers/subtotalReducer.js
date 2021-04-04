const initialState = {
  subtotal: 0,
};
const subtotalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEND":
      return { ...state, subtotal: action.payload };
      break;

    default:
      return state;
      break;
  }
};
export default subtotalReducer;
