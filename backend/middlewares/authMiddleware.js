import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

// Middleware to authenticate users with JWT
export const authMiddleware = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if authorization header is present and starts with "Bearer"
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "No token provided, authorization denied",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    // If user is found, attach user to request object
    if (user) {
      req.user = user;
      return next();
    } else {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
});

export const isAdmin = asyncHandler(async (req, res, next) => {
  // Ensure user is attached to the request
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: User not found",
    });
  }

  const { role } = req.user;

  // Check if the user is an admin
  if (role !== "Admin") {
    return res.status(403).json({
      success: false,
      message: "You are not authorized to access this resource",
    });
  }

  // If the user is an admin, proceed to the next middleware
  next();
});
