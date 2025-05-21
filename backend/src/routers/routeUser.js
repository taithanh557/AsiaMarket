const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  forgotPassword,
  updateProfile,
  changePassword,
} = require("../controllers/controllerUser");
const upload = require("../utils/upload");
//dang ky
router.post("/register", registerUser);
//dang nhap
router.post("/login", loginUser);
//quen mat khau
router.post("/forgot-password", forgotPassword);
//cap nhat thong tin ca nhan
router.put("/users/:id", upload.single("avatar"), updateProfile);
//thay doi mat khau ca nhan
router.put("/users/change-password/:id", changePassword);
const authMiddleware = require("../middlewares/auth");

module.exports = router;
