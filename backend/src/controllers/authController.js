import express from "express";
const { Request, Response } = express;
import { registerUser, loginUser } from "../services/authService.js";

// Register a new user
export const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const user = await registerUser({ email, password, name });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
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
