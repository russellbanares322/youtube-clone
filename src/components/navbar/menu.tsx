"use client";

import { TbMenu2 } from "react-icons/tb";
import { BsYoutube } from "react-icons/bs";
import { useNavContext } from "@/context/nav-context";

const Menu = () => {
  const { toggleNavbarVisibility } = useNavContext();
  return (
    <div className="flex items-center gap-4">
      <TbMenu2
        onClick={toggleNavbarVisibility}
        className="cursor-pointer icon-hover p-2"
        size={40}
      />
      <div className="flex items-center gap-[2px] relative cursor-pointer">
        <BsYoutube className="fill-red" />
        <p className="text-xl tracking-tighter font-semibold font-mono">
          YouTube
        </p>
        <span className="absolute top-0 -right-5 text-[11px] text-zinc-400">
          PH
        </span>
      </div>
    </div>
  );
};

export default Menu;
