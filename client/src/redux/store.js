import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import {
  getProductDetailsReducer,
  getProductsReducer,
} from "./reducers/productReducer";

import { getelectronicsProductsReducer } from "./reducers/electronicsproductReducer";
import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  getelectronicsProducts: getelectronicsProductsReducer,
  cart: cartReducer,
});

const middleware = [thunk];
// we can use redux toolkit instead of createstore
// ... rest operator
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
