

import axios from 'axios';

import * as actionTypes from "../constants/productConstant";


const URL = 'https://localhost:8000';

export const getelectronicsProducts = () => async (dispatch) => {
    try {
       const { eledata } = await axios.get(`${URL}/electronicsproducts`);

       console.log("Succeesssss");

       dispatch({ type: "Success", payload: eledata }); // dispatch calls reducer // useReducer

    } catch(error) {
        console.log("error while calling electronics data", error.message);
       
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message });
    }
}