// expressing is done for routing

import express from "express";

import { userSignup, userLogin } from "../controller/user-controller.js";
import {
  getProducts,
  getProductById,
} from "../controller/product-controller.js";

import { getelectronicsProducts, getelectronicsProductById } from "../controller/electronicsproduct-controller.js";
import { addPaymentGateway, paytmResponse } from "../controller/payment-controller.js";

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);

router.get("/products", getProducts);
router.get("/product/:id", getProductById);


router.get("/electronicsproducts", getelectronicsProducts);
router.get("/electronicsproduct/:id", getelectronicsProductById);

router.post("/payment", addPaymentGateway);
router.post("/callback", paytmResponse);

export default router;