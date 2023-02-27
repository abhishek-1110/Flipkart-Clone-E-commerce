import ElectronicsProduct from "../model/electronicsProduct-schema.js";

export const getelectronicsProducts = async (request, response) => {
  try {
    const electronicsproducts = await ElectronicsProduct.find({});

    response.status(200).json(electronicsproducts);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const getelectronicsProductById = async (request, response) => {
  try {
    const id = request.params.id;
    const product = await ElectronicsProduct.findOne({'id': id})
    
    response.status(200).json(product);
  } catch (error) {
    response.status(500).json({message: error.message});
  }
};
