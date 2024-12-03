const requestLogger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const date = new Date().toISOString();

  console.log(`[${date}] ${method} request to ${url}`);

  next();
};

export default requestLogger;
