import express from "express";

// Custom request logger middleware
export const requestLogger = (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl} - ${new Date().toISOString()}`);
  next(); // Proceed to the next middleware or route handler
};

// Middleware to protect routes by checking the Authorization token
export const protect = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  // You can add token verification logic here (e.g., JWT verification)
  next(); // If token exists, proceed to the next middleware or route handler
};
