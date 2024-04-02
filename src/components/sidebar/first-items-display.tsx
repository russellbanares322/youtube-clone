import { useNavContext } from "@/context/nav-context";
import { firstItems } from "@/data/sidebar-items";
import { isSidebarItemActive } from "@/utils/isSidebarItemActive";
import React from "react";
import { twMerge } from "tailwind-merge";

const FirstItemsDisplay = () => {
  const { isNavExpanded } = useNavContext();

  return (
    <div className={twMerge(isNavExpanded ? "" : "gap-6", "flex flex-col")}>
      {firstItems.map((item) => (
        <p
          className={twMerge(
            isNavExpanded
              ? "flex-row gap-6 text-[0.93rem]"
              : "flex-col gap-1 text-[0.60rem]",
            isNavExpanded && isSidebarItemActive(item.pathName)
              ? "active-sidebar-item"
              : "",
            "sidebar-item"
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
