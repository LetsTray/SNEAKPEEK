import User from "../models/user.js";

// Get user by ID
export const getUserById = async (id) => {
  const user = await User.findById(id);
  if (!user) throw new Error("User not found");
  return user;
};

// Update user profile
export const updateUserProfile = async (userId, { name, email, phone }) => {
  const user = await User.findById(userId);
  if (!user) throw new Error("User not found");

  user.name = name || user.name;
  user.email = email || user.email;
  user.phone = phone || user.phone;

  await user.save();
  return user;
};
