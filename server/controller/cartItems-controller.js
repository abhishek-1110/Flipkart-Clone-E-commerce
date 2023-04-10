import Cart from "../model/cartSchema.js";

export const savecartItems = async (req, res) => {
  try {
    //  console.log("Backend here", request.body);
    // console.log("ID:", req.body.id);
    if ((await Cart.findOne({ id: req.body.id, user: req.user.id })) !== null) {
      // console.log("Exists", {id: req.body.id});
      return res.status(200).json("already in DB...");
    }

    const data = await Cart.insertMany({
      id: req.body.id,
      url: req.body.url,
      detailUrl: req.body.url,
      title: req.body.tilte,
      price: req.body.price,
      quantity: req.body.quantity,
      description: req.body.description,
      discount: req.body.discount,
      tagline: req.body.tagline,
      seller: req.body.seller,
      user: req.user.id,
    });
    // console.log("Data", data);
    return res.status(200).json({ message: data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

export const getcartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find({ user: req.user.id });

    return res.status(200).json(cartItems);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

export const removeCartItems = async (req, res) => {
  try {
    console.log("Deletion", req.params.id);
    let data = await Cart.deleteMany({ 'id': req.params.id });
    // console.log("deleted", data);
    return res.status(200).json("Successfully deleted...");
  } catch (error) {
    console.log("error", error);
    return res.status(500).json(error);
  }
};
