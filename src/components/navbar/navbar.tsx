import ExtraButtons from "./extra-buttons";
import Menu from "./menu";
import SearchInput from "./search-input";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="page-container mx-auto flex justify-between items-center py-2">
        {/* Menu */}
        <Menu />
        {/* Search input */}
        <SearchInput />
        {/* Extra buttons */}
        <ExtraButtons />
      </div>
    </nav>
  );
};

export default Navbar;
