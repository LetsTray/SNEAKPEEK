// src/controllers/authController.js
import { registerUser, loginUser } from "../services/authService.js";

// Register a new user
export const register = async (req, res) => {
  try {
    const { email, password, name, phone } = req.body;

    // Ensure all required fields are provided
    if (!email || !password || !name || !phone) {
      return res
        .status(400)
        .json({
          message:
            "Please provide all required fields (email, password, name, phone).",
        });
    }

    const user = await registerUser({ email, password, name, phone });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone, // Include phone in response
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login user and generate JWT token
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const token = await loginUser(email, password);

    res.status(200).json({
      message: "User logged in successfully",
      token,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
