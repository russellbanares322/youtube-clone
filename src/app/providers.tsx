"use client";

import NavContextProvider from "@/context/nav-context";

type ProviderProps = {
  children: React.ReactNode;
};
const Providers = ({ children }: ProviderProps) => {
  return <NavContextProvider>{children}</NavContextProvider>;
};

export default Providers;
