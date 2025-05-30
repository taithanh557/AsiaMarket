const express = require("express");
const router = express.Router();
const {
  getProductsByCategoryName,
  getCategoryById,
  getAllCategory,
  addCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/controllerCategory");
//lay san pham theo ten phan loai
router.get("/categories/:name", getProductsByCategoryName);
//lay danh muc theo id
router.get("/categories/:id", getCategoryById);
//lay tat ca danh muc
router.get("/categories", getAllCategory);
//them danh muc
router.post("/categories/add", addCategory);
//sua danh muc
router.put("/categories/update:id", updateCategory);
//xoa danh muc
router.put("/categories/delete:id", deleteCategory);
module.exports = router;
