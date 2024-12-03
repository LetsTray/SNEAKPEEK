import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt.js";
import User from "../models/user.js";

// Register a new user
export const registerUser = async (userData) => {
  const { email, password, name, phone } = userData;

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    email,
    password: hashedPassword,
    name,
    phone,
  });
  await newUser.save();

  return newUser;
};

// Login user and return JWT
export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = generateToken({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return { user, token };
};
