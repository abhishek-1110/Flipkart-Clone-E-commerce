import axios from "axios";

import * as actionTypes from "../constants/electronicsProductConstant";

const URL = "http://localhost:8000";

export const getElectronicsProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/electronicsproducts`);
    
    dispatch({
      type: actionTypes.GET_ELECTRONICS_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ELECTRONICS_PRODUCTS_FAIL,
      payload: error,
    });
  }
};

export const getElectronicsProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_ELECTRONICS_PRODUCTS_DETAILS_REQUEST });

    const { data } = await axios.get(`${URL}/electronicsProduct/${id}`);

    dispatch({
      type: actionTypes.GET_ELECTRONICS_PRODUCTS_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ELECTRONICS_PRODUCTS_DETAILS_FAIL,
      payload: error.message,
    });
  }
};
