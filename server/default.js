import { products } from "./constants/data.js";
import Product from "./model/product-schema.js";

import { electronicsproducts } from "./constants/electronics-data.js";
import ElectronicsProduct from "./model/electronicsProduct-schema.js";
import Cart from "./model/cartSchema.js";
const DefaultData = async () => {
  try {
    //  await Product.deleteMany({}); // for removing the duplicacy again n again by starting server it keeps adding data into sever

    // await Product.insertMany(products);
    // await ElectronicsProduct.deleteMany({});
    // await ElectronicsProduct.insertMany(electronicsproducts);


    console.log("data imported successfully");
    
  } catch (error) {
    console.log("error while inserting default data", error.message);
  }
};
export default DefaultData;