import jwt from "jsonwebtoken";

// Function to generate JWT
export const generateToken = (
  payload,
  secret,
  options = { expiresIn: "1h" }
) => {
  return jwt.sign(payload, secret, options);
};

// Function to verify JWT
export const verifyToken = (token, secret) => {
  try {
    return jwt.verify(token, secret); // Verify the token using the provided secret
  } catch (error) {
    // Handle different errors that can occur during verification
    if (error.name === "TokenExpiredError") {
      throw new Error("Token expired");
    }
    throw new Error("Invalid or expired token");
  }
};

// Function to decode JWT without verifying it
export const decodeToken = (token) => {
  return jwt.decode(token); // Decode the token payload without verifying
};
