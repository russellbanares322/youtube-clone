import { secondItems } from "@/data/sidebar-items";
import { TbChevronRight } from "react-icons/tb";
import React from "react";

type SecondItemsDisplayProps = {
  isLoggedIn: boolean;
};

const SecondItemsDisplay = ({ isLoggedIn }: SecondItemsDisplayProps) => {
  return (
    <div className="flex flex-col gap-4 text-[0.93rem]">
      {isLoggedIn && (
        <p className="flex items-center gap-3 text-base cursor-pointer">
          You <TbChevronRight size={23} />
        </p>
      )}
      {secondItems
        .filter((data) => {
          // For conditionally showing sidebar items depending on user's authentication
          const showAllItems =
            data.needsAuthentication || !data.needsAuthentication;
          return isLoggedIn ? showAllItems : !data.needsAuthentication;
        })
        .map((item) => {
          const isItemForUserChannel = item.title === "Your channel";
          const renderUserChannelText = isLoggedIn ? "Your channel" : "You";
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
