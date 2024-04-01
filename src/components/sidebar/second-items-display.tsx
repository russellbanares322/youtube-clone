import { secondItems } from "@/data/sidebar-items";
import { TbChevronRight } from "react-icons/tb";
import { useUser } from "@clerk/nextjs";
import { twMerge } from "tailwind-merge";
import { isSidebarItemActive } from "@/utils/isSidebarItemActive";

const SecondItemsDisplay = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="flex flex-col text-[0.93rem]">
      {isSignedIn && (
        <p className="flex items-center gap-3 text-base cursor-pointer">
          You <TbChevronRight size={23} />
        </p>
      )}
      {secondItems
        .filter((data) => {
          // For conditionally showing sidebar items depending on user's authentication
          const showAllItems =
            data.needsAuthentication || !data.needsAuthentication;
          return isSignedIn ? showAllItems : !data.needsAuthentication;
        })
        .map((item) => {
          const isItemForUserChannel = item.title === "Your channel";
          const renderUserChannelText = isSignedIn ? "Your channel" : "You";
          return (
            <p
              className={twMerge(
                isSidebarItemActive(item.pathName) ? "active-sidebar-item" : "",
                "sidebar-item gap-6"
              )}
              key={item.title}
            >
              {item.icon}{" "}
              {isItemForUserChannel ? renderUserChannelText : item.title}
            </p>
          );
        })}
    </div>
  );
};

export default SecondItemsDisplay;
