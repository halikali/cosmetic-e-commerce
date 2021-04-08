import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import filterReducer from "./filterReducer";
import wishlistReducer from "./wishlistReducer";

const rootReducer = combineReducers({
  productsReducer,
  cartReducer,
  filterReducer,
  wishlistReducer,
});

export default rootReducer;
