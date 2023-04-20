import Order from "../model/myordersSchema.js";

export const saveOrders = async (req, res) => {
  try {
    const data = await Order.insertMany({
      id: req.body.id,
      url: req.body.url,
      detailUrl: req.body.url,
      title: req.body.title,
      price: req.body.price,
      quantity: req.body.quantity,
      description: req.body.description,
      discount: req.body.discount,
      tagline: req.body.tagline,
      seller: req.body.seller,
      user: req.user.id,
    });
    // console.log("Data", data);
    return res.status(200).json({ data: data, message: "Saved" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id });
    // console.log("Order details", response);
    return res.status(200).json(orders);
  } catch (error) {
    console.log("error while getting order details...", error);
  }
};
