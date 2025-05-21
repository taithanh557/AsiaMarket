/**
    Cái file ni để cấu hình nếu xảy ra lỗi
 */
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err.message);
  console.error(err.stack);

  // Set appropriate status code
  const statusCode = err.statusCode || 500;
  
  // Send error response
  res.status(statusCode).json({
    error: {
      message: err.message || 'Internal server error',
      // Only include stack trace in development
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    }
  });
};

module.exports = errorHandler;
