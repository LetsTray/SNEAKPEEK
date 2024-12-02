import bcrypt from "bcryptjs";

/**
 * Hash a plain text password
 * @param {string} password - The password to hash
 * @returns {string} - The hashed password
 */
export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10); // Generate salt with 10 rounds
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

/**
 * Compare a plain text password with a hashed password
 * @param {string} password - The plain text password
 * @param {string} hashedPassword - The hashed password from database
 * @returns {boolean} - Returns true if the passwords match, false otherwise
 */
export const comparePassword = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};
