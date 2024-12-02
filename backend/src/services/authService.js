// src/services/authService.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/**
 * Registers a new user
 * @param {Object} userData - User data (email, password, name)
 * @returns {Object} - Registered user
 */
export const registerUser = async ({ email, password, name, phone }) => {
  if (await User.findOne({ email })) {
    throw new Error("Email already in use");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  return User.create({ email, password: hashedPassword, name, phone });
};

/**
 * Logs in a user
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {string} - JWT token
 */
export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid credentials");
  }

  return jwt.sign(
    { userId: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );
};
