import bcrypt from "bcryptjs";

/**
 * Hash a plain text password
 * @param {string} password - The password to hash
 * @returns {string} - The hashed password
 */
export const hashPassword = (password) => bcrypt.hash(password, 10);

/**
 * Compare a plain text password with a hashed password
 * @param {string} password - The plain text password
 * @param {string} hashedPassword - The hashed password from the database
 * @returns {boolean} - Returns true if the passwords match, false otherwise
 */
export const comparePassword = (password, hashedPassword) =>
  bcrypt.compare(password, hashedPassword);
