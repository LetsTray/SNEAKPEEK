import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Ambil token dari header Authorization
      token = req.headers.authorization.split(" ")[1];

      // Verifikasi token
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || "defaultsecret"
      );

      // Pastikan decoded mengandung informasi yang tepat
      console.log("Decoded token:", decoded);

      // Tambahkan informasi pengguna ke dalam req.user
      req.user = {
        id: decoded.userId, // Pastikan userId diambil dari decoded
        email: decoded.email,
        isAdmin: decoded.isAdmin,
      };

      console.log("Authenticated User:", req.user); // Debug log

      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

// Middleware to check if user is an admin
export const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next(); // Proceed to the next middleware or controller if user is admin
  } else {
    res.status(403).json({ message: "Not authorized as an admin" }); // Forbidden if not admin
  }
};
