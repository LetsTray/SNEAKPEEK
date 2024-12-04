import User from "../models/User.js";

// Service untuk mengambil pengguna berdasarkan ID
export const fetchUserByIdService = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw new Error(error.message || "Error fetching user by ID");
  }
};

// Service untuk memperbarui profil pengguna
export const updateUserProfileService = async (
  userId,
  { name, email, phone }
) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    // Perbarui hanya field yang diberikan
    user.name = name || user.name;
    user.email = email || user.email;
    user.phone = phone || user.phone;

    await user.save();
    return user;
  } catch (error) {
    throw new Error(error.message || "Error updating user profile");
  }
};
