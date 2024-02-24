import React from "react";
import { GoSearch } from "react-icons/go";

const SearchInput = () => {
  return (
    <div className="flex items-center max-w-[600px] w-full border border-zinc-700 rounded-full">
      <input
        className="appearance-none bg-black w-full placeholder-zinc-500 text-white outline-none rounded-tl-full rounded-bl-full py-[9.5px] px-2 border border-gray h-full"
        placeholder="Search"
      />
      <button className="bg-gray h-full p-2 rounded-tr-full rounded-br-full w-20 flex items-center justify-center">
        <GoSearch size={23} />
      </button>
    </div>
  );
};

export default SearchInput;
