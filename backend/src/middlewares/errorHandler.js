const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  let message = err.message || "Server Error";

  // Handle validation errors
  if (err.name === "ValidationError") {
    res.status(400);
    message = Object.values(err.errors)
      .map((error) => error.message)
      .join(", ");
  }

  // Handle duplicate field value error (MongoDB)
  if (err.code === 11000) {
    res.status(400);
    message = "Duplicate field value entered";
  }

  // Send response with the error message and stack trace
  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { errorHandler };
