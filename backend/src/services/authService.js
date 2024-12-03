import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt.js";
import User from "../models/user.js";

// Register a new user
export const registerUser = async (userData) => {
  const { email, password, name, phone } = userData;

  // Cek jika email sudah terdaftar
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    // Jika pengguna sudah ada, lempar error
    throw new Error("Email already exists");
  }

  // Membuat pengguna baru
  const newUser = new User({
    email,
    password, // Jangan di-hash di sini, karena akan di-hash di model dengan pre-save hook
    name,
    phone,
  });

  // Simpan pengguna baru
  await newUser.save();

  // Harus ada return dalam fungsi ini
  return newUser; // Pastikan return berada dalam konteks fungsi
};

// Login user and return JWT
export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const isMatch = await user.comparePassword(password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = generateToken({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return { user, token };
};
