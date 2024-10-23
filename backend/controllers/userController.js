import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../config/jwtToken.js";
import mongoose from "mongoose";

// Helper function to send a standardized response
const sendResponse = (res, status, success, message, data = null) => {
  const response = { success, message };
  if (data) response.data = data;
  return res.status(status).json(response);
};

// Helper function to format user response
const formatUserResponse = (user) => ({
  _id: user._id,
  firstname: user.firstname,
  lastname: user.lastname,
  email: user.email,
  mobile: user.mobile,
  role: user.role,
});

// Create a new user
export const createUser = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return sendResponse(res, 400, false, "User already exists.");
  }

  const newUser = await User.create(req.body);
  sendResponse(
    res,
    201,
    true,
    "User created successfully.",
    formatUserResponse(newUser)
  );
});

// User login
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await user.isPasswordMatched(password))) {
    return sendResponse(res, 401, false, "Invalid email or password.");
  }

  sendResponse(res, 200, true, "Login successful.", {
    ...formatUserResponse(user),
    token: generateToken(user._id),
  });
});

// Get all users
export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  if (!users.length) {
    return sendResponse(res, 404, false, "No users found.");
  }

  sendResponse(
    res,
    200,
    true,
    "Users retrieved successfully.",
    users.map(formatUserResponse)
  );
});

// Get a user by ID
export const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return sendResponse(res, 400, false, "Invalid user ID.");
  }

  const user = await User.findById(id);
  if (!user) {
    return sendResponse(res, 404, false, "User not found.");
  }

  sendResponse(
    res,
    200,
    true,
    "User retrieved successfully.",
    formatUserResponse(user)
  );
});

// Update a user by ID
export const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return sendResponse(res, 400, false, "Invalid user ID.");
  }

  const user = await User.findById(id);
  if (!user) {
    return sendResponse(res, 404, false, "User not found.");
  }

  // Update user fields with provided data
  Object.assign(user, req.body);
  const updatedUser = await user.save();

  sendResponse(
    res,
    200,
    true,
    "User updated successfully.",
    formatUserResponse(updatedUser)
  );
});

// Delete a user by ID
export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return sendResponse(res, 400, false, "Invalid user ID.");
  }

  const user = await User.findById(id);
  if (!user) {
    return sendResponse(res, 404, false, "User not found.");
  }

  await User.findByIdAndDelete(id);
  sendResponse(res, 200, true, "User deleted successfully.");
});

// Block a user by ID
export const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return sendResponse(res, 400, false, "Invalid user ID.");
  }

  const user = await User.findById(id);
  if (!user) {
    return sendResponse(res, 404, false, "User not found.");
  }

  user.isBlocked = true; // Assuming `isBlocked` is a field in your User model
  await user.save();

  sendResponse(
    res,
    200,
    true,
    "User blocked successfully.",
    formatUserResponse(user)
  );
});

// Unblock a user by ID
export const unblockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return sendResponse(res, 400, false, "Invalid user ID.");
  }

  const user = await User.findById(id);
  if (!user) {
    return sendResponse(res, 404, false, "User not found.");
  }

  user.isBlocked = false; // Assuming `isBlocked` is a field in your User model
  await user.save();

  sendResponse(
    res,
    200,
    true,
    "User unblocked successfully.",
    formatUserResponse(user)
  );
});
