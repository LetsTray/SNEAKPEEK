import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/productService.js";

export const getProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await getProductById(id);
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const addProduct = async (req, res) => {
  const productData = req.body;

  try {
    const product = await createProduct(productData);
    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateProductDetails = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedProduct = await updateProduct(id, updateData);
    res.json({ message: "Product updated successfully", updatedProduct });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await deleteProduct(id);
    res.json({ message: "Product deleted successfully", deletedProduct });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
