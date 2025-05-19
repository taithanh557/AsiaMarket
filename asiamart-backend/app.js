// app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Import routes ở bước sau
// app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.use('/api/auth', require('./routes/authRoutes'));