"use client";

import { useNavContext } from "@/context/nav-context";
import { firstItems } from "@/data/sidebar-items";
import React from "react";
import { twMerge } from "tailwind-merge";

const FirstItemsDisplay = () => {
  const { isNavExpanded } = useNavContext();

  return (
    <div
      className={twMerge(isNavExpanded ? "gap-4" : "gap-6", "flex flex-col")}
    >
      {firstItems.map((item) => (
        <p
          className={twMerge(
            isNavExpanded
              ? "flex-row gap-6 text-[0.93rem]"
              : "flex-col gap-1 text-[0.60rem]",
            "flex items-center cursor-pointer"
          )}
          key={item.title}
        >
          {item.icon} {item.title}
        </p>
      ))}
    </div>
  );
};

export default FirstItemsDisplay;
