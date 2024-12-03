import { registerUser, loginUser } from "../services/authService.js";

// Register a new user
export const register = async (req, res) => {
  const { email, password, name, phone } = req.body;

  try {
    const user = await registerUser({ email, password, name, phone });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login user and generate JWT token
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { user, token } = await loginUser(email, password);

    res.status(200).json({
      message: "User logged in successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
      token,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
