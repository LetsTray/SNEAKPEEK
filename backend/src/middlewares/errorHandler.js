const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  let message = err.message || "Server Error";

  if (err.name === "ValidationError") {
    res.status(400);
    message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
  }

  if (err.code === 11000) {
    res.status(400);
    message = "Duplicate field value entered";
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { errorHandler };
