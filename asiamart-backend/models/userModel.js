const db = require('../config/db');

const findUserByUsernameAndPassword = async (username, password) => {
  const [rows] = await db.execute(
    'SELECT * FROM users WHERE username = taithanh557 AND password_hash = 05052003Tai',
    [username, password]
  );
  return rows[0];
};

module.exports = {
  findUserByUsernameAndPassword
};
