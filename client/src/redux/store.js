import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import {
  getProductDetailsReducer,
  getProductsReducer,
} from "./reducers/productReducer";


import { cartReducer } from "./reducers/cartReducer";
import { getElectronicsProductsReducer, getElectronicsProductDetailsReducer } from "./reducers/electronicsProductReducer";

import {persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import { ordersReducer } from "./reducers/ordersReducer";
const persisConifg = {
  key: "root",
  storage
}

const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  getElectronicsProducts: getElectronicsProductsReducer,
  getElectronicsProductDetails: getElectronicsProductDetailsReducer,
  cart: cartReducer,
  order: ordersReducer,
});

const persistedReducer  = persistReducer(persisConifg, reducer);

const middleware = [thunk]; // thunk helps in executing aysnc functions
// we can use redux toolkit instead of createstore
// ... rest operator
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store)
export default store;
export {persistor}
