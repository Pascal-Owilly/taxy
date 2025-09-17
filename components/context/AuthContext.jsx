import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const [phone, setPhone] = useState(null); // store phone for verifyOtp

  const selectRole = (selectedRole) => {
    setRole(selectedRole);
    return Promise.resolve(true);
  };

  const login = (inputPhone) => {
    setPhone(inputPhone); // save the phone number here
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 1000); // simulate sending OTP
    });
  };

  const verifyOtp = (otp) => {
    // Always succeed, no OTP check, just use stored phone and role
    return new Promise((resolve) => {
      setTimeout(() => {
        setUser({ phone, role });
        setIsAuthenticated(true);
        resolve(true);
      }, 1000);
    });
  };

  const completeProfile = (profile) => {
    setUser({ ...user, ...profile, isProfileComplete: true });
    return Promise.resolve(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setRole(null);
    setPhone(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        isAuthenticated,
        selectRole,
        login,
        verifyOtp,
        completeProfile,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
