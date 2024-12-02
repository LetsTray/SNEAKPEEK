import validator from "validator";

/**
 * Validates if the email is valid
 * @param {string} email - The email to validate
 * @returns {boolean} - Returns true if the email is valid, false otherwise
 */
export const validateEmail = (email) => {
  return validator.isEmail(email);
};

/**
 * Validates if the password is strong enough
 * - Minimum 8 characters, at least 1 letter, 1 number, and 1 special character
 * @param {string} password - The password to validate
 * @returns {boolean} - Returns true if the password is strong, false otherwise
 */
export const validatePassword = (password) => {
  // Password must be at least 8 characters long, contain 1 letter, 1 number, and 1 special character
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  return passwordRegex.test(password);
};

/**
 * Validates if the phone number is valid (based on format or country)
 * @param {string} phone - The phone number to validate
 * @returns {boolean} - Returns true if the phone number is valid, false otherwise
 */
export const validatePhone = (phone) => {
  // Validate phone number using the phone validation method from validator
  return validator.isMobilePhone(phone, "any", { strictMode: false });
};

/**
 * Validates if a string is not empty (useful for names, addresses, etc.)
 * @param {string} value - The value to check
 * @returns {boolean} - Returns true if not empty, false otherwise
 */
export const validateNotEmpty = (value) => {
  return !validator.isEmpty(value);
};

/**
 * Validates if the input is a valid string (not a number or other types)
 * @param {string} value - The value to validate
 * @returns {boolean} - Returns true if the value is a valid string, false otherwise
 */
export const validateString = (value) => {
  return typeof value === "string" && value.trim().length > 0;
};
