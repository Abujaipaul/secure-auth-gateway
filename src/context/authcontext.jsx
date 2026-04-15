import { createContext, useState } from 'react';

// 1. Create the Context
export const AuthContext = createContext();

// 2. Create the Provider
export function AuthProvider({ children }) {
  
  // THE UPGRADE: Instead of starting at 'false', we check the browser's memory vault first!
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('secureVaultStatus') === 'unlocked'
  );

  function login() {
    setIsAuthenticated(true);
    // Drop a token into the browser's memory
    localStorage.setItem('secureVaultStatus', 'unlocked'); 
    console.log("Vault Unlocked. Token saved.");
  }

  function logout() {
    setIsAuthenticated(false);
    // Destroy the token in the browser's memory
    localStorage.removeItem('secureVaultStatus'); 
    console.log("Vault Locked. Token destroyed.");
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

