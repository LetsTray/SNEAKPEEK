// Middleware to log each incoming request
const requestLogger = (req, res, next) => {
  // Log the HTTP method and URL
  console.log(`${req.method} ${req.originalUrl}`);

  // Pass control to the next middleware or route handler
  next();
};

export { requestLogger };
