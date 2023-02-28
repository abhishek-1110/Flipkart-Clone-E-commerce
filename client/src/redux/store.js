import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import {
  getProductDetailsReducer,
  getProductsReducer,
} from "./reducers/productReducer";


import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  cart: cartReducer,
});

const middleware = [thunk]; // thunk helps in executing aysnc functions
// we can use redux toolkit instead of createstore
// ... rest operator
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
