// for calling api

import axios from "axios";

import * as actionTypes from "../constants/productConstant";
const URL = "http://localhost:8000";
// middle ware dispatch
export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/products`);
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data }); // dispatch calls reducer // useReducer
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message });
  }
};
// obejct destructring
// getting only specific thing from object
// for example to get only data from object
// we can write {data} = obj;

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_REQUEST });

    // getting id from DetailView.jsx
    const { data } = await axios.get(`${URL}/product/${id}`);

    dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_SUCCESS, payload: data }); // dispatch calls reducer // useReducer
  } catch (error) {
    // to show loading on screen....loader
    // handling loader

    dispatch({
      type: actionTypes.GET_PRODUCTS_DETAILS_FAIL,
      payload: error.message,
    });
  }
};
