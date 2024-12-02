import jwt from "jsonwebtoken";

/**
 * Generate a JSON Web Token
 * @param {Object} payload - Data to include in the token
 * @param {string} secret - Secret key for signing the token
 * @param {Object} options - Optional settings (e.g., expiresIn)
 * @returns {string} Generated token
 */
export const generateToken = (payload, secret, options = {}) =>
  jwt.sign(payload, secret, options);

/**
 * Verify a JSON Web Token
 * @param {string} token - Token to verify
 * @param {string} secret - Secret key used to sign the token
 * @returns {Object} Decoded token data
 */
export const verifyToken = (token, secret) => jwt.verify(token, secret);

/**
 * Decode a JSON Web Token without verification
 * @param {string} token - Token to decode
 * @returns {Object} Decoded token data
 */
export const decodeToken = jwt.decode;
