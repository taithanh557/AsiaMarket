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
module.exports = {
  getProductsByCategoryName,
  getCategoryById,
  getAllCategory,
};
