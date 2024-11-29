import Product from "../models/productModel.js";

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add new product
export const addProduct = async (req, res) => {
  const { name, price, description, imageUrl } = req.body;

  try {
    const newProduct = new Product({
      name,
      price,
      description,
      imageUrl,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
