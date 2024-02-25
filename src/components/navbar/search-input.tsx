"use client";

import { isInputFilled } from "@/utils/isInputFilled";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { TfiClose } from "react-icons/tfi";

const SearchInput = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const isSearchInputValueFilled = isInputFilled(searchInputValue);

  const onSearchInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  return (
    <div className="flex items-center max-w-[600px] w-full border border-zinc-700 rounded-full relative">
      <input
        className="appearance-none bg-black w-full placeholder-zinc-500 text-white outline-none rounded-tl-full rounded-bl-full py-[9.5px] pl-3 pr-2 border border-gray h-full"
        placeholder="Search"
        onChange={onSearchInputValueChange}
        value={searchInputValue}
      />
      {isSearchInputValueFilled && (
        <TfiClose className="absolute top-2 right-20" size={22} />
      )}
      <button className="bg-gray h-full p-2 rounded-tr-full rounded-br-full w-20 flex items-center justify-center">
        <GoSearch size={23} />
      </button>
    </div>
  );
};

export default SearchInput;
