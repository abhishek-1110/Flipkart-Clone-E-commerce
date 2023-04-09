import ElectronicsProduct from "../model/electronicsProduct-schema.js";

export const getelectronicsProducts = async (request, response) => {
  try {
    const electronicsProducts = await ElectronicsProduct.find({});

    response.status(200).json(electronicsProducts);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const getelectronicsProductById = async (request, response) => {
  try {
    const id = request.params.id;
    const electronicsProduct = await ElectronicsProduct.findOne({ id: id });

    response.status(200).json(electronicsProduct);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

