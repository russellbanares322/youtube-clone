import { TbMenu2 } from "react-icons/tb";

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
          <p className="text-xs">YouTube</p>
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
