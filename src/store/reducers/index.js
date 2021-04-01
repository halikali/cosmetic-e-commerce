import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import filterReducer from "./filterReducer";
const rootReducer = combineReducers({
  productsReducer,
  cartReducer,
  filterReducer,
});

export default rootReducer;
