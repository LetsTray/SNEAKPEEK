import { body, validationResult } from "express-validator";

export const validateRegister = [
  body("name").not().isEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Enter a valid email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  body("password").custom((value, { req }) => {
    if (value !== req.body.confirmPassword) {
      throw new Error("Passwords do not match");
    }
    return true;
  }),
];

export const validateLogin = [
  body("email").isEmail().withMessage("Enter a valid email"),
  body("password").not().isEmpty().withMessage("Password is required"),
];

export const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });
  next();
};
