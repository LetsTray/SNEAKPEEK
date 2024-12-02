import { Request, Response, NextFunction } from "express";

// Custom request logger middleware
export const requestLogger = (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl} - ${new Date().toISOString()}`);
  next(); // Pass control to the next middleware
};

// Your other middlewares (authMiddleware, etc.)
export const protect = (req, res, next) => {
  // Example of an authentication check middleware
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }
  // Add more logic for verifying the token (e.g., JWT verification)
  next();
};
