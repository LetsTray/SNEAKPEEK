import Product from "../models/Product.js";
import { isAdmin } from "../middlewares/authMiddleware.js"; // Pastikan middleware diimpor

// Mendapatkan daftar semua produk
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mendapatkan produk berdasarkan ID
export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Menambahkan produk baru
export const addProduct = async (req, res) => {
  // Memastikan bahwa hanya admin yang dapat menambahkan produk
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: "Admin privileges required" });
  }

  const { name, description, price, stock, image } = req.body;

  try {
    const newProduct = new Product({ name, description, price, stock, image });
    const product = await newProduct.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Memperbarui produk yang ada
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock, image } = req.body;

  // Memastikan bahwa hanya admin yang dapat memperbarui produk
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: "Admin privileges required" });
  }

  try {
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
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Menghapus produk
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  // Memastikan bahwa hanya admin yang dapat menghapus produk
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: "Admin privileges required" });
  }

  try {
    const product = await Product.findById(id);
    if (product) {
      // Menggunakan deleteOne untuk menghapus produk
      await Product.deleteOne({ _id: id });
      res.json({ message: "Product removed" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};