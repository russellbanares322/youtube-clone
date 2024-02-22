import { TbMenu2 } from "react-icons/tb";
import { BsYoutube } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center py-1">
        {/* Menu */}
        <div className="flex items-center gap-4">
          <TbMenu2
            className="cursor-pointer hover:bg-gray rounded-full p-1"
            size={22}
          />
          <div className="flex items-center gap-[2px] relative cursor-pointer">
            <BsYoutube className="fill-red" />
            <p className="text-xs tracking-tighter font-semibold font-mono">
              YouTube
            </p>
            <span className="absolute top-0 -right-3 text-[6px] text-zinc-400">
              PH
            </span>
          </div>
        </div>
        {/* Search bar */}
        <div>
          <p>Input</p>
        </div>
        {/* Extra buttons */}
        <div>
          <p>Buttons</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
