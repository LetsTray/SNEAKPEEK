{/*
    import React, { createContext, useState, useEffect } from 'react';

// Create the Auth Context
export const AuthContext = createContext();

// Create a provider component
const AuthProvider = ({ children }) => {
  const [user, setUser ] = useState(null); // User state
  const [loading, setLoading] = useState(true); // Loading state

  // Simulate an authentication check (e.g., fetching user data)
  useEffect(() => {
    const fetchUser  = async () => {
      // Simulate an API call to check user authentication
      const userData = await new Promise((resolve) => {
        setTimeout(() => {
          // Simulate user data
          resolve({ id: 1, name: 'John Doe' });
        }, 1000);
      });

      setUser (userData); // Set user data
      setLoading(false); // Set loading to false
    };

    fetchUser ();
  }, []);

  const login = (userData) => {
    setUser (userData); // Set user data on login
  };

  const logout = () => {
    setUser (null); // Clear user data on logout
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {loading ? <div>Loading...</div> : children} 
    </AuthContext.Provider>
  );
};

export default AuthProvider;
    
    */}