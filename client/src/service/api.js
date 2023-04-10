// using axios for calling api's
import axios from "axios";

const url = "http://localhost:8000";

export const authenticateSignup = async (user) => {
  try {
    return await axios.post(`${url}/signup`, user);
  } catch (error) {
    console.log("error while calling Signup API: ", error.response.status);
    return error.response.status;
  }
};

export const authenticateLogin = async (user) => {
  try {
    return await axios.post(`${url}/login`, user);
  } catch (error) {
    console.log("error while calling Login API: ", error);
    return error.response.status;
  }
};

export const getProductById = async (id) => {
  try {
    return await axios.get(`${url}/product/${id}`);
  } catch (error) {
    console.log("Error while getting product by id response", error);
  }
};

export const payUsingPaytm = async (data) => {
  try {
    let response = await axios.post(`${url}/payment`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error while calling payment api", error);
  }
};

export const saveCartDetails = async (data) => {
  try {
    let response = await axios.post(`${url}/cart/savedetails`, data, {
      headers: {
        Authorization: localStorage.getItem("authToken"),
      },
    });
    console.log("API save cart Details", response);
  } catch (error) {
    console.log("some error while saving cart info", error);
  }
};

export const getCartDetails = async () => {
  try {
    let response = await axios.get(`${url}/cart/getdetails`, {
      headers: {
        Authorization: localStorage.getItem("authToken"),
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error while fetching details", error);
  }
};

export const removeCartItems = async (id) => {
  try {
    let response = await axios.delete(`${url}/cart/removefromcart/${id}`, {
      headers: {
        Authorization: localStorage.getItem("authToken"),
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log("API error", error);
  }
};

export const saveOrderDetails = async (data) => {
  // will get the items from Redux store and save them in backend...
  try {
    const response = await axios.post(`${url}/orders/myorders`, data, {
      headers: {
        Authorization: localStorage.getItem("authToken"),
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const getOrderDetails = async () => {
  try {
    const response = await axios.get(`${url}/orders/getorders`, {
      headers: {
        Authorization: localStorage.getItem("authToken"),
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
