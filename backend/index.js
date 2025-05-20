const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const axios = require('axios'); // cho AI assistant

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Cấu hình kết nối MySQL
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'asiamarket_new', // đổi nếu dùng database khác
};

// Đăng nhập (dùng mật khẩu plaintext)
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const conn = await mysql.createConnection(dbConfig);
    const [rows] = await conn.execute('SELECT * FROM users WHERE username = ?', [username]);
    await conn.end();

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Sai tài khoản hoặc mật khẩu.' });
    }

    const user = rows[0];
    if (user.password !== password) {
      return res.status(401).json({ error: 'Sai tài khoản hoặc mật khẩu.' });
    }

    const token = Math.random().toString(36).substring(2);
    res.json({
      message: 'Đăng nhập thành công!',
      userId: user.id,
      token,
    });
  } catch (err) {
    res.status(500).json({ error: 'Lỗi server.' });
  }
});

// Lấy danh sách sản phẩm
app.get('/products', async (req, res) => {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const [rows] = await conn.execute('SELECT * FROM products');
    await conn.end();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Lỗi server.' });
  }
});

// Lấy chi tiết sản phẩm
app.get('/products/:id', async (req, res) => {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const [rows] = await conn.execute('SELECT * FROM products WHERE id = ?', [req.params.id]);
    await conn.end();
    if (rows.length === 0) return res.status(404).json({ error: 'Không tìm thấy sản phẩm.' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Lỗi server.' });
  }
});

// AI Assistant (OpenAI)
app.post('/api/ask-ai', async (req, res) => {
  const { message } = req.body;
  try {
    const apiKey = "sk-..."; // <- Dán OpenAI API key của bạn vào đây
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "Bạn là trợ lý CSKH thân thiện của AsiaMart." },
          { role: "user", content: message },
        ],
        max_tokens: 200,
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    res.json({ reply: response.data.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ reply: "Xin lỗi, hệ thống đang bận. Vui lòng thử lại sau!" });
  }
});

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`✅ Backend server đang chạy tại http://localhost:${PORT}`);
});
