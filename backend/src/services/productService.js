import { Product } from "../models/product.js";

// Get all products
export const getAllProducts = async () => {
  return Product.find();
};

// Get product by ID
export const getProductById = async (id) => {
  const product = await Product.findById(id);
  if (!product) throw new Error("Product not found");
  return product;
};

// Create a new product
export const createProduct = async (productData) => {
  const newProduct = new Product(productData);
  return newProduct.save();
};

// Update product
export const updateProduct = async (id, updateData) => {
  const product = await Product.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
  if (!product) throw new Error("Product not found");
  return product;
};

// Delete product
export const deleteProduct = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  if (!product) throw new Error("Product not found");
  return product;
};
