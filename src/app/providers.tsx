"use client";

import NavProvider from "@/context/nav-context";

type ProviderProps = {
  children: React.ReactNode;
};
const Providers = ({ children }: ProviderProps) => {
  return <NavProvider>{children}</NavProvider>;
};

export default Providers;
