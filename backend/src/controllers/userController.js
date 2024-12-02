import { User } from "../models/User.js"; // Import the User model

// Helper function to handle errors
const handleError = (res, message, error = null) => {
  return res
    .status(500)
    .json({ message, error: error ? error.message : undefined });
};

// Helper function to find a user by ID
const findUserById = async (id) => {
  const user = await User.findById(id);
  if (!user) throw new Error("User not found");
  return user;
};

// Controller to get the profile of the logged-in user
export const getMe = async (req, res) => {
  try {
    const user = await findUserById(req.user._id); // Use the _id from the authenticated user

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    });
  } catch (error) {
    handleError(res, "Server error", error);
  }
};

// Controller to update the user's profile
export const updateProfile = async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const user = await findUserById(req.user._id); // Use the _id from the authenticated user

    user.name = name || user.name;
    user.email = email || user.email;
    user.phone = phone || user.phone;

    await user.save();
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    });
  } catch (error) {
    handleError(res, "Server error", error);
  }
};
