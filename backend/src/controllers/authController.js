import {
  registerUserService,
  loginUserService,
} from "../services/authService.js";

// Controller untuk registrasi pengguna
export const registerUserController = async (req, res) => {
  const { email, password, name, phone } = req.body;

  if (!email || !password || !name || !phone) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Please provide a valid email" });
  }

  try {
    const user = await registerUserService({ email, password, name, phone });
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
    if (error.message === "Email already exists") {
      return res.status(400).json({ message: "Email already exists" });
    }
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller untuk login pengguna
export const loginUserController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const { user, token } = await loginUserService(email, password);
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
    if (
      error.message === "User not found" ||
      error.message === "Invalid credentials"
    ) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    res.status(500).json({ message: "Internal server error" });
  }
};
