import { User } from "../models/User.js"; // Import the User model

// Function to get user by ID
export const getUserById = async (id) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      return null; // Return null if no user is found
    }
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Error retrieving user");
  }
};

// Controller to get the profile of the logged-in user
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id); // Use the _id from the authenticated user
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      // Any other user data you want to send in the response
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Controller to update the user's profile
export const updateProfile = async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const user = await User.findById(req.user._id); // Use the _id from the authenticated user
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user details
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
    res.status(500).json({ message: "Server error" });
  }
};
