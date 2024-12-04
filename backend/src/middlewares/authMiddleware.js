import { verifyToken } from "../utils/jwt.js"; // Ensure the path is correct

// Middleware for user authentication
export const protect = async (req, res, next) => {
  let token;

  // Check if token is provided in the Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Extract token from the Authorization header
      token = req.headers.authorization.split(" ")[1];

      if (!token) {
        return res.status(401).json({ message: "Token is required" });
      }

      // Verify token and extract the decoded payload
      const decoded = verifyToken(
        token,
        process.env.JWT_SECRET || "your-jwt-secret"
      );

      // Attach user data from decoded token to request object
      req.user = {
        id: decoded.id,
        email: decoded.email,
        isAdmin: decoded.isAdmin,
      };

      // Log user ID for debugging purposes
      console.log("User ID from Token:", req.user.id);

      // Continue to the next middleware/controller if token is valid
      next();
    } catch (error) {
      console.error("Token verification failed:", error.message);
      // Handle error by sending a response to the client
      res
        .status(401)
        .json({ message: "Not authorized, token verification failed" });
    }
  } else {
    // If no token is provided in the header
    console.log("No token provided");
    res.status(401).json({ message: "Not authorized, no token provided" });
  }
};

// Middleware to check if the user is an admin
export const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    // Allow access if the user is an admin
    return next();
  } else {
    // If the user is not an admin, return a 403 Forbidden response
    res.status(403).json({ message: "Not authorized as an admin" });
  }
};
