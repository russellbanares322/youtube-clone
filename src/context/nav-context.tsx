"use client";

import { useState, createContext } from "react";

type NavProviderProps = {
  children: React.ReactNode;
};

type NavContextValues = {
  isNavExpanded: boolean;
  toggleNavbarVisibility: () => void;
} | null;

const NavContext = createContext<NavContextValues>(null);

const NavProvider = ({ children }: NavProviderProps) => {
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

export default NavProvider;
