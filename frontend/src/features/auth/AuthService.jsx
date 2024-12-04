{
  /*
    // authService.js
const API_URL = 'https://your-api-url.com/api'; // Replace with your API URL

// Function to log in a user
export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    // Store the token or user data as needed
    localStorage.setItem('token', data.token); // Example: storing a token
    return data.user; // Return user data
  } catch (error) {
    console.error('Error during login:', error);
    throw error; // Rethrow the error for handling in the component
  }
};

// Function to log out a user
export const logout = () => {
  localStorage.removeItem('token'); // Remove token from local storage
  // Additional logout logic can go here
};

// Function to register a new user
export const register = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    const data = await response.json();
    return data.user; // Return user data
  } catch (error) {
    console.error('Error during registration:', error);
    throw error; // Rethrow the error for handling in the component
  }
};

// Function to check if the user is authenticated
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token; // Return true if token exists, false otherwise
};

// Function to get the current user (optional)
export const getCurrentUser  = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  // Decode the token or fetch user data from API if needed
  // This is a simple example; you may want to implement JWT decoding or another method
  return JSON.parse(atob(token.split('.')[1])); // Decode JWT (if using JWT)
};

    */
}

{
  /*
    import { login as loginService, logout as logoutService, register as registerService } from './authService';

// Inside AuthProvider component
const login = async (email, password) => {
  try {
    const userData = await loginService(email, password);
    setUser (userData); // Set user data in context
  } catch (error) {
    console.error('Login error:', error);
    // Handle error (e.g., set an error state)
  }
};

const logout = () => {
  logoutService(); // Call the logout service
  setUser (null); // Clear user data in context
};

const register = async (email, password) => {
  try {
    const userData = await registerService(email, password);
    setUser (userData); // Set user data in context
    
    */
}