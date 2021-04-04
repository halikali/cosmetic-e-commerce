import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import filterReducer from "./filterReducer";
import subtotalReducer from "./subtotalReducer";
const rootReducer = combineReducers({
  productsReducer,
  cartReducer,
  filterReducer,
  subtotalReducer,
});

export default rootReducer;
