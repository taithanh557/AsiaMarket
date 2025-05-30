const express = require("express");
const router = express.Router();
const upload = require("../utils/upload");
const {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
} = require("../controllers/controllerCart");
//lay thong tin gio hang
router.get("/cart/:user_id", getCart);
//them san pham vo gio hang
router.post("/cart", addToCart);
//cap nhat so luong san pham trong gio hang
router.put("/cart/:id", updateCartItem);
//xoa san pham khoi
router.delete("/cart/:id", removeFromCart);
module.exports = router;
