// Middleware untuk mencatat setiap request yang datang
const requestLogger = (req, res, next) => {
  // Mencatat metode HTTP dan URL dari request
  console.log(`${req.method} ${req.originalUrl}`);

  // Melanjutkan ke middleware atau handler berikutnya
  next();
};

export { requestLogger };
