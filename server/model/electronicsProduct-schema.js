import mongoose from "mongoose";

//validatation of data
const electronicsproductSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: String,
  discount: String,
  seller: String,
  tagline: String,
});

// electronicsproduct in parameter is database name inside monogodb
const ElectronicsProduct = mongoose.model("electronicsproduct", electronicsproductSchema);
export default ElectronicsProduct;