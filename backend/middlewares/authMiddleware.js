import jwt from "jsonwebtoken";
import User from "../models/User.js"; // Pastikan path User benar

export const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

export const protect = async (req, res, next) => {
  let token;

  // Cek apakah ada Authorization header dengan token Bearer
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1]; // Ambil token dari header
  }

  console.log("Received token:", token); // Debug log untuk token yang diterima

  if (!token)
    return res.status(401).json({ message: "No token, authorization denied" });

  try {
    // Verifikasi token menggunakan JWT secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded); // Debug log untuk token yang sudah didekode

    // Temukan pengguna berdasarkan id yang ada di token
    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) {
      return res.status(404).json({ message: "User not found" });
    }

    next(); // Melanjutkan ke handler berikutnya
  } catch (error) {
    console.error("Token verification error:", error); // Log error untuk debugging lebih lanjut

    // Memberikan pesan yang lebih spesifik tentang error
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token has expired" });
    }

    res.status(401).json({ message: "Token is not valid" });
  }
};
