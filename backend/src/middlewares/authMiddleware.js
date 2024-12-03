import { verifyToken } from "../services/authService.js";

// Middleware to protect routes by checking the Authorization token
export const protect = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    // Decoding the token and storing user data in request object
    req.user = verifyToken(token);
    next(); // If token exists, proceed to the next middleware or route handler
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
