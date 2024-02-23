import { TbMenu2 } from "react-icons/tb";
import { BsYoutube } from "react-icons/bs";
import { GoSearch } from "react-icons/go";

const Navbar = () => {
  return (
    <nav>
      <div className="page-container mx-auto flex justify-between items-center py-2">
        {/* Menu */}
        <div className="flex items-center gap-4">
          <TbMenu2
            className="cursor-pointer hover:bg-gray rounded-full p-2"
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
        {/* Search bar */}
        <div className="flex items-center max-w-[600px] w-full border border-zinc-700 rounded-full">
          <input
            className="appearance-none bg-black w-full text-white outline-none rounded-tl-full rounded-bl-full py-[9.5px] px-2 border border-gray h-full"
            placeholder="Search"
          />
          <button className="bg-gray h-full p-2 rounded-tr-full rounded-br-full w-20 flex items-center justify-center">
            <GoSearch size={23} />
          </button>
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
