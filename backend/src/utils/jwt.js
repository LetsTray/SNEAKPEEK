import jwt from "jsonwebtoken";

// Fungsi untuk membuat JWT
export const generateToken = (
  payload,
  secret,
  options = { expiresIn: "1h" }
) => {
  return jwt.sign(payload, secret, options);
};

// Fungsi untuk memverifikasi JWT
export const verifyToken = (token, secret) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      throw new Error("Token expired");
    }
    throw new Error("Invalid or expired token");
  }
};

// Fungsi untuk mendekode JWT tanpa memverifikasi
export const decodeToken = (token) => {
  return jwt.decode(token);
};
