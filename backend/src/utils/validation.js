import validator from "validator";

// Validasi email
export const validateEmail = (email) => {
  return validator.isEmail(email);
};

// Validasi password (minimal 8 karakter, setidaknya 1 huruf, 1 angka, dan 1 karakter khusus)
export const validatePassword = (password) => {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
    password
  );
};

// Validasi nomor telepon
export const validatePhone = (phone) => {
  return validator.isMobilePhone(phone, "any", { strictMode: false });
};

// Validasi agar nilai tidak kosong (berguna untuk nama, alamat, dll)
export const validateNotEmpty = (value) => {
  return !validator.isEmpty(value);
};

// Validasi agar nilai merupakan string yang valid
export const validateString = (value) => {
  return typeof value === "string" && value.trim().length > 0;
};
