import axios from "axios";
import * as actionTypes from "../constants/ordersConstants";

const URL = "http://localhost:8000";

export const getOrderDetails = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/orders/getorders`, {
      headers: {
        Authorization: localStorage.getItem("authToken"),
      },
    });
    console.log("Hi redux", data);
    dispatch({ type: actionTypes.GET_ORDERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_ORDERS_FAIL, payload: error.message });
  }
};
