// Middleware to handle routes not found (404)
export const notFound = (req, res, next) => {
  const error = new Error(`Not Found: ${req.originalUrl}`);
  res.status(404).json({
    success: false,
    message: error.message,
  });
  next();
};

// Middleware to handle application errors
export const errorHandler = (err, req, res, next) => {
  console.error(`Error: ${err.message}`);

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    success: false,
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};
