"use client";

import { isInputFilled } from "@/utils/isInputFilled";
import { useRef, useState } from "react";
import { GoSearch } from "react-icons/go";
import { TfiClose } from "react-icons/tfi";
import { LiaKeyboard } from "react-icons/lia";
import VirtualKeyboard from "./virtual-keyboard";

const SearchInput = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [showVirtualKeyboard, setShowVirtualKeyboard] = useState(false);
  const isSearchInputValueFilled = isInputFilled(searchInputValue);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSearchInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  const onVirtualKeyboardChange = (input: string) => {
    setSearchInputValue(input);
  };

  const clearSearchInput = () => {
    setSearchInputValue("");
  };

  const toggleVirtualKeyboardVisibility = () => {
    setShowVirtualKeyboard(!showVirtualKeyboard);
    inputRef.current?.focus();
  };

  return (
    <div className="flex items-center max-w-[600px] w-full border border-zinc-700 rounded-full relative">
      <input
        ref={inputRef}
        className="appearance-none bg-black w-full placeholder-zinc-500 text-white outline-none rounded-tl-full rounded-bl-full py-[9.5px] pl-3 pr-2 border border-gray h-full"
        placeholder="Search"
        onChange={onSearchInputValueChange}
        value={searchInputValue}
      />
      {isSearchInputValueFilled && (
        <TfiClose
          onClick={clearSearchInput}
          className="absolute top-2 right-20 cursor-pointer"
          size={22}
        />
      )}
      {!isSearchInputValueFilled && (
        <LiaKeyboard
          onClick={toggleVirtualKeyboardVisibility}
          className="absolute top-2 right-20 cursor-pointer"
          size={22}
        />
      )}
      <button className="bg-gray h-full p-2 rounded-tr-full rounded-br-full w-20 flex items-center justify-center">
        <GoSearch size={23} />
      </button>
      {showVirtualKeyboard && (
        <div className="absolute top-0 right-0">
          <VirtualKeyboard onVirtualKeyboardChange={onVirtualKeyboardChange} />
        </div>
      )}
    </div>
  );
};

export default SearchInput;
