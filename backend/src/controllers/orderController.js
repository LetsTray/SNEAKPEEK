import expressAsyncHandler from "express-async-handler";
import Order from "../models/Order.js";
import Product from "../models/Product.js";

export const createOrder = expressAsyncHandler(async (req, res) => {
  const { orderItems, shippingAddress } = req.body;

  let totalPrice = 0;

  for (let i = 0; i < orderItems.length; i++) {
    const product = await Product.findById(orderItems[i].product);
    if (!product) {
      return res.status(404).json({
        message: `Product with ID ${orderItems[i].product} not found`,
      });
    }

    if (product.stock < orderItems[i].quantity) {
      return res.status(400).json({
        message: `Not enough stock for product ${product.name}`,
      });
    }

    product.stock -= orderItems[i].quantity;
    await product.save();

    totalPrice += product.price * orderItems[i].quantity;
  }

  const order = new Order({
    user: req.user._id,
    orderItems,
    shippingAddress,
    totalPrice,
  });

  const createdOrder = await order.save();
  res.status(201).json(createdOrder);
});

export const getUserOrders = expressAsyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });

  if (orders.length === 0) {
    return res.status(404).json({ message: "No orders found" });
  }

  res.json(orders);
});
