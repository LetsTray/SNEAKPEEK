import expressAsyncHandler from "express-async-handler";
import User from "../models/User.js";
import { generateToken } from "../config/jwtConfig.js";

export const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists)
    return res.status(400).json({ message: "User already exists" });

  const user = await User.create({ name, email, password });
  res.status(201).json({
    id: user._id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id),
  });
});

export const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
});

export const getMe = expressAsyncHandler(async (req, res) => {
  const user = req.user; // Authenticated user
  if (!user) return res.status(401).json({ message: "User not found" });
  res.status(200).json({ id: user._id, name: user.name, email: user.email });
});
