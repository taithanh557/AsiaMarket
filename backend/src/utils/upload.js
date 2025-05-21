const multer = require("multer");
const path = require("path");

// Cấu hình lưu file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Lưu ảnh vào thư mục 'public/uploads'
    cb(null, "public/uploads/");
  },
  filename: (req, file, cb) => {
    // Tạo tên file mới với thời gian và tên gốc
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Kiểm tra định dạng file
const fileFilter = (req, file, cb) => {
  // Chỉ cho phép file ảnh
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Chỉ được upload ảnh"), false);
  }
};

// Khởi tạo multer với cấu hình trên
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // Giới hạn dung lượng file tối đa là 5MB
});

module.exports = upload;
