// authService.js
const API_URL = "http://localhost:5000/api/auth"; // URL API untuk autentikasi

/**
 * Fungsi untuk login pengguna.
 * @param {Object} credentials - Objek dengan email dan password.
 * @returns {Promise<Object>} Respons dari server.
 */
export async function loginUser(credentials) {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error("Login failed. Please check your email or password.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

/**
 * Fungsi untuk mendaftarkan pengguna baru.
 * @param {Object} userData - Objek dengan data pengguna.
 * @returns {Promise<Object>} Respons dari server.
 */
export async function signupUser(userData) {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Signup failed. Please check your information.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

/**
 * Fungsi untuk logout pengguna.
 * @returns {Promise<void>} Tidak ada nilai yang dikembalikan jika berhasil.
 */
export async function logoutUser() {
  try {
    const response = await fetch(`${API_URL}/logout`, {
      method: "POST",
      credentials: "include", // Sertakan cookie jika menggunakan autentikasi berbasis sesi
    });

    if (!response.ok) {
      throw new Error("Logout failed.");
    }
  } catch (error) {
    throw error;
  }
}

/**
 * Fungsi untuk memeriksa status autentikasi.
 * @returns {Promise<Object>} Data status autentikasi.
 */
export async function checkAuth() {
  try {
    const response = await fetch(`${API_URL}/status`, {
      method: "GET",
      credentials: "include", // Sertakan cookie untuk autentikasi berbasis sesi
    });

    if (!response.ok) {
      throw new Error("Failed to verify authentication.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

/**
 * Fungsi untuk mengirim permintaan reset password.
 * @param {string} email - Email pengguna untuk reset password.
 * @returns {Promise<Object>} Respons dari server.
 */
export async function sendPasswordResetRequest(email) {
  try {
    const response = await fetch(`${API_URL}/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error("Failed to send password reset request.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

/**
 * Fungsi untuk mereset password dengan token.
 * @param {Object} resetData - Objek dengan token dan password baru.
 * @returns {Promise<Object>} Respons dari server.
 */
export async function resetPassword(resetData) {
  try {
    const response = await fetch(`${API_URL}/reset-password/confirm`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resetData),
    });

    if (!response.ok) {
      throw new Error("Password reset failed.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
