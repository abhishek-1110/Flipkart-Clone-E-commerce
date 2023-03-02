// reducer contains two things state, actions
// also contains switch statement

import * as actionTypes from "../constants/electronicsProductConstant";

export const getElectronicsProductsReducer = (
  state = { electronicsProducts: [] },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_ELECTRONICS_PRODUCTS_SUCCESS:
      return { electronicsProducts: action.payload };
    case actionTypes.GET_ELECTRONICS_PRODUCTS_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const getElectronicsProductDetailsReducer = (
  state = { electronicsProduct: [] }, 
  action
) => {
  switch (action.type) {
    case actionTypes.GET_ELECTRONICS_PRODUCTS_DETAILS_REQUEST:
      return { loading: true };
    case actionTypes.GET_ELECTRONICS_PRODUCTS_DETAILS_SUCCESS:
      return { loading: false, electronicsProduct: action.payload };
    case actionTypes.GET_ELECTRONICS_PRODUCTS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case actionTypes.GET_ELECTRONICS_PRODUCTS_DETAILS_RESET:
      return { electronicsProduct: {} };
    default:
      return state;
  }
};
