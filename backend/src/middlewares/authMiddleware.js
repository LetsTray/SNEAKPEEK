import express from "express";

// Destructure Request, Response, NextFunction from express
const { Request, Response, NextFunction } = express;

// Custom request logger middleware
export const requestLogger = (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl} - ${new Date().toISOString()}`);
  next(); // Pass control to the next middleware
};

// Example of other middleware (if any)
export const protect = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }
  // Here you can add logic for verifying the token (e.g., JWT)
  next();
};
