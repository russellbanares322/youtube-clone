import { useNavContext } from "@/context/nav-context";
import { fourthItems } from "@/data/sidebar-items";
import { isSidebarItemActive } from "@/utils/isSidebarItemActive";
import { twMerge } from "tailwind-merge";

const FourthItemsDisplay = () => {
  const { isNavExpanded } = useNavContext();
  return (
    <div className="flex flex-col text-[0.93rem]">
      {fourthItems.map((item) => (
        <p
          className={twMerge(
            isNavExpanded && isSidebarItemActive(item.pathName)
              ? "active-sidebar-item"
              : "",
            "sidebar-item gap-6"
          )}
          key={item.title}
        >
          {item.icon} {item.title}
        </p>
      ))}
    </div>
  );
};

export default FourthItemsDisplay;
