import { secondItems } from "@/data/sidebar-items";
import FirstItemsDisplay from "./first-items-display";
import SecondItemsDisplay from "./second-items-display";
import SignInBanner from "./sign-in-banner";
import ThirdItemsDisplay from "./third-items-display";
import FourthItemsDisplay from "./fourth-items-display";
import { useContext } from "react";
import { useNavContext } from "@/context/nav-context";
import { twMerge } from "tailwind-merge";

const Sidebar = () => {
  const isLoggedIn = true;
  const styledHr = <hr className="text-zinc-700 my-5" />;
  const { isNavExpanded } = useNavContext();

  return (
    <div
      className={twMerge(
        isNavExpanded ? "w-auto" : "w-16",
        "pb-24 hover:overflow-y-scroll duration-100 ease-in-out sticky top-0"
      )}
    >
      <FirstItemsDisplay />
      {styledHr}
      <SecondItemsDisplay isLoggedIn={isLoggedIn} />
      {!isLoggedIn && (
        <>
          {styledHr}
          <SignInBanner />
        </>
      )}
      {isLoggedIn && (
        <>
          {styledHr}
          <ThirdItemsDisplay />
        </>
      )}
      {styledHr}
      <FourthItemsDisplay />
    </div>
  );
};

export default Sidebar;
