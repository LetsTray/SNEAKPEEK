import { Product } from "../models/Product.js";

/**
 * Get all products
 * @returns {Array} List of products
 */
export const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};

/**
 * Get a product by ID
 * @param {string} id - Product ID
 * @returns {Object} Product details
 */
export const getProductById = async (id) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};

/**
 * Create a new product
 * @param {Object} productData - Data for creating a product
 * @returns {Object} Created product
 */
export const createProduct = async (productData) => {
  const product = new Product(productData);
  return await product.save();
};

/**
 * Update an existing product
 * @param {string} id - Product ID
 * @param {Object} updateData - Data to update
 * @returns {Object} Updated product
 */
export const updateProduct = async (id, updateData) => {
  const product = await Product.findByIdAndUpdate(id, updateData, {
    new: true, // Return the updated product
    runValidators: true, // Ensure validation rules are applied
  });

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};

/**
 * Delete a product by ID
 * @param {string} id - Product ID
 * @returns {Object} Deleted product
 */
export const deleteProduct = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};
