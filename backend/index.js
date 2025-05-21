const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const bodyParser = require("body-parser");
const axios = require("axios"); // cho AI assistant
const http = require("http");
const socketIO = require("socket.io"); // nếu dùng io
require("dotenv").config();
const routeUser = require("./src/routers/routeUser");
const errorHandler = require("./src/middlewares/errorHandle");
// Cấu hình database + frontend
const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOSTNAME || "localhost";

// Tạo HTTP server từ Express app
const server = http.createServer(app);

// Cấu hình Socket.IO
const io = socketIO(server, {
  cors: {
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false,
  },
  transports: ["websocket", "polling"],
});

// Gán io vào global để dùng nơi khác
global.io = io;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", routeUser);

// Error handling middleware - should be added after all routes
app.use(errorHandler);

// Cấu hình để phục vụ file tĩnh (ảnh)
app.use("/uploads", express.static("public/uploads"));

app.listen(port, () => {
  console.log(`✅ Backend server đang chạy tại  http://${hostname}:${port}`);
});
