import jwt from "jsonwebtoken";

// Middleware untuk autentikasi pengguna
export const protect = async (req, res, next) => {
  let token;

  // Periksa apakah ada Authorization header dengan Bearer token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Ambil token dari header Authorization
      token = req.headers.authorization.split(" ")[1];

      // Verifikasi token menggunakan secret key
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || "defaultsecret"
      );

      // Log informasi dari decoded token untuk debugging
      console.log("Decoded token:", decoded);

      // Menambahkan informasi pengguna ke dalam req.user
      req.user = {
        id: decoded.userId, // Menggunakan userId yang ada dalam decoded
        email: decoded.email,
        isAdmin: decoded.isAdmin,
      };

      console.log("Authenticated User:", req.user); // Debug log

      next(); // Lanjutkan ke route handler atau middleware berikutnya
    } catch (error) {
      console.error("Token verification failed:", error);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    // Jika tidak ada token
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

// Middleware untuk memeriksa apakah pengguna adalah admin
export const admin = (req, res, next) => {
  // Cek apakah pengguna terautentikasi dan apakah mereka adalah admin
  if (req.user && req.user.isAdmin) {
    next(); // Lanjutkan ke route handler berikutnya jika admin
  } else {
    res.status(403).json({ message: "Not authorized as an admin" }); // Jika bukan admin
  }
};
