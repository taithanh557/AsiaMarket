const express = require("express");
const router = express.Router();
const {
  getProductsByCategoryName,
  getCategoryById,
  getAllCategory,
} = require("../controllers/controllerCategory");
//lay san pham theo ten phan loai
router.get("/categories/:name", getProductsByCategoryName);
//lay danh muc theo id
router.get("/categories/:id", getCategoryById);
//lay tat ca danh muc
router.get("/categories", getAllCategory);

module.exports = router;
