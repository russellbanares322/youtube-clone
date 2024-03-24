"use client";

import { useState, createContext, useContext } from "react";

type NavContextProviderProps = {
  children: React.ReactNode;
};

type NavContextValues = {
  isNavExpanded: boolean;
  toggleNavbarVisibility: () => void;
} | null;

export const NavContext = createContext<NavContextValues>(null);

export const NavContextProvider = ({ children }: NavContextProviderProps) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNavbarVisibility = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <NavContext.Provider value={{ isNavExpanded, toggleNavbarVisibility }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => {
  const context = useContext(NavContext);

  if (!context) {
    throw new Error("useNavContext must be used within ");
  }
  return context;
};
