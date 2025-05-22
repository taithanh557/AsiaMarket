const { connection } = require("../config/database");
require("dotenv").config();
//Lấy sản phẩm theo id
const getProductById = async (req, res) => {
  const id = req.params.id;
  try {
    conn = await connection.getConnection();
    const [rows] = await conn.query("SELECT * from Products where id = ?", [
      id,
    ]);
    if (rows.length === 0) {
      return res
        .status(404)
        .json({ success: false, error: "Không tìm thấy sản phẩm nào" });
    }
    res.json({
      success: true,
      data: rows[0],
      message: "Lấy sản phẩm thành công",
    });
  } catch (err) {
    console.error("Error fetching product by ID:", err);
    res.status(500).json({ success: false, error: err.message });
  } finally {
    if (conn) conn.release();
  }
};
//Lấy tất cả sản phẩm
const getAllProduct = async (req, res) => {
  conn = await connection.getConnection();
  try {
    const [rows] = await conn.query("SELECT * FROM Products");
    if (rows.length === 0) {
      return res
        .status(404)
        .json({ success: false, error: "Không tìm thấy sản phẩm nào" });
    }
    res.status(200).json({
      success: true,
      data: rows,
    });
  } catch (err) {
    console.error("Error fetching product:", err);
    res.status(500).json({ success: false, error: err.message });
  } finally {
    if (conn) conn.release();
  }
};
//Thêm sản phẩm
const createProduct = async (req, res) => {
  console.log("Received registration request:", req.body);
  const { name, description, price, quantity, category_id } = req.body;
  const image = req.file ? `/public/uploads/${req.file.filename}` : null; // Đường dẫn ảnh sau khi upload
  // Kiểm tra dữ liệu đầu vào
  if (!name || !description || !price || !quantity || !category_id) {
    return res.status(400).json({ message: "Thiếu thông tin bắt buộc" });
  }
  try {
    conn = await connection.getConnection();
    const [result] = await conn.query(
      "INSERT INTO Products (name, description, price, quantity, image, category_id) VALUES (?, ?, ?, ?, ?, ?)",
      [name, description, price, quantity, image, category_id]
    );
    res.status(201).json({
      message: "Thêm sản phẩm thành công",
      id: result.id,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Add product error", error: error.message });
  } finally {
    if (conn) conn.release();
  }
};
module.exports = {
  getProductById,
  getAllProduct,
  createProduct,
};
