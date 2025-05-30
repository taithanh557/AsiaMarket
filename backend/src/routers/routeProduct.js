const express = require("express");
const router = express.Router();
const {
  getProductById,
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  updateProductQuantity,
} = require("../controllers/controllerProduct");
const upload = require("../utils/upload");
//lay san pham theo id
router.get("/products/:id", getProductById);
//lay tat ca san pham
router.get("/products", getAllProduct);
//them san pham
router.post("/products/create", upload.single("image"), createProduct);
//xoa san pham
router.delete("/products/delete/:id", deleteProduct);
//cap nhat thong tin san pham
router.put("/products/update/:id", upload.single("image"), updateProduct);
//cap nhat so luong san pha
router.post("/products/update-quantity/:id", updateProductQuantity);
module.exports = router;
