import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/**
 * Registers a new user
 * @param {Object} userData - User data (email, password, name)
 * @returns {Object} - Registered user
 */
export const registerUser = async ({ email, password, name }) => {
  if (await User.findOne({ email })) {
    throw new Error("Email already in use");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  return User.create({ email, password: hashedPassword, name });
};

/**
 * Logs in a user
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {string} - JWT token
 */
export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid credentials");
  }

  return jwt.sign(
    { userId: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );
};

/**
 * Verifies JWT token
 * @param {string} token - JWT token
 * @returns {Object} - Decoded token data
 */
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    throw new Error("Invalid or expired token");
  }
};
