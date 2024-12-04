import {
  fetchUserByIdService,
  updateUserProfileService,
} from "../services/userService.js";

// Fungsi untuk menangani error
const handleError = (res, message, error = null) => {
  console.error(message, error?.message || "");
  res.status(500).json({ message, error: error ? error.message : undefined });
};

// Controller untuk mendapatkan profil pengguna yang sedang login
export const fetchUserProfileController = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const user = await fetchUserByIdService(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    });
  } catch (error) {
    handleError(res, "Error fetching user profile", error);
  }
};

// Controller untuk memperbarui profil pengguna
export const updateUserProfileController = async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name && !email && !phone) {
    return res.status(400).json({ message: "No data provided to update" });
  }

  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const updatedUser = await updateUserProfileService(req.user.id, {
      name,
      email,
      phone,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      phone: updatedUser.phone,
    });
  } catch (error) {
    handleError(res, "Error updating user profile", error);
  }
};
