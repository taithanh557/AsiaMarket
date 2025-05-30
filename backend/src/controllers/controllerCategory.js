const { connection } = require("../config/database");
require("dotenv").config();
//lay tat ca phan loai
const getAllCategory = async (req, res) => {
  try {
    conn = await connection.getConnection();
    const [rows] = await conn.query("SELECT * FROM Categories");
    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        error: "Không tìm thấy danh mục nào",
      });
    }
    res.json({
      success: true,
      data: rows,
      message: "Lấy tất cả danh mục thành công",
    });
  } catch (err) {
    console.error("Error get all category:", err);
    res.status(500).json({ success: false, error: err.message });
  } finally {
    if (conn) conn.release();
  }
};
//lay phan loai theo id
const getCategoryById = async (req, res) => {
  const id = req.params.id;
  try {
    conn = await connection.getConnection();
    const [rows] = await conn.query("SELECT * FROM Categories where id = ?", [
      id,
    ]);
    if (rows.length === 0) {
      return res
        .status(404)
        .json({ success: false, error: "Không tìm thấy danh mục nào" });
    }
    res.json({
      success: true,
      data: rows[0],
      message: "Lấy danh mục thành công",
    });
  } catch (err) {
    console.error("Error get category by ID:", err);
    res.status(500).json({ success: false, error: err.message });
  } finally {
    if (conn) conn.release();
  }
};
//lay san pham theo phan loai
const getProductsByCategoryName = async (req, res) => {
  const categoryName = req.params.name;
  try {
    conn = await connection.getConnection();
    const [rows] = await conn.query(
      `SELECT p.* FROM Products p
       JOIN Categories c ON p.category_id = c.id
       WHERE c.name = ?`,
      [categoryName]
    );
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
//them phan loai
const addCategory = async (req, res) => {
  const name = req.body;
  // Kiểm tra dữ liệu đầu vào
  if (!name || name.trim() === "") {
    return res.status(400).json({ message: "Vui lòng nhập tên phân loại" });
  }
  let conn;
  try {
    conn = await connection.getConnection();
    // Kiểm tra tên phân loại đã tồn tại chưa
    const [existing] = await conn.query(
      "SELECT id FROM Categories WHERE name = ?",
      [name.trim()]
    );
    if (existing.length > 0) {
      return res.status(409).json({ message: "Tên phân loại đã tồn tại" });
    }
    // Thêm phân loại mới
    const [result] = await conn.query(
      "INSERT INTO Categories (name) VALUES (?)",
      [name.trim()]
    );

    res.status(201).json({
      message: "Thêm phân loại thành công",
      id: result.id,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Add category error", error: error.message });
  } finally {
    if (conn) conn.release();
  }
};
//sua phan loai
const updateCategory = async (req, res) => {
  const id = req.params.id;
  const name = req.body;
  // Kiểm tra dữ liệu đầu vào
  if (!name || name.trim() === "") {
    return res.status(400).json({ message: "Vui lòng nhập tên phân loại" });
  }
  let conn;
  try {
    conn = await connection.getConnection();
    // Kiểm tra tên phân loại đã tồn tại chưa
    const [existing] = await conn.query(
      "SELECT id FROM Categories WHERE name = ?",
      [name.trim()]
    );
    if (existing.length > 0) {
      return res.status(409).json({ message: "Tên phân loại đã tồn tại" });
    }
    // Cập nhật tên phân loại
    const [result] = await conn.query(
      "UPDATE Categories SET name = ? WHERE id = ? ",
      [name.trim(), id]
    );

    res.status(201).json({
      message: "Cập nhật phân loại thành công",
      id: result.id,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Update category error", error: error.message });
  } finally {
    if (conn) conn.release();
  }
};
//xoa phan loai
const deleteCategory = async (req, res) => {
  const id = req.params.id;
  let conn;
  try {
    conn = await connection.getConnection();
    await conn.query("DELETE FROM Categories where id = ?", [id]);
    res.status(500).json({
      message: "Xoá phân loại thành công",
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Delete category error", error: error.message });
  } finally {
    if (conn) conn.release();
  }
};
module.exports = {
  getProductsByCategoryName,
  getCategoryById,
  getAllCategory,
  addCategory,
  updateCategory,
  deleteCategory,
};
