import expressAsyncHandler from "express-async-handler";
import Product from "../models/Product.js";

export const getProducts = expressAsyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

export const getProductById = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

export const addProduct = expressAsyncHandler(async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: "Admin privileges required" });
  }

  const { name, description, price, stock, image } = req.body;
  const newProduct = new Product({ name, description, price, stock, image });
  const product = await newProduct.save();
  res.status(201).json(product);
});

export const updateProduct = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock, image } = req.body;

  if (!req.user.isAdmin) {
    return res.status(403).json({ message: "Admin privileges required" });
  }

  const product = await Product.findById(id);
  if (product) {
    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.stock = stock || product.stock;
    product.image = image || product.image;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

export const deleteProduct = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!req.user.isAdmin) {
    return res.status(403).json({ message: "Admin privileges required" });
  }

  const product = await Product.findById(id);
  if (product) {
    await Product.deleteOne({ _id: id });
    res.json({ message: "Product removed" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});
