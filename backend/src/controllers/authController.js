import { registerUser, loginUser } from "../services/authService.js";

// Register a new user
export const register = async (req, res) => {
  const { email, password, name, phone } = req.body;

  // Validasi input
  if (!email || !password || !name || !phone) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Validasi format email
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Please provide a valid email" });
  }

  try {
    // Panggil service untuk mendaftarkan pengguna baru
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
    // Penanganan error spesifik
    if (error.message === "Email already exists") {
      return res.status(400).json({ message: "Email already exists" });
    }
    res.status(500).json({ message: "Internal server error" });
  }
};

// Login user and generate JWT token
export const login = async (req, res) => {
  const { email, password } = req.body;

  // Validasi input
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Panggil service untuk login
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
    // Penanganan error spesifik
    if (
      error.message === "User not found" ||
      error.message === "Invalid credentials"
    ) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    res.status(500).json({ message: "Internal server error" });
  }
};
