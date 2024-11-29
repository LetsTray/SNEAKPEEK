import Order from "../models/orderModel.js";

// Place an order
export const placeOrder = async (req, res) => {
  const { cartId } = req.body;

  try {
    const order = new Order({
      user: req.user.id,
      cart: cartId,
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
