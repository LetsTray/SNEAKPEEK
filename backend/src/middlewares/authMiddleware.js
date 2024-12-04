import jwt from "jsonwebtoken";

// Middleware untuk autentikasi pengguna
export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      console.log("Token received:", token); // Menambahkan log

      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || "defaultsecret"
      );
      console.log("Decoded token:", decoded); // Menambahkan log untuk melihat decoded token

      req.user = {
        id: decoded.id,
        email: decoded.email,
        isAdmin: decoded.isAdmin,
      };

      next();
    } catch (error) {
      console.error("Token verification failed:", error); // Menambahkan log untuk error
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    console.log("No token provided"); // Menambahkan log untuk kasus tidak ada token
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

// Middleware untuk memeriksa apakah pengguna adalah admin
export const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next(); // Lanjutkan jika admin
  } else {
    res.status(403).json({ message: "Not authorized as an admin" }); // Jika bukan admin
  }
};
