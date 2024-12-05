import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkAuth, loginUser, logoutUser } from "../../services/authService"; // Pastikan path ini benar

// Membuat konteks autentikasi
const AuthContext = createContext();

// Provider untuk AuthContext
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fungsi untuk login
  const login = async (credentials) => {
    try {
      const loggedInUser = await loginUser(credentials);
      setUser(loggedInUser);
      navigate("/dashboard"); // Mengarahkan ke halaman dashboard setelah login
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  // Fungsi untuk logout
  const logout = () => {
    logoutUser();
    setUser(null);
    navigate("/login"); // Mengarahkan ke halaman login setelah logout
  };

  // Mengecek status autentikasi pengguna saat aplikasi dimulai
  useEffect(() => {
    const authenticateUser = async () => {
      const currentUser = await checkAuth();
      setUser(currentUser);
      setLoading(false);
    };
    authenticateUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Bisa mengganti dengan komponen loading
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook untuk menggunakan AuthContext
export const useAuth = () => {
  return React.useContext(AuthContext);
};
