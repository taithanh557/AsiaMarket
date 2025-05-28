const { connection } = require("../config/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const validator = require("validator");

//cấu hình các thứ
const createToken = (user) => {
  return jwt.sign({ ID_TK: user.ID_TK }, process.env.JWT_SECRET_KEY, {
    expiresIn: "3d",
  });
};
// Register
const registerUser = async (req, res) => {
  console.log("Received registration request:", req.body);
  const { name, password, email, phone, role } = req.body;
  const created_at = new Date();

  //kiểm tra định dạng email
  if (!validator.isEmail(email)) {
    console.log("Invalid email:", email);
    return res
      .status(400)
      .json({ success: false, error: "Email không hợp lệ" });
  }
  //kiểm tra số điện thoại hợp lệ
  if (!validator.isMobilePhone(phone, "vi-VN")) {
    console.log("Invalid email:", phone);
    return res
      .status(400)
      .json({ success: false, error: "Số điện thoại không hợp lệ" });
  }
  //kiểm tra vai trò
  if (!["admin", "buyer", "seller"].includes(role)) {
    return res
      .status(400)
      .json({ success: false, error: "Vai trò không hợp lệ" });
  }
  // Kiểm tra độ dài mật khẩu
  if (password.length < 5) {
    return res
      .status(400)
      .json({ success: false, error: "Mật khẩu phải có ít nhất 5 ký tự" });
  }
  // Kiểm tra trường mô trống
  if (!name || !phone || !email || !password) {
    return res
      .status(400)
      .json({ success: false, error: "Thiếu thông tin đăng ký" });
  }
  let conn;
  try {
    conn = await connection.getConnection();
    await conn.beginTransaction();

    //kiem tra so dien thoai da ton tai chua
    const [existingPhone] = await conn.query(
      "SELECT * FROM Users WHERE phone = ?",
      [phone]
    );
    if (existingPhone.length > 0) {
      return res
        .status(400)
        .json({ success: false, error: "Số điện thoại đã tồn tại" });
    }

    //kiem tra email da ton tai chua
    const [existingEmail] = await conn.query(
      "SELECT * FROM Users WHERE email = ?",
      [email]
    );
    if (existingEmail.length > 0) {
      return res
        .status(400)
        .json({ success: false, error: "Email đã tồn tại" });
    }

    //hash password: mã hoá mật khẩu trc khi lưu xún db
    const hashedPassword = await bcrypt.hash(password, 10);
    const [userResult] = await conn.query(
      "INSERT INTO Users (name, email, phone, password, role, created_at) VALUES (?, ?, ?, ? ,? ,?)",
      [name, email, phone, hashedPassword, role, created_at]
    );

    //Tự tạo Id
    const userId = userResult.insertId;

    await conn.commit();

    //tự tạo token
    const token = createToken({ id: userId, role });
    //trả về kết quả nếu thành công
    return res.status(201).json({
      success: true,
      message: "Đăng ký thành công",
      data: { id: userId, token },
    });
  } catch (err) {
    if (conn) await conn.rollback();
    console.error("Registration error:", err);
    return res.status(500).json({ success: false, error: err.message });
  } finally {
    if (conn) conn.release();
  }
};
// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  //Kiểm tra trường trống
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, error: "Tên đăng nhập và mật khẩu là bắt buộc" });
  }

  //kiểm tra định dạng email
  if (!validator.isEmail(email)) {
    console.log("Invalid email:", email);
    return res
      .status(400)
      .json({ success: false, error: "Email không hợp lệ" });
  }

  let conn;
  try {
    conn = await connection.getConnection();

    // Check if account exists
    const [rows] = await conn.query("SELECT * FROM Users WHERE email = ?", [
      email,
    ]);
    if (rows.length === 0) {
      return res
        .status(404)
        .json({ success: false, error: "Tài khoản không tồn tại" });
    }

    const user = rows[0];

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, error: "Mật khẩu không chính xác" });
    }

    // Create JWT
    const token = createToken(user);

    return res.status(200).json({
      success: true,
      message: "Đăng nhập thành công",
      data: {
        id: user.id,
        role: user.role,
        token,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ success: false, error: err.message });
  } finally {
    if (conn) conn.release();
  }
};
// Forgot password
const forgotPassword = async (req, res) => {
  console.log("Received forgot password request:", req.body);

  const { email, password, confirmPassword } = req.body;

  //Kiểm tra trống
  if (!email || !password || !confirmPassword) {
    return res.status(400).json({
      success: false,
      error: "Vui lòng nhập đầy đủ email, mật khẩu mới và xác nhận mật khẩu",
    });
  }
  // Kiểm tra email hợp lệ
  if (!validator.isEmail(email)) {
    return res
      .status(400)
      .json({ success: false, error: "Email không hợp lệ" });
  }
  // Kiểm tra mật khẩu nhập vào
  if (!password || !confirmPassword) {
    return res.status(400).json({
      success: false,
      error: "Vui lòng nhập đầy đủ mật khẩu mới và xác nhận mật khẩu",
    });
  }
  // Kiểm tra độ dài mật khẩu
  if (password.length < 5) {
    return res
      .status(400)
      .json({ success: false, error: "Mật khẩu phải có ít nhất 5 ký tự" });
  }
  // so sánh mật khẩu vs xác nhận mật khẩu
  if (password !== confirmPassword) {
    return res
      .status(400)
      .json({ success: false, error: "Mật khẩu xác nhận không khớp" });
  }
  let conn;
  try {
    conn = await connection.getConnection();
    // Kiểm tra tài khoản tồn tại
    const [user] = await conn.query("SELECT * FROM Users WHERE email = ?", [
      email,
    ]);
    if (user.length === 0) {
      return res.status(404).json({
        success: false,
        error: "Không tìm thấy người dùng với email này",
      });
    }

    // Mã hóa và cập nhật mật khẩu mới
    const hashedPassword = await bcrypt.hash(password, 10);
    await conn.query("UPDATE Users SET password = ? WHERE email = ?", [
      hashedPassword,
      email,
    ]);

    return res
      .status(200)
      .json({ success: true, message: "Đặt lại mật khẩu thành công" });
  } catch (err) {
    console.error("Forgot password error:", err);
    return res
      .status(500)
      .json({ success: false, error: "Lỗi máy chủ, vui lòng thử lại sau" });
  } finally {
    if (conn) conn.release();
  }
};
// update profile
const updateProfile = async (req, res) => {
  const id = req.params.id;
  const { name, email, phone, address } = req.body;
  const avatar = req.file ? `/public/uploads/${req.file.filename}` : null; // Đường dẫn ảnh sau khi upload
  //kiểm tra thông tin trống
  if ((!name || !email || !phone, !address)) {
    return res.status(400).json({
      success: false,
      error: "Vui lòng nhập đầy đủ thông tin cá nhân",
    });
  }
  //kiểm tra email hợp lệ
  if (!validator.isEmail(email)) {
    console.log("Invalid email:", email);
    return res
      .status(400)
      .json({ success: false, error: "Email không hợp lệ" });
  }
  //kiểm tra số điện thoại hợp lệ
  if (!validator.isMobilePhone(phone, "vi-VN")) {
    console.log("Invalid phone:", phone);
    return res
      .status(400)
      .json({ success: false, error: "Số điện thoại không hợp lệ" });
  }
  let conn;
  try {
    conn = await connection.getConnection();
    await conn.beginTransaction();
    //kiểm tra email có trùng không
    const [existingEmail] = await conn.query(
      "SELECT * FROM Users WHERE email = ?",
      [email]
    );
    if (existingEmail.length > 0) {
      return res
        .status(400)
        .json({ success: false, error: "email đã tồn tại" });
    }
    //kiểm tra số điện thoại có trùng không
    const [existingPhone] = await conn.query(
      "SELECT * FROM Users WHERE phone = ?",
      [phone]
    );
    if (existingPhone.length > 0) {
      return res
        .status(400)
        .json({ success: false, error: "số điện thoại đã tồn tại" });
    }
    const [updateResult] = await conn.query(
      "UPDATE Users SET name = ?, email = ?, phone = ?, address = ?, avatar = ? WHERE id = ?",
      [name, email, phone, address, avatar, id]
    );

    await conn.commit();

    return res.status(201).json({
      success: true,
      message: "Cập nhật thông tin thành công",
      data: { id: id, updateResult },
    });
  } catch (err) {
    if (conn) await conn.rollback();
    console.error("Update user error:", err);
    return res.status(500).json({ success: false, error: err.message });
  } finally {
    if (conn) conn.release();
  }
};
// change pasword
const changePassword = async (req, res) => {
  const id = req.params.id;
  const { currentPassword, newPassword, confirmPassword } = req.body;

  // Kiểm tra thông tin trống
  if (!currentPassword || !newPassword || !confirmPassword) {
    return res.status(400).json({
      success: false,
      error: "Vui lòng nhập đủ thông tin mật khẩu",
    });
  }

  let conn;
  try {
    conn = await connection.getConnection();
    // Kiểm tra mật khẩu hiện tại có đúng không
    const [userRows] = await conn.query(
      "SELECT password FROM Users WHERE id = ?",
      [id]
    );
    if (userRows.length === 0) {
      return res.status(404).json({
        success: false,
        error: "Người dùng không tồn tại",
      });
    }

    const isMatch = await bcrypt.compare(currentPassword, userRows[0].password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        error: "Mật khẩu hiện tại không đúng",
      });
    }

    // Kiểm tra độ dài mật khẩu mới
    if (newPassword.length < 5) {
      return res
        .status(400)
        .json({ success: false, error: "Mật khẩu phải có ít nhất 5 ký tự" });
    }

    // so sánh mật khẩu mới với xác nhận mật khẩu
    if (newPassword !== confirmPassword) {
      return res
        .status(400)
        .json({ success: false, error: "Mật khẩu xác nhận không khớp" });
    }

    // Mã hóa và cập nhật mật khẩu mới
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await conn.query("UPDATE Users SET password = ? WHERE id = ?", [
      hashedPassword,
      id,
    ]);

    return res
      .status(200)
      .json({ success: true, message: "Thay đổi mật khẩu thành công" });
  } catch (err) {
    console.error("Update password error:", err);
    return res
      .status(500)
      .json({ success: false, error: "Lỗi máy chủ, vui lòng thử lại sau" });
  } finally {
    if (conn) conn.release();
  }
};
// change active
const changeActive = async (req, res) => {
  const id = req.params.id;
  const { isActive } = req.body;
  // Kiểm tra đầu vào
  if (typeof isActive === "undefined") {
    return res.status(400).json({
      success: false,
      error: "Không tim thấy trạng thái active",
    });
  }
  let conn;
  try {
    // Kiểm tra người dùng có tồn tại không
    const [userRows] = await conn.query("SELECT id FROM Users WHERE id = ?", [
      id,
    ]);
    if (userRows.length === 0) {
      return res.status(404).json({
        success: false,
        error: "Người dùng không tồn tại",
      });
    }
    // Cập nhật trạng thái hoạt động
    await conn.query("UPDATE Users SET is_active = ? WHERE id = ?", [
      isActive ? 1 : 0,
      id,
    ]);
    return res.status(200).json({
      success: true,
      message: `Đã ${isActive ? "mở khoá" : "khoá"} tài khoản`,
    });
  } catch (error) {
    console.error("Change active status error:", err);
    return res.status(500).json({
      success: false,
      error: "Lỗi máy chủ, vui lòng thử lại sau",
    });
  } finally {
    if (conn) conn.release();
  }
};
// delete user
const deleteUser = async (req, res) => {
  const id = req.params.id;
  let conn;
  try {
    //kiểm tra người dùng có tồn tại không
    const [userRows] = await conn.query("SELECT * FROM Users WHERE id = ?", [
      id,
    ]);
    if (userRows.length === 0) {
      return res
        .status(400)
        .json({ success: false, error: "nguời dùng không tồn tại" });
    }
    await conn.query("DELETE Users WHERE id = ?", [id]);
    return res.status(200).json({
      success: true,
      message: "Xoá người dùng thành công",
    });
  } catch (error) {
    console.error("Change active status error:", err);
    return res.status(500).json({
      success: false,
      error: "Lỗi máy chủ, vui lòng thử lại sau",
    });
  } finally {
    if (conn) conn.release();
  }
};
module.exports = {
  registerUser,
  loginUser,
  forgotPassword,
  updateProfile,
  changePassword,
  changeActive,
  deleteUser,
};
