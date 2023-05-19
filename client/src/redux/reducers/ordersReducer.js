// reducer contains two things state, actions
// also contains switch statement

import * as actionTypes from "../constants/ordersConstants";

export const ordersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_ORDERS_SUCCESS:
      return { orders: action.payload };
    case actionTypes.GET_ORDERS_FAIL:
      return { error: action.payload };
    case actionTypes.REMOVE_FROM_ORDERS:
      return {
        ...state,
        orders: [],
      };
    default:
      return state;
  }
};
