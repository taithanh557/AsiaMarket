const { connection } = require("../config/database");
require("dotenv").config();
//lay thong tin gio hang
const getCart = async (req, res) => {
  const user_id = req.params.user_id;
  let conn;

  try {
    conn = await connection.getConnection();

    // Lấy thông tin giỏ hàng, kể cả sản phẩm đã bị xoá
    const [items] = await conn.query(
      `
      SELECT 
        Cart.id AS id,
        Cart.product_id,
        Cart.quantity,
        Products.name,
        Products.image,
        Products.price,
        Products.quantity AS stock_quantity,
        Products.status
      FROM Cart
      LEFT JOIN Products ON Cart.product_id = Products.id
      WHERE Cart.user_id = ?
    `,
      [user_id]
    );

    const updatedItems = items.map((item) => {
      if (!item.name || item.status === null) {
        // Sản phẩm không tồn tại trong bảng Products
        return {
          id: item.id,
          product_id: item.product_id,
          quantity: item.quantity,
          name: "Sản phẩm không tồn tại",
          status: "deleted",
          message: "Sản phẩm đã bị xoá khỏi hệ thống",
        };
      }

      // Nếu sản phẩm tồn tại
      if (item.status === "out_of_stock") {
        return {
          ...item,
          status: "out_of_stock",
          message: "Sản phẩm đã hết hàng",
        };
      }

      return {
        ...item,
        status: "available",
      };
    });

    res.status(200).json({ success: true, data: updatedItems });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Lỗi khi lấy giỏ hàng",
      error: err.message,
    });
  } finally {
    if (conn) conn.release();
  }
};

//them san pham vo gio hang
const addToCart = async (req, res) => {
  const { user_id, product_id, quantity } = req.body;
  if (!user_id || !product_id || !quantity) {
    return res.status(400).json({ success: false, message: "Thiếu thông tin" });
  }

  let conn;
  try {
    conn = await connection.getConnection();

    // Kiểm tra sản phẩm đã có trong giỏ chưa
    const [existing] = await conn.query(
      "SELECT * FROM Cart WHERE user_id = ? AND product_id = ?",
      [user_id, product_id]
    );

    if (existing.length > 0) {
      // Cập nhật số lượng nếu đã có
      await conn.query(
        "UPDATE Cart SET quantity = quantity + ? WHERE user_id = ? AND product_id = ?",
        [quantity, user_id, product_id]
      );
    } else {
      // Thêm mới nếu chưa có
      await conn.query(
        "INSERT INTO Cart (user_id, product_id, quantity) VALUES (?, ?, ?)",
        [user_id, product_id, quantity]
      );
    }

    res
      .status(200)
      .json({ success: true, message: "Thêm vào giỏ hàng thành công" });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Lỗi thêm vào giỏ hàng",
      error: err.message,
    });
  } finally {
    if (conn) conn.release();
  }
};

//cap nhat so luong san pham
const updateCartItem = async (req, res) => {
  const id = req.params.id;
  const { quantity } = req.body;

  if (!quantity || quantity <= 0) {
    return res
      .status(400)
      .json({ success: false, message: "Số lượng không hợp lệ" });
  }

  let conn;
  try {
    conn = await connection.getConnection();

    await conn.query("UPDATE Cart SET quantity = ? WHERE id = ?", [
      quantity,
      id,
    ]);

    res
      .status(200)
      .json({ success: true, message: "Cập nhật số lượng thành công" });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Lỗi cập nhật giỏ hàng",
      error: err.message,
    });
  } finally {
    if (conn) conn.release();
  }
};

//xoa san pham khoi gio hang
const removeFromCart = async (req, res) => {
  const id = req.params.id;
  let conn;
  try {
    conn = await connection.getConnection();

    await conn.query("DELETE FROM Cart WHERE id = ?", [id]);

    res
      .status(200)
      .json({ success: true, message: "Xoá sản phẩm khỏi giỏ thành công" });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Lỗi xoá khỏi giỏ hàng",
      error: err.message,
    });
  } finally {
    if (conn) conn.release();
  }
};
module.exports = {
    getCart,
    addToCart,
    updateCartItem,
    removeFromCart,
}