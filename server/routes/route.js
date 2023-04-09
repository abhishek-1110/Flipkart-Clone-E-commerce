// expressing is done for routing

import express from "express";

import { userSignup, userLogin } from "../controller/user-controller.js";
import {
  getProducts,
  getProductById,
} from "../controller/product-controller.js";

import { getelectronicsProducts, getelectronicsProductById } from "../controller/electronicsproduct-controller.js";
import { addPaymentGateway, paytmResponse } from "../controller/payment-controller.js";

import { savecartItems, getcartItems, removeCartItems } from "../controller/saveorder-controller.js";
import { fetchuser } from "../middleware/fetchuser.js";

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);

router.get("/products", getProducts);
router.get("/product/:id", getProductById);

router.get("/electronicsproducts", getelectronicsProducts);
router.get("/electronicsProduct/:id", getelectronicsProductById);

router.post("/cart/savedetails", fetchuser, savecartItems);
router.get("/cart/getdetails", fetchuser, getcartItems);
router.delete("/cart/removefromcart/:id", fetchuser, removeCartItems)

router.post("/payment", addPaymentGateway);
router.post("/callback", paytmResponse);

export default router;