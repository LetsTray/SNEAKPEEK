import { generateToken } from "../utils/jwt.js";
import User from "../models/User.js";

// Service untuk registrasi pengguna
export const registerUserService = async (userData) => {
  const { email, password, name, phone } = userData;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("Email already exists");
  }

  const newUser = new User({
    email,
    password,
    name,
    phone,
  });

  await newUser.save();

  return newUser;
};

// Service untuk login pengguna
export const loginUserService = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const isMatch = await user.comparePassword(password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = generateToken(
    { userId: user._id, email: user.email, isAdmin: user.isAdmin },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return { user, token };
};
