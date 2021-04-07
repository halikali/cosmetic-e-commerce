import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import filterReducer from "./filterReducer";
import subtotalReducer from "./subtotalReducer";
import wishlistReducer from "./wishlistReducer";

const rootReducer = combineReducers({
  productsReducer,
  cartReducer,
  filterReducer,
  subtotalReducer,
  wishlistReducer,
});

export default rootReducer;
