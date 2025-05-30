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
//Cập nhật sản phẩm
const updateProduct = async (req, res) => {
  const id = req.params.id;
  const { name, description, price } = req.body;
  const image = req.file ? `/public/uploads/${req.file.filename}` : null; // Đường dẫn ảnh sau khi upload
  // Kiểm tra dữ liệu đầu vào
  if (!name || !description || !price) {
    return res.status(400).json({ message: "Thiếu thông tin bắt buộc" });
  }
  try {
    conn = await connection.getConnection();
    // Cập nhật thông tin sản phẩm
    let query = `
      UPDATE Products 
      SET name = ?, description = ?, price = ?,
      ${image ? ", image = ?" : ""}
      WHERE id = ?
    `;
    const params = image
      ? [name, description, price, image, id]
      : [name, description, price, id];

    await conn.query(query, params);
    res.status(201).json({
      success: true,
      message: "Cập nhật sản phẩm thành công",
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Update product error", error: error.message });
  } finally {
    if (conn) conn.release();
  }
};
//Cập nhật số lượng sản phẩm
const updateProductQuantity = async (req, res) => {
  const id = req.params.id;
  const { quantity, status } = req.body;
  let conn;
  try {
    conn = await connection.getConnection();
    // Tự động đặt status nếu quantity = 0
    const finalStatus = quantity === 0 ? "out_of_stock" : status;
    // Cập nhật quantity và status
    await conn.query(
      "UPDATE Products SET quantity = ?, status = ? WHERE id = ?",
      [quantity, finalStatus, id]
    );
    res.status(200).json({
      message: "Cập nhật số lượng thành công",
      updated: {
        quantity,
        status: finalStatus,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Lỗi máy chủ khi cập nhật số lượng",
      error: error.message,
    });
  } finally {
    if (conn) conn.release();
  }
};
//Xoá sản phẩm
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  let conn;
  try {
    conn = await conn.getConnection();
    await conn.query("DELETE FROM Products WHERE id = ? ", [id]);
    res.status(200).json({
      message: "Xoá sản phẩm thành công",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Lỗi xoá sản phẩm",
      error: error.message,
    });
  } finally {
    if (conn) conn.release();
  }
};
module.exports = {
  getProductById,
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  updateProductQuantity,
};
