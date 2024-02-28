import { firstItems } from "@/data/sidebar-items";
import React from "react";

const FirstItemsDisplay = () => {
  return (
    <div className="flex flex-col gap-5">
      {firstItems.map((item) => (
        <p className="flex items-center gap-6 text-[0.93rem]" key={item.title}>
          {item.icon} {item.title}
        </p>
      ))}
    </div>
  );
};

export default FirstItemsDisplay;
