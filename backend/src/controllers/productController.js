import {
  fetchAllProductsService,
  fetchProductByIdService,
  createNewProductService,
  updateProductByIdService,
  deleteProductByIdService,
} from "../services/productService.js";

// Controller untuk mendapatkan semua produk
export const fetchAllProductsController = async (req, res) => {
  try {
    const products = await fetchAllProductsService();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ message: error.message });
  }
};

// Controller untuk mendapatkan produk berdasarkan ID
export const fetchProductByIdController = async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await fetchProductByIdService(productId);
    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error.message);
    res.status(404).json({ message: error.message });
  }
};

// Controller untuk menambahkan produk baru
export const createNewProductController = async (req, res) => {
  const productData = req.body;

  try {
    const product = await createNewProductService(productData);
    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    console.error("Error creating product:", error.message);
    res.status(400).json({ message: error.message });
  }
};

// Controller untuk memperbarui produk berdasarkan ID
export const updateProductController = async (req, res) => {
  const { productId } = req.params;
  const updateData = req.body;

  try {
    const updatedProduct = await updateProductByIdService(
      productId,
      updateData
    );
    res
      .status(200)
      .json({ message: "Product updated successfully", updatedProduct });
  } catch (error) {
    console.error("Error updating product:", error.message);
    res.status(400).json({ message: error.message });
  }
};

// Controller untuk menghapus produk berdasarkan ID
export const deleteProductController = async (req, res) => {
  const { productId } = req.params;

  try {
    const deletedProduct = await deleteProductByIdService(productId);
    res
      .status(200)
      .json({ message: "Product deleted successfully", deletedProduct });
  } catch (error) {
    console.error("Error deleting product:", error.message);
    res.status(400).json({ message: error.message });
  }
};
