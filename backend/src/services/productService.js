import Product from "../models/Product.js";

// Mendapatkan semua produk
export const getAllProducts = async () => {
  return Product.find();
};

// Mendapatkan produk berdasarkan ID
export const getProductById = async (id) => {
  const product = await Product.findById(id);
  if (!product) throw new Error("Product not found");
  return product;
};

// Menambahkan produk baru
export const createProduct = async (productData) => {
  const newProduct = new Product(productData);
  return newProduct.save();
};

// Memperbarui produk berdasarkan ID
export const updateProduct = async (id, updateData) => {
  const product = await Product.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
  if (!product) throw new Error("Product not found");
  return product;
};

// Menghapus produk berdasarkan ID
export const deleteProduct = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  if (!product) throw new Error("Product not found");
  return product;
};
