"use client";

import { filterOptionsData } from "@/data/filter-options-data";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const BadgeFilter = () => {
  const [selectedFilterOption, setSelectedFilterOption] = useState<string[]>([
    "Everything",
  ]);

  const isOptionSelected = (filterOption: string) => {
    const isFilterOptionSelected = selectedFilterOption.includes(filterOption);

    if (isFilterOptionSelected) {
      return true;
    }

    return false;
  };

  const handleSelectFilterOption = (filterOption: string) => {
    if (isOptionSelected(filterOption)) {
      const filteredSelectedFilterOption = selectedFilterOption.filter(
        (option) => option !== filterOption
      );
      setSelectedFilterOption(filteredSelectedFilterOption);
    } else {
      setSelectedFilterOption([...selectedFilterOption, filterOption]);
    }
  };

  return (
    <div className="flex items-center gap-2 w-full mb-5">
      {filterOptionsData.map((filterOption) => (
        <p
          onClick={() => handleSelectFilterOption(filterOption)}
          key={filterOption}
          className={twMerge(
            isOptionSelected(filterOption)
              ? "bg-white text-black"
              : "bg-gray text-white",
            "text-sm py-2 px-3 w-max rounded-md font-semibold cursor-pointer"
          )}
        >
          {filterOption}
        </p>
      ))}
    </div>
  );
};

export default BadgeFilter;
