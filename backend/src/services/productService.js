import Product from "../models/Product.js";

// Service untuk mendapatkan semua produk
export const fetchAllProductsService = async () => {
  return Product.find();
};

// Service untuk mendapatkan produk berdasarkan ID
export const fetchProductByIdService = async (productId) => {
  const product = await Product.findById(productId);
  if (!product) throw new Error("Product not found");
  return product;
};

// Service untuk menambahkan produk baru
export const createNewProductService = async (productData) => {
  const newProduct = new Product(productData);
  return newProduct.save();
};

// Service untuk memperbarui produk berdasarkan ID
export const updateProductByIdService = async (productId, updateData) => {
  const product = await Product.findByIdAndUpdate(productId, updateData, {
    new: true,
    runValidators: true,
  });
  if (!product) throw new Error("Product not found");
  return product;
};

// Service untuk menghapus produk berdasarkan ID
export const deleteProductByIdService = async (productId) => {
  const product = await Product.findByIdAndDelete(productId);
  if (!product) throw new Error("Product not found");
  return product;
};
