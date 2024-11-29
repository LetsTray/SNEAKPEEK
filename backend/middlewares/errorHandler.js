const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });

  if (process.env.NODE_ENV !== "production") {
    console.error(err); // Log the error for development
  }
};

export default errorHandler;
