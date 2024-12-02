import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User } from "../models/User.js";

/**
 * Register a new user
 * @param {string} name - Name of the user
 * @param {string} email - Email of the user
 * @param {string} password - Password for the user
 * @param {string} phone - Phone number of the user
 * @returns {Object} Created user data
 */
export const registerUser = async (name, email, password, phone) => {
  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists with this email");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    phone,
  });

  return await newUser.save();
};

/**
 * Authenticate a user and return a token
 * @param {string} email - Email of the user
 * @param {string} password - Password for the user
 * @returns {Object} User data and token
 */
export const loginUser = async (email, password) => {
  // Find user by email
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid credentials");
  }

  // Check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  // Generate token
  const token = generateToken(user._id);

  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    },
    token,
  };
};

/**
 * Get user details by ID
 * @param {string} id - User ID
 * @returns {Object} User details
 */
export const getUserById = async (id) => {
  const user = await User.findById(id).select("-password");
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

/**
 * Generate a JWT token
 * @param {string} userId - User ID
 * @returns {string} JWT token
 */
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};
