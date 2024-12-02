import { Product } from "../models/Product.js";

// Helper function to handle server errors
const handleError = (res, message, error = null) => {
  return res
    .status(500)
    .json({ message, error: error ? error.message : undefined });
};

// Helper function to check if product exists
const findProductById = async (productId) => {
  const product = await Product.findById(productId);
  if (!product) throw new Error("Product not found");
  return product;
};

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }
    res.json(products);
  } catch (error) {
    handleError(res, "Server error", error);
  }
};

// Create a new product
export const createProduct = async (req, res) => {
  const { name, description, price, quantity } = req.body;

  try {
    const existingProduct = await Product.findOne({ name });
    if (existingProduct) {
      return res.status(400).json({ message: "Product already exists" });
    }

    const product = new Product({ name, description, price, quantity });
    const createdProduct = await product.save();

    res.status(201).json(createdProduct);
  } catch (error) {
    handleError(res, "Server error", error);
  }
};

// Update an existing product
export const updateProduct = async (req, res) => {
  const { productId } = req.params;
  const { name, description, price, quantity } = req.body;

  try {
    const product = await findProductById(productId);

    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.quantity = quantity || product.quantity;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    handleError(res, "Server error", error);
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await findProductById(productId);
    await product.remove();

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    handleError(res, "Server error", error);
  }
};
