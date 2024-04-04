"use client";

import FirstItemsDisplay from "./first-items-display";
import SecondItemsDisplay from "./second-items-display";
import SignInBanner from "./sign-in-banner";
import ThirdItemsDisplay from "./third-items-display";
import FourthItemsDisplay from "./fourth-items-display";
import { useNavContext } from "@/context/nav-context";
import { twMerge } from "tailwind-merge";
import { useUser } from "@clerk/nextjs";

const Sidebar = () => {
  const { isSignedIn } = useUser();
  const styledHr = <hr className="text-zinc-700 my-5" />;
  const { isNavExpanded } = useNavContext();

  return (
    <div
      className={twMerge(
        isNavExpanded ? "w-auto" : "w-16",
        "pb-24 duration-100 ease-in-out sticky top-0 overflow-auto h-full"
      )}
    >
      <FirstItemsDisplay />
      {isNavExpanded && (
        <>
          {styledHr}
          <SecondItemsDisplay />
        </>
      )}

      {isNavExpanded && !isSignedIn && (
        <>
          {styledHr}
          <SignInBanner />
        </>
      )}
      {isNavExpanded && isSignedIn && (
        <>
          {styledHr}
          <ThirdItemsDisplay />
        </>
      )}
      {isNavExpanded && (
        <>
          {styledHr}
          <FourthItemsDisplay />
        </>
      )}
    </div>
  );
};

export default Sidebar;
