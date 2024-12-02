import jwt from "jsonwebtoken";

/**
 * Generate a JSON Web Token
 * @param {Object} payload - Data to include in the token
 * @param {string} secret - Secret key for signing the token
 * @param {Object} options - Optional settings (e.g., expiresIn)
 * @returns {string} Generated token
 */
export const generateToken = (payload, secret, options = {}) => {
  return jwt.sign(payload, secret, options);
};

/**
 * Verify a JSON Web Token
 * @param {string} token - Token to verify
 * @param {string} secret - Secret key used to sign the token
 * @returns {Object} Decoded token data
 * @throws Will throw an error if the token is invalid or expired
 */
export const verifyToken = (token, secret) => {
  return jwt.verify(token, secret);
};

/**
 * Decode a JSON Web Token without verification
 * @param {string} token - Token to decode
 * @returns {Object} Decoded token data
 */
export const decodeToken = (token) => {
  return jwt.decode(token);
};
