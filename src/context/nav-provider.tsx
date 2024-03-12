"use client";

import { useState } from "react";
import { createContext } from "vm";

type NavProviderProps = {
  children: React.ReactNode;
};

const NavContext = createContext();

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
