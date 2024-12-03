import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/productService.js";

// Mendapatkan semua produk
export const getProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mendapatkan detail produk berdasarkan ID
export const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await getProductById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Menambahkan produk baru
export const addProduct = async (req, res) => {
  const productData = req.body;

  try {
    const product = await createProduct(productData);
    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Memperbarui detail produk
export const updateProductDetails = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedProduct = await updateProduct(id, updateData);
    res
      .status(200)
      .json({ message: "Product updated successfully", updatedProduct });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Menghapus produk berdasarkan ID
export const deleteProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await deleteProduct(id);
    res
      .status(200)
      .json({ message: "Product deleted successfully", deletedProduct });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
