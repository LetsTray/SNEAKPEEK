import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Protect middleware for routes that require authentication
export const protect = async (req, res, next) => {
  let token;

  // Check for the Authorization header with a Bearer token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]; // Extract token

      // Verify the token using the JWT secret
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach the user to the request object (without password)
      req.user = await User.findById(decoded.id).select("-password");

      next(); // Allow the request to continue to the protected route
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    return next();
  } else {
    res.status(403).json({ message: "Admin privileges required" });
  }
};
