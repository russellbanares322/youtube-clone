import { secondItems } from "@/data/sidebar-items";
import React from "react";

const SecondItemsDisplay = () => {
  const isLoggedIn = true;

  return (
    <div className="flex flex-col gap-5 text-[0.93rem]">
      {secondItems
        .filter((data) => {
          // For conditionally showing sidebar items depending on user's authentication
          const showAllItems =
            data.needsAuthentication || !data.needsAuthentication;
          return isLoggedIn ? showAllItems : !data.needsAuthentication;
        })
        .map((item) => {
          const isItemForUserChannel = item.title === "Your channel";
          const renderUserChannelText = isLoggedIn ? "You" : "Your channel";
          return (
            <p className="flex items-center gap-6 text-sm" key={item.title}>
              {item.icon}{" "}
              {isItemForUserChannel ? renderUserChannelText : item.title}
            </p>
          );
        })}
    </div>
  );
};

export default SecondItemsDisplay;
