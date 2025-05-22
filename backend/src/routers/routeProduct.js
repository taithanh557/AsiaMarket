const express = require("express");
const router = express.Router();
const {
  getProductById,
  getAllProduct,
  createProduct,
} = require("../controllers/controllerProduct");
const upload = require("../utils/upload");
//lay san pham theo id
router.get("/products/:id", getProductById);
//lay tat ca san pham
router.get("/products", getAllProduct);
//them san pham
router.post("/products/create", upload.single("image"), createProduct);

module.exports = router;
