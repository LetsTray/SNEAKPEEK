import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Registers a new user
export const registerUser = async ({ email, password, name, phone }) => {
  // Check if email already exists
  if (await User.findOne({ email })) {
    throw new Error("Email already in use");
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 12); // More salt rounds for security

  // Create and return the new user
  return User.create({ email, password: hashedPassword, name, phone });
};

// Logs in a user
export const loginUser = async (email, password) => {
  // Check if user exists
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }

  // Compare entered password with stored hashed password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  // Generate JWT token if login is successful
  return jwt.sign(
    { userId: user._id, email: user.email },
    process.env.JWT_SECRET || "defaultsecret", // Ensure fallback secret if JWT_SECRET is missing
    { expiresIn: "30d" } // Adjust token expiry as needed
  );
};

// Verifies JWT token
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET || "defaultsecret");
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      throw new Error("Token has expired");
    }
    throw new Error("Invalid or expired token");
  }
};
