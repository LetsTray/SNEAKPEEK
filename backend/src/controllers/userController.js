import { getUserById, updateUserProfile } from "../services/userService.js";

// Helper function to handle errors
const handleError = (res, message, error = null) => {
  return res
    .status(500)
    .json({ message, error: error ? error.message : undefined });
};

// Controller to get the profile of the logged-in user
export const getMe = async (req, res) => {
  try {
    const user = await getUserById(req.user._id);

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
    const updatedUser = await updateUserProfile(req.user._id, {
      name,
      email,
      phone,
    });

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      phone: updatedUser.phone,
    });
  } catch (error) {
    handleError(res, "Server error", error);
  }
};
