import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, // acts as a primary key
    ref: "user",
  },
  id: {
    type: String,
    required: true,
  },
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: String,
  discount: String,
  tagline: String,
  seller: String,
});

const Cart = mongoose.model("cart", cartSchema);
export default Cart;
